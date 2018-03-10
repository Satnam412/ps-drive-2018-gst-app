'use strict';

const Hapi = require('hapi');
const MySQL = require('mysql');

const server = new Hapi.Server();

const connection = MySQL.createConnection({
     host: 'localhost',
     user: 'username',
     password: 'password',
     database: 'PlacementSeason'
});

server.connection({ port: 3000, host: 'localhost' });

connection.connect();

server.route({
    method: 'GET',
    path: '/list',
    handler: function (request, reply) {
       connection.query('SELECT product_id, product_name, product_price, product_gst FROM itemlist',
       function (error, results, fields) {
       if (error) throw error;

       reply(results);
    });
  }
});

server.route({

    method: 'POST',
    path: '/list',
    handler: function (request, reply) {
       connection.query('INSERT INTO itemlist (product_id,product_name,product_price,product_gst) VALUES ("' + request.payload.product_id + '","' + request.payload.product_name + '","' + request.payload.product_price + '","' + request.payload.product_gst + '")',
       function (error, results, fields) {
       if (error) throw error;

       reply('succesfully updated');
    });
  }
});

server.route({
    method: 'GET',
    path: '/item/{code}',
    handler: function (request, reply) {
		connection.query('select * from itemlist where product_name = "' + request.params.code + '" or product_id = "' + request.params.code + '"',
		function (error, results, fields) {
		if (error) throw error;
		
		reply(results);
    });
  }
});


server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/product',
        handler: function (request, reply) {
            reply.file('./PRODUCT.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/bill',
        handler: function (request, reply) {
            reply.file('./BILL.html');
        }
    });

});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});