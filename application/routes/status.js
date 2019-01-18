const {Docker} = require('node-docker-api');

const docker = new Docker({ socketPath: '/var/run/docker.sock' });

function getList(api_res) {
  // List
  docker.container.list({all: true})
  // Inspect
  .then(function(containers) {
    var list = '{';
    for (let index = 0; index < containers.length; index++) {
        const element = containers[index];
        list += '"' + element.data.Labels['com.docker.compose.service'] + '"' + ':' + '"' + element.data.State + '"' + ',';
        console.log(element.data.Labels["com.docker.compose.service"], element.data.State);
    }
    list = list.substring(0, list.length - 1) + '}';
    api_res.json(JSON.parse(list));
  })
  .catch(function(error) {
      console.log(error);
      api_res.json(JSON.parse(error));
  });
}

module.exports = { getList }