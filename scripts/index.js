window.onload=function(){
var sence=document.getElementById('dazi');
var block=document.getElementsByClassName('block');
var shijian=document.getElementById('shijian');
var jilu=document.getElementById('jiluyi');
var xx=document.getElementById('jilu');
var jiluer=document.getElementById('jiluer')
console.log(jilu)
var hasJiShuqi=false,time=0,timerId;
for(var i=0;i<52;i++){
	var el=document.createElement('div');
	el.setAttribute('class','block');
	sence.appendChild(el);
	var rr=65+Math.floor(Math.random()*(122-65));
	while(rr>=91&&rr<=96){
		rr=65+Math.floor(Math.random()*(122-65));
	}
    block[i].innerHTML=String.fromCharCode(rr);
}
var toop=sence.firstElementChild;
document.onkeydown=function(e){
  if(e.shiftKey){
  if(e.keyCode!==toop.innerHTML.charCodeAt(0)) return;
}else{
  if(e.keyCode+32!=toop.innerHTML.charCodeAt(0)) return;
}
  if(!hasJiShuqi){
    timerId=setInterval(function(){
      time++
      shijian.innerHTML=time+'S';
      
    },1000);
    hasJiShuqi=true;
  }
jilu.innerHTML=time+'S';
toop.style.background='black';
toop=toop.nextElementSibling;
if(toop==null){clearInterval(timerId);xx.style.display='block';}
};  

































};