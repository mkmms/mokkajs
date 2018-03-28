const http = require('http');

const server = (function( cb ){
	return http.createServer(function(req, res){
		if( typeof cb == "function" ){
			cb(req, res);
		} else{
			res.end()
		}
	})
})

module.exports = server;