// Article.js
const crypto = require("crypto");
const redis = require("redis");

/**
 * Redis Client
 * @type {RedisClient}
 */
let client;
if (process.env.REDIS_URL) {
  // heroku
  const url = require("url");
  const data = url.parse(process.env.REDIS_URL);
  client = redis.createClient(data.port, data.hostname);
  client.auth(data.auth.split(":")[1]);
} else {
  // local
  client = redis.createClient();
}

/**
 * 記事
 */
class Article {
  /**
   * 
   * @param {string} title 
   * @param {string} url 
   */
  constructor(title, url) {
    this.title = title;
    this.url = url;
    this.digest = null;
  }

  /**
   * @returns {string}
   */
  get hash() {
    if (this.digest === null) {
      const hash = crypto.createHash("sha1");
      hash.update(this.url);
      this.digest = hash.digest("hex");
    }
    return this.digest;
  }

  /**
   * async method
   * @return {Promise<boolean>}
   */
  exists() {
    return new Promise((resolve, reject) => {
      // SISMEMBER
      client.sismember("xr-set", this.hash, (err, reply) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(reply !== 0);
      })
    });
  }

  /**
   * async method
   * @return {Promise<number>}
   */
  addList() {
    return new Promise((resolve, reject) => {
      const value = JSON.stringify({
        hash: this.hash,
        title: this.title,
        url: this.url
      });

      // RPUSH
      client.rpush("xr-list", value, (err, reply) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(reply);
      });
    });
  }

  /**
   * async method
   * @return {Promise<number>}
   */
  addSet() {
    return new Promise((resolve, reject) => {
      // SADD
      client.sadd("xr-set", this.hash, (err, reply) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(reply);
      });
    });
  }

  /**
   * Redisへ登録
   * 
   * @return {Promise<number>}
   */
  async regist() {
    let ret = 0;
    const exists = await this.exists();

    if (!exists) {
      await this.addList();
      await this.addSet();
      ret = 1;
    }

    return ret;
  }
}

module.exports = Article;
