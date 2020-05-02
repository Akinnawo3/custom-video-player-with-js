

 var button = document.getElementById("playbutton");
var myvideo = document.getElementById("myvideo");
var defaultbar = document.getElementById("defaultbar");
var progress = document.getElementById("progressbar");
var barsize = 600;


button.onclick= function(){
    if (!myvideo.paused && !myvideo.ended){
        myvideo.pause();
        button.innerHTML= "PLAY";
        
    }
else{
      myvideo.play();
      button.innerHTML= "PAUSE";
      var inta = setInterval(increment,500);
}
}
function increment(){
    if (!myvideo.ended){
        var currentwidth =  myvideo.currentTime * barsize/myvideo.duration;
        progress.style.width = currentwidth + "px";
    }
 else{
    progress.style.width = "0px";
    button.innerHTML= "PLAY";
 }
}   

defaultbar.onclick= function(e){
if (!myvideo.paused && !myvideo.ended){

     var mousecoordinate = e.pageX-defaultbar.offsetLeft;
     myvideo.currentTime = mousecoordinate * myvideo.duration/barsize;
     progress.style.width= mousecoordinate + "px";
}else{
    var mousecoordinate = e.pageX-defaultbar.offsetLeft;
    myvideo.currentTime = mousecoordinate * myvideo.duration/barsize;
    progress.style.width= mousecoordinate + "px";
}

}
 
var tt = $("#firstjquery");
tt.on("mouseover",function(e){
    
    alert(e.type);
});
