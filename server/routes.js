'use strict';

var controller = require ('./controller');

module.exports = function(app) {

    app.route('/')
        .get(controller.start);

    app.route('/stats')
        .get(controller.stats);

};
