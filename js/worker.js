var timer = 0;
self.addEventListener('message', function(e) {
    var data = e.data.split(",")[0];
    switch (data) {
    case 'moveDown':
        var y = 0;
        var plus = Math.floor(Math.random() * 8) + 10;
        //console.log("9");
        timer = setInterval(function() {
            y += plus;
            //console.log('Move to ' + y);
            self.postMessage({
                'msg' : "moveTo",
                'y' : y,
                'plus' : plus
            });
        //console.log( (parseInt)(500 / (e.data.split(",")[1]) * 1.04 ));
        }, (parseInt)(500 *(e.data.split(",")[1]) * 0.96 ));
        break;
    case 'die':
        clearInterval(timer);
        //console.log("die");
        break;
    default:
    };
}, false);
