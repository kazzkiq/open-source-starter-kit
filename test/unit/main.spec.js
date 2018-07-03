require("reify");
const mocha = require('mocha');
const expect = require('chai').expect;
const ProjectName = require('../../build/project-name.min.js');

describe('Testing Your Project', () => {
  it('ProjectSample: Should be a function', () => {
    expect({}.toString.call(ProjectName) === '[object Function]').to.be.true;
  });

  // Other tests here
});
