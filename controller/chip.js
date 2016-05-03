(function () {
    'use strict';
    angular
        .module('shoppingPad')
        .controller('chipCtrl', DemoCtrl);
    function DemoCtrl ($timeout, $q) {
        var self = this;
        self.readonly = false;
        // Lists of fruit names and Vegetable objects
        self.fruitNames = ['Apple', 'Banana', 'Orange'];
    }
})();
