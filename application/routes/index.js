const status = require('./status');
const startOne = require('./startOne');
const stopOne = require('./stopOne');

module.exports = (router) => {

  router.get('/list', function(api_req, api_res) {
      status.getList(api_res);
  });

	router.post('/start/:service', function(api_req, api_res) {
      var service = api_req.params.service;
      startOne.startService(service, api_res);
  });

  router.post('/stop/:service', function(api_req, api_res) {
      var service = api_req.params.service;
      stopOne.stopService(service, api_res);
  });

	return router;
};