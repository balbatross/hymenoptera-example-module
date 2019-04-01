const redis = require('redis')



class Redis{
  constructor(opts, instance){
    this.client = redis.createClient();
  }

  set(opts){
    this.client.set(opts.key, otps.val)
  }
}

module.exports = Redis
