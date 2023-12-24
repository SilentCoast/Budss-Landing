window.onscroll = function () { 
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("fixed-header").style.visibility = "visible";
    } 
    else{
        document.getElementById("fixed-header").style.visibility = "hidden";
    }
    };

window.onload = function() {
    var acceptButton = document.getElementById('accept-cookies');
    var banner = document.getElementById('cookie-banner');

    if (!localStorage.getItem('cookies_accepted')) {
        banner.style.visibility = 'visible';
    }

    acceptButton.onclick = function() {
        localStorage.setItem('cookies_accepted', true);
        banner.style.visibility = 'hidden';
    }
}

$(document).ready(function(){
    $('#phone').mask('+0 000 000 00 00');
    }
  );

document.addEventListener("DOMContentLoaded", function(){
    var buttons = document.querySelectorAll(".btn-contact-sales");
    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            document.getElementById("contact-sales").style.visibility = 'visible';
        });
    });
});

function closeContactSales(){
    document.getElementById("contact-sales").style.visibility = 'hidden';
}
function thankyou(){
    document.getElementById("thank-you").style.visibility = "visible";
}
