var timer = 0;
self.addEventListener('message', function(e) {
    //console.log("Enter");
    var data = e.data;
    var stop = false;
    switch (data) {
    case 'moveUp':
        var y = 0;
        var plus = 10;
        //console.log("9");
        timer = setInterval(function() {
            y += plus;
            //console.log('Move to ' + y);
            self.postMessage({
                'msg' : "moveTo",
                'y' : y,
                'plus' : plus
            });

        }, 50);
        break;
    case 'die':
        clearInterval(timer);
        //console.log("die");
        break;
    default:
    };
}, false);
