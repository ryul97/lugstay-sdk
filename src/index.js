const $INIT = require('./methods/init')
const $SEARCHAROUND = require('./methods/searchAround')

class LugStay {
  constructor(store_id = 0) {
    this._store_id = store_id
  }

  async init(api_key){
    let res = await $INIT.get(api_key);

    console.log(res);
  }

  async searchAround(options = {}){
    let res = await $SEARCHAROUND.get(options);

    console.log(res)
  }
}

(function(window){
  window.LugStay = new LugStay();
})(window);