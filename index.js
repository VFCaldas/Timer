
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('testing')
  },
  onTick() {
    console.log('ticking')
  },
  onComplete() {
    console.log('finished')
  }
});