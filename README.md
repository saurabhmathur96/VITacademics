VITacademics
============

VITacademics Backend and Web App

For the API Documentation, check out the [Project Wiki] (https://github.com/aneesh-neelam/VITacademics/wiki)

Please report any bugs or issues [here] (https://github.com/aneesh-neelam/VITacademics/issues) 

#### Instructions for Installation:
###### Install Node.js 0.10.x 
###### Install all dependencies
    $ npm install
###### Install frontend dependencies manually (Microsoft Windows only)
The npm postinstall script to run bower may not work properly on Windows

    # npm -g install bower
    $ bower install
###### Run the server locally at port 3000 or "PORT" in process.env
    $ npm start
    
#### External Requirements:
* A MongoDB instance running locally or valid "MONGOLAB_URI"/"MONGOHQ_URI" string in process.env 
* A valid "COOKIE_SECRET" string in process.env for better security (Optional)
