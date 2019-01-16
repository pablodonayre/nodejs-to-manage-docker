const {Docker} = require('node-docker-api');

const docker = new Docker({ socketPath: '/var/run/docker.sock' });

process.argv.forEach(function (val, index, array) {
    if (index == 2) {
        // List
        docker.container.list()
        // Inspect
        .then(function(containers) {
            for (let index = 0; index < containers.length; index++) {
                const element = containers[index];
                if (element.data.Labels["com.docker.compose.service"] != val) {
                    continue;
                }
                element.stop();
                console.log('done');
            }
        })
        .catch(error => console.log(error));   
    }
});