// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.getElementById('horn-select')
  const image = document.querySelector('#expose img')
  const audio = document.querySelector('audio')
  const button = document.querySelector('button')
  const volume = document.getElementById('volume')
  const volumeIcon = document.querySelector('#volume-controls img')
  // Fix volume icon size
  volumeIcon.width = 32
  volumeIcon.height = 32

  select.addEventListener('change', () => {
    const value = select.value

    image.src = `assets/images/${value}.svg`
    audio.src = `assets/audio/${value}.mp3`
  })
  

  button.addEventListener('click', () => {
    audio.play()
    if (select.value === 'party-horn') {
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()
    }
  })


   // Handle volume slider
  volume.addEventListener('input', () => {
    const vol = volume.value
    audio.volume = vol / 100

    // Update volume icon
    if (vol == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg'
    } else if (vol < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg'
    } else if (vol < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg'
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg'
    }
  })

}