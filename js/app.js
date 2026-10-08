// ===== Birthday Website Controls =====
function go(page){ window.location.href = page; }

function goBack(){
  if(document.referrer && new URL(document.referrer).origin === window.location.origin){
    history.back();
  }else{
    go('index.html');
  }
}

function unlock(){
  const input = document.getElementById('code');
  const error = document.getElementById('error');
  if(!input) return;
  if(input.value === '1110'){
    error.textContent = 'Unlocked! 🎉';
    error.style.color = '#b9ffd1';
    setTimeout(()=>go('question.html'),450);
  }else{
    const messages = [
      "Wrong! Even the cake is disappointed. 🎂😂",
      "Nope! Nice try, detective. 🕵️‍♀️",
      "That code is more wrong than pineapple on... okay, never mind. 🍍😂",
      "Access denied! The birthday magic says NOPE. 😭",
      "Hmm... your birthday privileges are still locked! 🔒😌"
    ];
    error.textContent = messages[Math.floor(Math.random()*messages.length)];
    input.value = '';
    input.focus();
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  const input=document.getElementById('code');
  if(input){
    input.addEventListener('keydown',e=>{if(e.key==='Enter') unlock();});
  }
});

// Optional local background music.
// Put your music file at assets/music/birthday-song.mp3.
// Browsers generally block autoplay until the visitor interacts, so music starts
// after the first click/tap anywhere on the site.
(function(){
  const musicSrc='assets/music/birthday-song.mp3';
  let audio;
  function startMusic(){
    if(audio) return;
    audio=new Audio(musicSrc);
    audio.loop=true;
    audio.volume=.28;
    audio.play().catch(()=>{});
  }
  window.addEventListener('pointerdown',startMusic,{once:true});
})();