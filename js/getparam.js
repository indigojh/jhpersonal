define(function(require,exports,module){
	var $ = require("$");
	function getparam(){
		require.async('js/jquery-1.12.2.min.js');	//异步加载js、css,需要时再加载进来。
		var arr = location.search.substr(1).split('&');
		var param_obj = {};
		for(i in arr){
			var _arr = arr[i].split('=');
			param_obj[ _arr[0] ] = _arr[1];
		}
		console.log(param_obj);
	}
	module.exports = getparam;
});