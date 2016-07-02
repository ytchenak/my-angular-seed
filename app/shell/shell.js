var App;
(function (App) {
    var ShellVm = (function () {
        function ShellVm() {
        }
        return ShellVm;
    }());
    App.app.component('shell', {
        controller: ShellVm,
        templateUrl: 'app/shell/shell.html'
    });
})(App || (App = {}));
//# sourceMappingURL=shell.js.map