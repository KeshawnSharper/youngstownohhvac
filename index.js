$(document).ready(function() {
     $(".mobile-icon").on("click", function() {
        console.log("hello")
            $(".mobile-list-showing").css({display:"block"});
            $(".navbar-button").css({display:"none"});
            $(".close-icon").css({display:"block"});
            $(".mobile-icon").css({display:"none"});
     })
     $(".close-icon").on("click", function() {
        console.log("hello")
            $(".mobile-list-showing").css({display:"none"});
            $(".navbar-button").css({display:"block"});
            $(".close-icon").css({display:"none"});
            $(".mobile-icon").css({display:"block"});
     })
});
$(document).ready(function() {
     $("#navbar ul a[href] li").on("click", function() {
        $(".mobile-list-showing").css({display:"none"});
        $(".navbar-button").css({display:"block"});
        $(".close-icon").css({display:"none"});
        $(".mobile-icon").css({display:"block"});
     });
})
// $(document).ready(function () {
    // function emailMessage(){
    //     const urlParams = new URLSearchParams(window.location.search);
    // const email = urlParams.get("email")
    // console.log(email)
    // document.querySelector("#email").textContent = `Thanks we sent you an email at ${email} to our news letter.`
    // }
    // document.querySelector("#email").textContent = `Thanks we sent you an email at ${email} to our news letter.`
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email")
    console.log(email)
    document.querySelector("#email").textContent = `Thanks we sent you an email at ${email}.`

// Scrolling Effect

$(window).on("scroll", function() {
     if($(window).scrollTop()) {
           $('nav').addClass('black');
     }

     else {
           $('nav').removeClass('black');
     }
})

// $(document).ready(function() {
//     $(".cpu-services-link").on("mouseover", function() {
//        $(".cpu-service-list-class").show()
//     });
// });
// $(document).ready(function() {
//     $(".cpu-service-list-class").on("mouseover", function() {
//        $(".cpu-service-list-class").show()
//     });
// });
$(document).ready(function() {
    $(".cpu-services-link").on("mouseover", function() {
        
        $(".cpu-service-list-class").css({display:"block"})    });
});
$(document).ready(function() {
    $(".cpu-services-link").on("mouseleave", function() {
        
       $(".cpu-service-list-class").css({display:"none"})
    });
});
$(document).ready(function() {
    $(".cpu-prices-link").on("mouseover", function() {
        
        $(".cpu-price-list-class").css({display:"block"})    });
});
$(document).ready(function() {
    $(".cpu-prices-link").on("mouseleave", function() {
        
       $(".cpu-price-list-class").css({display:"none"})
    });
});
$(document).ready(function() {
    $(".mobile-services-link").on("click", function() {
        
        $(".mobile-service-list-class").css({display:"block"})
        // ({display:"block"})    });
    })
});
// $(document).ready(function() {
//     $(".mobile-services-link").on("mouseleave", function() {
        
//        $(".mobile-service-list-class").css({display:"none"})
//     });
// });
$(document).ready(function() {
    $(".mobile-prices-link").on("click", function() {
        console.log(1)
        if ($(".mobile-price-list-class").css('display') === "none"){
            console.log(2)
            $(".mobile-price-list-class").css({display:"block"})
        }
        else{
        $(".mobile-price-list-class").css({display:"none"})    
        console.log(3)
}
    })
});
// $(document).ready(function() {
//     $(".mobile-prices-link").on("mouseleave", function() {
        
//        $(".mobile-price-list-class").css({display:"none"})
//     });
// });
function sendMail(){
 (function(){
     emailjs.init('CYfT3onImX-UZ9yiE')
 })();
 console.log(document.querySelector("#message").value,document.querySelector("#sender_email").value,document.querySelector("#sender_first_name").value,document.querySelector("#sender_last_name").value,document.querySelector("#sender_phone_number").value,)

 var params = {
     sender_first_name: document.querySelector("#sender_first_name").value,
     sender_last_name: document.querySelector("#sender_last_name").value,
     sender_phone_number:document.querySelector("#sender_phone_number").value,
     to: "awskeshawn@gmail.com",
     client:"Wyoming, MI(No CLient Now)",
     sender_email: document.querySelector("#sender_email").value,
     message: document.querySelector("#message").value
 }
 console.log(params)
 var serviceID = "service_103z8xr"
 var templateID = "template_lrelc7p"
 emailjs.send(serviceID,templateID,params)
 .then(res => {
     alert("Email Sent")
     window.open(
`./thankyou.html?email=${params.sender_email}`," "
)
 })
 .catch(err => console.log(err))
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}
