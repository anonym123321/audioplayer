var data = {
    title: [
        'Crystal Castles -  Crimeware (Radio Edit) ',
        "Crystal Castles - kerosene",
        "ANDROMEDA",
        "AFTER DARK ",
        "Calvin Harris — Summer.mp3",
        "MIA_-_Paper_Planes_(musmore.com).mp3"
    ],



    song: [
        "music/song1.mp3",
        "music/Crystal Castles - Kerosene (mp3store.cc).mp3",
        "music/lxst_cxntury_-_andromeda_muzati.net (1).mp3",
        "music/Mr.Kitty_-_After_Dark.mp3",
        "music/Calvin Harris — Summer.mp3",
        "music/song2.mp3"
   

    ],


    poster: [
        "https://i.gifer.com/9kGQ.gif ",
        "https://i.pinimg.com/originals/ff/64/d2/ff64d27355f3b268a624aa7df7120b0b.gif",
        "https://c.tenor.com/zh_Jd-loZKkAAAAC/galaxy-andromeda-galaxy.gif",
        "https://steamuserimages-a.akamaihd.net/ugc/1704035240685304558/A688BFF3E5D21EAB2316A5B962C570550F5175C7/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
        "https://c.tenor.com/h2XRU-z2uOgAAAAM/summer-is-coming-sun.gif",
        "https://i.gifer.com/YIzR.gif"
    ]
}

var song = new Audio()
var currentSong = 0;
console.log(song);


window.onload = function () {
    playSong()
}

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
}



function playOrPauseSong() {
    let play = document.getElementById("play");


    if (song.paused) {
        song.play();
        play.src = "images/pause.png" //pause
    } else {
        song.pause();
        play.src = "images/play-button-arrowhead.png" //play
    }

}



song.addEventListener("timeupdate", function () {
    console.log(song.currentTime);
    console.log(song.duration);

    let fill = document.getElementById("fill")

    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%";

    convertTime(song.currentTime)


    if (song.ended) {
        next()
    }

})


function convertTime(seconds){

    let currentTime = document.getElementById("currentTime");
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    
    currentTime.textContent = min + ":" + sec;
    
    totalTime(Math.round(song.duration));
    
    // console.log(seconds);
    // console.log(min);
    
    }

  function totalTime(seconds){
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    if(isNaN(min) || isNaN(sec)){
        return false
    }else{

        currentTime.textContent += "/" + min + ":" + sec;

    }



  }


  function next(){
      currentSong++;
      console.log(currentSong);
    if(currentSong == data.song.length){
        currentSong = 0 
    }
 

    playSong();
    play.src = "images/pause.png"

  }

  function pre(){
      currentSong--;

      if(currentSong < 0 ){
          currentSong = data.song.length - 1
      }
      playSong();
      play.src = "images/pause.png"
  }

  function muted(){
      let muted = document.getElementById("mute");
      if(song.muted){
          song.muted = false
          muted.src = "images/volume.png"
      }else{
          song.muted = true
          muted.src = "images/volume-mute.png"
      }
  }

  function decrease(){
      song.volume -= 0.2
  }

  function increase(){
    song.volume += 0.2
}