"use strict";

$(document).ready(init);

function init() {
    startingAnimation();

}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

FB.init({
    appId: '{200466797006747}',
    status: true,
    xfbml: true,
    version: 'v2.4' // or v2.0, v2.1, v2.2, v2.3
});



function myFacebookLogin() {
        FB.api('/840783929399087/feed',
            'post', {
                message: 'Hello, world!'
            },
            function(response) {
                if (response && !response.error) {
                    console.log('response.error: ', response.error);
                }
            }
        );
    };
}

function startingAnimation() {
    var intro = $('.intro')
    setTimeout(function() {
        $('.jumbotron').css('display', 'block').addClass('animated fadeIn');
        $('.intro').css('display', 'block').addClass('animated bounceIn');
    }, 100)



}
