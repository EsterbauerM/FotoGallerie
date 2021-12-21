var pics = new Array("/pics/img_01.jpg", "/pics/img_02.jpg", "/pics/img_03.jpg", "/pics/img_04.jpg", "/pics/img_05.jpg", "/pics/img_06.jpg");
var thumb = new Array("/pics/thumb_01.jpg", "/pics/thumb_02.jpg", "/pics/thumb_03.jpg", "/pics/thumb_04.jpg", "/pics/thumb_05.jpg", "/pics/thumb_06.jpg");

var pos=0;
var posBefore = 0;
var time=2000;

window.onload = function (){

    imageLoader();

    showing();
    
    document.getElementById ("previous").onclick = previousImg;

    document.getElementById("slideshow").onclick = stop;

    document.getElementById("next").onclick = nextImg;

    document.querySelector(".line").onclick=collapse;

    document.getElementById("reset").onclick=resetTiming;
}

function imageLoader() {

    var bigImg = document.createElement("img");
    document.querySelector(".showing").appendChild(bigImg);
    
    for(var i=0;i<thumb.length;i++){
        var smallImg = document.createElement("img");
        var att = document.createAttribute("id");
        smallImg.src=thumb[i];
        att.value = i;
        smallImg.setAttributeNode(att);
        document.querySelector(".preview").appendChild(smallImg);
    }
}

document.querySelector(".preview").addEventListener('click',(e) => { 
    clickSelectPass(Array.from(document.querySelectorAll("img")).indexOf(e.target));
})

function clickSelectPass(clicked) {
    posBefore = pos;
    pos = clicked-1;
    document.querySelector('.showing img').src = pics[pos];
    showing();
}

function showing() {
    document.getElementById(posBefore).style.opacity="40%";
    document.querySelector(".showing img").src = pics[pos];
    document.getElementById(pos).style.opacity="100%";
}

let interval = null;
function stop(){
    changeTiming();
    
    if(interval === null){
        interval = window.setInterval(() => {nextImg() },time)
        nextImg()
        document.getElementById("slideshow").style.backgroundColor="rgb(97, 212, 97)";
    } else {
        document.getElementById("input").value="";
        document.getElementById("slideshow").style.backgroundColor="rgb(121, 179, 255)";
        window.clearInterval(interval);
        interval = null;
    }
}

function previousImg(){
    posBefore = pos;
    pos--;
    if(pos<0)
        pos = (pics.length)-1;
    showing();
}

function nextImg(){
    posBefore = pos;
    pos++;
    if(pos==pics.length)
        pos=0;
    showing();
}

function changeTiming(){
    if(document.getElementById("input").value!=""){
        time = document.getElementById("input").value;
        time = parseInt(time);
    }
}

let open = true;
function collapse(){
    if(open){
        document.querySelector(".preview").style.transform = 'scaleY(0)';
        document.querySelector(".showing").style.bottom = '-60px';
        document.querySelector(".minus-line").style.transform="rotate(90deg)";
        document.querySelector(".showing").style.transform="scale(1.2)";
        
        open = false;
    } else{
        document.querySelector(".preview").style.transform = 'scaleY(1)'
        document.querySelector(".showing").style.bottom = '0'
        document.querySelector(".minus-line").style.transform="rotate(0deg)";
        document.querySelector(".showing").style.transform="scale(1)";
        
        open = true;
    }
}

function resetTiming(){
    window.clearInterval(interval);
    document.getElementById("input").value="";
    document.getElementById("slideshow").style.backgroundColor="rgb(168, 204, 250)";

    time=2000;
}