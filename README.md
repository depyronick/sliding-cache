# sliding-cache
A node in-memory cache helper that serves an object from cache as long as it requested within the specified time frame.


### Usage

    var SlidingCache = require('sliding-cache');
    var slidingCache = new SlidingCache();
    
    var liveDataSource = function(callback) {
    	httprequestmodule.get(url, data, function(err, response) {
    		if(!err) {
    			callback(response.body);
    		}
    	});
    }
    
    slidingCache.Run('SOME_KEY_HERE', liveDataSource, function(data) {
        res.json(data);
    }, 7000);