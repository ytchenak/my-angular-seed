var App;
(function (App) {
    var HelloVm = (function () {
        function HelloVm() {
        }
        HelloVm.prototype.HelloVm = function () {
            this.myTitle = 'unknown';
        };
        return HelloVm;
    }());
    App.app.component('myHello', {
        controller: HelloVm,
        templateUrl: 'app/myHello/myHello.html',
        bindings: {
            'myTitle': '<'
        }
    });
})(App || (App = {}));
//# sourceMappingURL=myHello.js.map