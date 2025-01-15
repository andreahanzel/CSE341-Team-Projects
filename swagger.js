const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temple API',
    description: 'LDS Temple API - Week02 Assignment',
  },
  host: 'localhost:8080',  // Your local host and port
  schemes: ['http'],
  definitions: {
    Temple: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        temple_id: { type: 'string' },
        description: { type: 'string' },
        location: { type: 'string' }
      }
    }
  }
};

const outputFile = './swagger-output.json';
const routes = ['./routes/temple.js'];  // Ensure this path is correct

swaggerAutogen(outputFile, routes, doc);
