const http = require('k6/http');
const { check, sleep } = require('k6');
const { SharedArray } = require('k6/data');
const Utils = require('../utils/utils.js');

const users = new SharedArray('users', function() {
  return JSON.parse(open('../data/users.json'));
});

exports.options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '50s', target: 20 },
    { duration: '30s', target: 20 },
    { duration: '20s', target: 20 },
  ],
};

exports.default = function() {
  const user = users[Math.floor(Math.random() * users.length)];

  const login = http.post(`${Utils.getBaseUrl()}`, {
    log: user.username,
    pwd: user.password,
  });

  check(login, {
    'login success': (res) => res.status === 200,
  });

  sleep(1);
};