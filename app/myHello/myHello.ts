namespace App {
    
    
    class HelloVm {
        public myTitle: string;
        
        HelloVm() {
            this.myTitle = 'unknown'
        }

    }



    app.component('myHello', {
        controller: HelloVm,
        templateUrl: 'app/myHello/myHello.html',
        bindings: {
            'myTitle': '<'
        }
    })




}