// var smp = document.querySelector("#btn1");
// var flMe = document.querySelector("#btn2");
// var ovrly = document.querySelector("#overlay");
// var mdl = document.querySelector("#modal");
// var icn = document.querySelector("#icon")

// smp.addEventListener("click",function(){
//     ovrly.style.display = "block"
//     mdl.style.scale = "1"
// })

// icn.addEventListener("click",function(){
//     ovrly.style.display = "none"
//     mdl.style.scale = "0"
// })

// var val = 0;
// flMe.addEventListener("click",function(){
//     // flMe.innerHTML = "Followed"
//     if(val === 0){
//         flMe.innerHTML = "Unfollow Me"
//         flMe.style.backgroundColor = "#16161641"
//         val = 1
//     }else{
//         flMe.innerHTML = "Follow Me"
//         flMe.style.backgroundColor = "#3e3e3e41"
//         val = 0
//     }
// })








// or,

var smp = document.querySelector("#btn1");
var flm = document.querySelector("#btn2");
var ovrly = document.querySelector("#overlay");
var mdl = document.querySelector("#modal");
var rdico = document.querySelector("#redico");

smp.addEventListener("click",function(){
    ovrly.style.display = "block";
    mdl.style.scale = "1";
})

rdico.addEventListener("click",function(){
    ovrly.style.display = "none";
    mdl.style.scale = "0"; 
})

var condition = 0;
flm.addEventListener("click",function(){
    if(condition === 0){
        flm.innerHTML = "Following";
        flm.style.backgroundColor = "#a3a3a330";
        condition = 1;
    }else{
        flm.innerHTML = "Follow";
        flm.style.backgroundColor = "#3e3e3e41";
        condition = 0;
    }
})













// or,



