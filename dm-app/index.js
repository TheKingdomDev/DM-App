// Require Hapi.js
const hapi = require('hapi');
const mongoose = require('mongoose');
// Create a constant called server to create a new instance of our Hapi server - pass in port and host
const server = hapi.server({
  port: 4000,
  host: 'localhost'
});
// Create an async experession => inside init create an async method to start the server.
const init = async () => {
  server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      return `<h1>Hapi DM App</h1>`;
    }
  })

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

// Connect to the Mongo DB - Mongo DB Version 3.4 installed
// Run Mongo DB from C://data - "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"

// Local database connection
mongoose.connect('mongodb://localhost/dm-database');

// MLab Database - (need to troubleshoot connection)
//mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds257640.mlab.com:57640/dm-database');

// Database connection function - see if connection is working
mongoose.connection.once('open', () => {
  console.log('Connected to the database');
}).on('error', () => {
  console.log('Connection error: ', error);
})

// Call the init function
init();