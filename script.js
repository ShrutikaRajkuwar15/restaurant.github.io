function validate(){
    var yourName=document.getElementById("yourName").value;
    var num= document.getElementById("number").value;
    // var num1=num.toString();
    // var len=num1.length;
    var address=document.getElementById("address").value;
    var Namemsg=document.getElementById("Namemsg");
    var nummsg=document.getElementById("nummsg");
    var Addressmsg=document.getElementById("Addressmsg");

    //name
    if(!isNaN(yourName)){
        document.getElementById("Namemsg").innerHTML="Please enter proper name";
        return false;
    }  
    else{
        Namemsg.remove();
        // return true;
    }
    // if(len!=10){
    //     document.getElementById("nummsg").innerHTML="Enter 10 digit number";
    //     return false;
    // } 
    // else{
    //     nummsg.remove();
    //     return true;
    // }
    if(num.length != 10){
        document.getElementById("nummsg").innerHTML="Enter 10 digit number";
        return false;
    } 
    else{
        Namemsg.remove();

        // nummsg.remove();
        // return true;
    }

    if(!isNaN(address)){
        document.getElementById("Addressmsg").innerHTML="Please enter proper address";
        return false;

    } else{
        Addressmsg.remove();
    }

    var res= confirm("Are you sure to processed with your order");
    if (res){
        alert("Your order has been placed successfully");
        document.getElementById("yourName").value="";
        document.getElementById("number").value="";
        document.getElementById("address").value="";

    } else {
        alert("Your order is not confirmed");
    }  
   
    // if(document.myform.yourName.value==""){
    //     alert("Enter Name");
    //     return false;
    // }
    // console.log(hi);

    // number   
}
var Date1 =document.getElementById("TodaysDate");
var date=new Date().toLocaleDateString();
    Date1.innerHTML= date;
    console.log(date);

// function funDate(){
//     // var Date1 =document.getElementById("TodaysDate");
//     var date=new Date();
//     document.getElementById("TodaysDate").innerHTML=date;
//     // Date1.innerHTML= date.getFullYear();
//     console.log(date);
// }

// var heart=document.getElementById("menu-heart")
function menuheart(){
    alert("hi");
    document.body.style.color = "purple";
    document.styleSheets.background.color="pink";
}

let menu = document.querySelector('#menu-bars');
let navbar= document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll =()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick=()=>{
    document.querySelector('#search-form').classList.toggle('active');

}
document.querySelector('#close').onclick=()=>{
    document.querySelector('#search-form').classList.remove('active');
}        

var Swiper=new Swiper(".review-slider",{

    spaceBetween:30,
    centeredSlides:true,
    loop:true,
    speed:2000,
    autoplay:{
                delay:1000,
                disableOnInteration:false,  

            },
    pagination: {
        el: ".swiper-container-pagination",
        clickable: true,
      },
    navigation: {
        nextEl: ".swiper-container-button-next",
        prevEl: ".swiper-container-button-prev",
      },
        breakpoints:{
            0:{
                slidesPerView:1,
                spaceBetween: 40,
            },
            640:{
                slidesPerView:1,
                spaceBetween: 40,

            },
            768:{
                slidesPerView:2,
            },
            1024:{
                slidesPerView:3,
            },
        },

});

$('.review-slider').hover(function(){
    Swiper.autoplay.stop();
  }, function(){
    Swiper.autoplay.start();
  });