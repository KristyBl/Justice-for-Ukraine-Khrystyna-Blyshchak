// event timer for main page//
const eventDate = new Date('2022-02-24');

function updateTimer(){
  const now = new Date();
  const timeDifference = now - eventDate

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  document.getElementById('eventTimer').innerText = `${days} Days of Full-Scale War`;
}

updateTimer();
setInterval(updateTimer, 1000);





