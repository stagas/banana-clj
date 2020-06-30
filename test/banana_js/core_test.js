const banana = require('../../src/banana_js/core.js')

console.log('Growing a banana.',
  banana.grow('gmem') === 'bannaannnannannanannaananannannan')

console.log('Peeling a banana.',
  banana.peel('bannaannnannannanannaananannannan') === 'gmem')
