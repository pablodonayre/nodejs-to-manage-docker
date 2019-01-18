const {Docker} = require('node-docker-api');

const docker = new Docker({ socketPath: '/var/run/docker.sock' });

// List
docker.container.list()
   // Inspect
  .then(function(containers) {
  	
	    for (let index = 0; index < containers.length; index++) {

	        const element = containers[index];
			
			// if(element.data){
		        console.log("Service: ",element.data.Labels["com.docker.compose.service"]);
		        
		        console.log("Docker Image: ", element.data.Image); 
		        console.log("Names: ", element.data.Names[0]); 
		        if(element.data.Ports[0]){
		        	console.log("Public Port: ", element.data.Ports[0].PublicPort);	
		        }else{
		        	console.log("ptm");
		        }
		        console.log("State: ", element.data.State);
		        console.log("----------------------");
        	// }
	    }

  })
  .catch(error => console.log(error));