"use strict";

$(document).ready(init);

function init() {
    startingAnimation();
}


function myFacebookLogin() {
    console.log("Clicked");
    FB.api('/840783929399087/feed',
        'post', {
            message: 'Hello, world!'
        },
        function(response) {
            if (response.error) return console.log('response.error: ', response.error);
            console.log('response: ', response);
        }
    );

};




function startingAnimation() {
    var intro = $('.intro')
    setTimeout(function() {
        $('.jumbotron').css('display', 'block').addClass('animated fadeIn');
        $('.intro').css('display', 'block').addClass('animated bounceIn');
    }, 100)



}
