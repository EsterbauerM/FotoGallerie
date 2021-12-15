var pics = new Array("/pics/img_01.jpg", "/pics/img_02.jpg", "/pics/img_03.jpg", "/pics/img_04.jpg", "/pics/img_05.jpg", "/pics/img_06.jpg");
var thumb = new Array("/pics/thumb_01.jpg", "/pics/thumb_02.jpg", "/pics/thumb_03.jpg", "/pics/thumb_04.jpg", "/pics/thumb_05.jpg", "/pics/thumb_06.jpg");

var pos=0;
var time=2000;

window.onload = function (){

    document.getElementById ("previous").onclick = previousImg;

    document.getElementById("slideshow").onclick = stop;

    document.getElementById("next").onclick = nextImg;

    document.getElementsByClassName("preview").onclick = showing;

    document.getElementById("line").onclick=collapse;

    document.getElementById("reset").onclick=resetTiming;
}

function showing(){

    for(var i=0;i<pics.length;i++)
        document.getElementById(thumb[i]).style.opacity="40%";

    document.getElementById(thumb[pos]).style.opacity="100%";
}

function change_img(num){
    var showing_img = document.getElementById("showing_img").src = pics[num];
    pos = num;
    showing();
}

function previousImg(){
    pos--;
    if(pos<0)
        pos = (pics.length)-1;
    document.getElementById("showing_img").src = pics[pos];
    showing();
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
        document.getElementById("slideshow").style.backgroundColor="rgb(168, 204, 250)";
        window.clearInterval(interval);
        interval = null;
    }
}

function nextImg(){
    pos++;
    if(pos==pics.length)
        pos=0;
    document.getElementById("showing_img").src = pics[pos];
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
        document.querySelector(".preview").style.transform = 'scaleY(0)'
        document.querySelector(".showing").style.bottom = '-50px'
        document.getElementById("line").src="/icons/plus.png";
        document.querySelector(".line > div, .line > div > img").style.transition = 'none';
        
        open = false;
    } else{
        document.querySelector(".preview").style.transform = 'scaleY(1)'
        document.querySelector(".showing").style.bottom = '0'
        document.getElementById("line").src="/icons/line.png";
        document.querySelector(".line > div, .line > div > img").style.transition = 'all .2s ease 0s';
       
        open = true;
    }
}

function resetTiming(){
    document.getElementById("input").value="";
    document.getElementById("slideshow").style.backgroundColor="rgb(168, 204, 250)";
    window.clearInterval(interval);

    time=2000;
}
