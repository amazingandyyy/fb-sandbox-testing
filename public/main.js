"use strict";

$(document).ready(init);

window.fbAsyncInit = function() {
    FB.init({
        appId: '200466797006747',
        xfbml: true,
        version: 'v2.6'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function init() {
    startingAnimation();
    $('.messageDiv').not('.editterForm').submit(messageDivSubmitted);
    $('.messageContainer').on('click', '.delete', deleteOne);
    $('.messageContainer').on('click', '.edit', editOne);
    $('.editterForm').submit(editterFormSubmit);
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

}
