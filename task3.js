const music=document.querySelector('audio');
const img=document.querySelector('img');
const play=document.getElementById('play');
const artist=document.getElementById('artist');
const title=document.getElementById('title');
const prev=document.getElementById('prev');
const next=document.getElementById('next');

//array
const songs =[
    {
        name:"music1",
        title:"Lotus Lane",
        artist:"the loyalist",
    },
    {
        name:"music2",
        title:"Black king",
        artist:"aurora",
    },
    {
        name:"music3",
        title:"Sappheiros",
        artist:"takma",
    },
    {
        name:"music4",
        title:"Walking Firiri",
        artist:"Gorkhali",
    },
    {
        name:"music2",
        title:"Dark light",
        artist:"loyalist",
    }
]

let onplay=false;

//play
const playMusic = () => {
    onplay=true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add('anime');
};

//pause
const pauseMusic = () => {
    onplay=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove('anime');
};


play.addEventListener('click', () => {
if(onplay){
    pauseMusic();
}
else{
    playMusic();
}

//by using ternary operator
//onplay?pauseMusic();playMusic();


});


// next previous functions

const loadSong = (songs) => {
title.textContent =songs.title;
artist.textContent =songs.artist;
music.src="music/"+songs.name+".mp3";
img.src="images/"+songs.name+".jpg";
};

songIndex=0;
// loadSong(songs[1]);

const nextSong = () => {
    songIndex=(songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex=((songIndex-1)+songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);

