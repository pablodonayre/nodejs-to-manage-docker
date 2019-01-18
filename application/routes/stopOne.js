const {Docker} = require('node-docker-api');

const docker = new Docker({ socketPath: '/var/run/docker.sock' });

function stopService(service, api_res) {
    // List
    docker.container.list()
    // Inspect
    .then(function(containers) {
        for (let index = 0; index < containers.length; index++) {
            const element = containers[index];
            if (element.data.Labels["com.docker.compose.service"] != service) {
                continue;
            }
            element.stop();
            console.log('done');
            api_res.json({"success" : true, "error" : null});
            return;
        }
        api_res.json({"success" : false, "error" : "No such service"});
    })
    .catch(function(error) {
        console.log(error);
        api_res.json({"success" : false, "error" : error});
    });   
}

module.exports = { stopService }