;(function(){
	'use strict';
	// document.querySelector('audio').play();

	document.addEventListener('keydown', function() {
		// console.log(event.keyCode);
		var key = document.querySelector('.key[data-key="' + event.keyCode + '"]');
		var sound = document.querySelector('audio[data-key="' + event.keyCode + '"]');
	
	if (sound) {
		sound.currentTime = 0;
		sound.play();

	}

	 if (key) {
	 	key.classList.add('playing');
	 }

	});

})();