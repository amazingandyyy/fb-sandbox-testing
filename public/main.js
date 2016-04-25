"use strict";

$(document).ready(init);

function init() {
    startingAnimation();
}


function myFacebookLogin() {
    console.log("Clicked");
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function(response) {
                console.log('Good to see youuuu, ' + response.name + '.');
                console.log('id ' + response.id + '.');
                console.log('Good to see youuuu, ' + response.name + '.');
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {
        scope: 'email,user_likes,publish_actions',
        return_scopes: true
    });

    // FB.api('/840783929399087/feed',
    //     'post', {
    //         message: 'Hello, world!'
    //     },
    //     function(response) {
    //         if (response.error) return console.log('response.error: ', response.error);
    //         console.log('response: ', response);
    //     }
    // );

};

function myFacebookLogout() {
    FB.logout(function(response) {
        if (response.authResponse) {
            console.log('Bye.... ');
            FB.api('/me', function(response) {
                console.log('Bye Bye.');
            });
        } else {
            console.log('User cancelled logoutttt or did not fully authorize.');
        }

    });
}




function startingAnimation() {
    var intro = $('.intro')
    setTimeout(function() {
        $('.jumbotron').css('display', 'block').addClass('animated fadeIn');
        $('.intro').css('display', 'block').addClass('animated bounceIn');
    }, 100)



}
