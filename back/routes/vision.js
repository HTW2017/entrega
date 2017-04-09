var express = require('express');
var proxy = require('express-http-proxy');
var router = express.Router();

/* GET users listing. */
router.get('*', [
    function(req, res) { console.log(req); },
    proxy('https://api.kairos.com', {
      forwardPath: function(req, res) {
        var path = require('url').parse(req.url).path.replace('/vision', '');
        console.log(path);
        return path;
      }
    })
]);

module.exports = router;
