// explore.js

window.addEventListener('DOMContentLoaded', init);

function init(){
    const synth = window.speechSynthesis;
    const img = document.querySelector('#explore img');
    const textarea = document.getElementById('text-to-speak');
    const voiceSelect = document.getElementById('voice-select');
    const button = document.querySelector('button');

    let voices = [];

    function loadVoices() {
        voices = synth.getVoices();
        voiceSelect.querySelectorAll('option:not([disabled])').forEach(o => o.remove());
        voices.forEach((voice, i) => {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `${voice.name} (${voice.lang})`;
            voiceSelect.appendChild(option);
        });
    }

    loadVoices();
    
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }

    button.addEventListener('click', () => {
        const text = textarea.value.trim();
        if (!text || synth.speaking) return;

        const utterance = new SpeechSynthesisUtterance(text);

        const selectedIndex = voiceSelect.value;
        if (selectedIndex !== 'select' && voices[selectedIndex]) {
            utterance.voice = voices[selectedIndex];
        }

        utterance.onstart = () => {
            img.src = 'assets/images/smiling-open.png';
        };

        utterance.onend = () => {
            img.src = 'assets/images/smiling.png';
        };

        utterance.onerror = () => {
            img.src = 'assets/images/smiling.png';
        };

        synth.speak(utterance);
    });
}