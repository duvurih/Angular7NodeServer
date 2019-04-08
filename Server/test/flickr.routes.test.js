/**
 * Testing Flickr API Routes
 */
const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const server = require('../src/app');
const should = chai.should();

chai.use(chaiHttp);

describe('Flickrs Api All Images', function() {
    it('Retrieve all flickr images', function(done) {
        chai.request('http://localhost:3000')
          .get('/flickr')
          .end(function(err, res){
            //res.should.have.status(200);
            //res.should.be.json;
            expect(res.status).to.equal(200);
            done();
          }) 
      });
  });

  describe('Flickrs Api All Images By Tag', function() {
    const tagName = 'flowers';
    it('Retrieve all flickr images By Tag', function(done) {
        chai.request('http://localhost:3000')
          .get('/flickr/' + tagName)
          .end(function(err, res){
            //res.should.have.status(200);
            //res.should.be.json;
            expect(res.status).to.equal(200);
            done();
          }) 
      });
  });
