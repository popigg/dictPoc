'use strict';


var controller = require ('./controller');


var Router = function(router) {

    router.route('/')
        .get(controller);
};
