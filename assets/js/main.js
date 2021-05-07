const result = document.querySelector("#result");
const inputElement = document.querySelector("#input");

inputElement.addEventListener('input', (event) => {
	playAudios(...event.target.value.split(''));
});

function playAudios(...letters) {
	letters.forEach((letter) => {
		const audio = document.querySelector(`audio[data-key="${letter}"]`);
	  if (audio && audio.paused) audio.play();
	});

	[...document.querySelectorAll('audio')].map((i) => i.dataset.key)
		.filter((letter) => !letters.includes(letter))
		.forEach((letter) => {
			document.querySelector(`audio[data-key="${letter}"]`).pause();
		});
}