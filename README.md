# SCT

This is a very basic npm project with default webpack setup.

In case you need some assistance take a look at official webpack docs:
 - [Guides](https://webpack.js.org/guides/) 
 - [Concepts](https://webpack.js.org/concepts/)

Eventually this application will request live data from a real API.


## API Documentation
Api server can be found in `server.js` file. 

To run the server do:
> `$ node server.js`

Server will start listening on port `6010`.

The server has 2 endpoints:

`/articles/sports` - returns a list of articles from `sport` category

`/articles/fashion` - returns a list of articles from `fashion` category


