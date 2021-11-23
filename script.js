//jQuerry for what we do icon occlick navigation//
$(document).ready(function(){
    $("#img1").on("click",function(){
        $("#img1").hide();
        $("#header4").addClass("header");
        $("#header4").css("text-align","center");
        $("#header4").show();
        $("#para4").addClass("desc-para");
        $("#para4").show();
    })
    $("#img2").on("click",function(){
        $("#img2").hide();
        $("#header5").addClass("header");
        $("#header5").show();
        $("#para5").addClass("desc-para");
        $("#para5").show();
    })
    $("#img3").on("click",function(){
        $("#img3").hide();
        $("#header6").addClass("header");
        $("#header6").show();
        $("#para6").addClass("desc-para");
        $("#para6").show();
    })
    
})

//mouseonhover toggle portfolio images to show description//

$(document).ready(function(){
    $("#image-1").hover(function(){
        $(".details").toggle()
    })
    $("#image-2").hover(function(){
        $(".details").toggle()
    })
    $("#image-3").hover(function(){
        $(".details").toggle()
    })
    $("#image-4").hover(function(){
        $(".details").toggle()
    })
    $("#image-5").hover(function(){
        $(".details").toggle()
    })
    $("#image-6").hover(function(){
        $(".details").toggle()
    })
    $("#image-7").hover(function(){
        $(".details").toggle()
    })
    $("#image-8").hover(function(){
        $(".details").toggle()
    })
});


// message validation button//

function myFunction(){
    var myUsers=document.getElementById("user");
    var myEmail=document.getElementById("email");
    var myMessage=document.getElementById("msg");
    alert("Hello " + user.value +" Thank you for your message " + "our support team will get back to you through " + myEmail.value);  
}