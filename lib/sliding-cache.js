'use strict';

class SlidingCache {
    constructor() {
        this.store = {};
    }

    Run(cacheKey, logic, callback, timeFrame) {
        var store = this._getStore(cacheKey);

        if(store.data) {
            callback(store.data);
        } else {
            logic(function(data) {
                store.data = data;
                callback(data);
            });
        }

        this._run(store, timeFrame);
    }

    _run(store, timeframe) {
        clearTimeout(store.timeout);
        store.timeout = setTimeout(function() {
            store.data = false;
        }, timeframe);
    }

    _getStore(key) {
        if(this.store.hasOwnProperty(key)) {
            return this.store[key];
        } else {
            this.store[key] = {
                data: false,
                timeout: null
            };
            return this.store[key];
        }
    }
}

module.exports = SlidingCache;