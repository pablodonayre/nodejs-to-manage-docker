const {Docker} = require('node-docker-api');

const docker = new Docker({ socketPath: '/var/run/docker.sock' });

// List
docker.container.list()
   // Inspect
  .then(function(containers) {
    for (let index = 0; index < containers.length; index++) {
        const element = containers[index];
        console.log(element.data.Labels["com.docker.compose.service"], element.data.State);
    }
  })
  .catch(error => console.log(error));