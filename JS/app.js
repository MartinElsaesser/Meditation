const ui_timer = document.querySelector(".timer");
const ui_play_pause = document.querySelector(".play-pause");
const ui_stop = document.querySelector(".stop");
const ui_meditation = document.querySelector(".meditation-container");
const ui_texts = document.querySelector(".text-container");
const ui_turningCircle = document.querySelector(".turn-to.animation");

const elementsStore = new Elements_Observer();
const timer = new Timer(ui_timer, ui_play_pause, ui_stop);

elementsStore.add(ui_meditation, ui_texts, ui_turningCircle, ui_play_pause);
timer.start();

const setTo = {
	running() {
		timer.start();
		elementsStore.removeClass("paused", "stopped");
		elementsStore.addClass("running");
	},
	paused() {
		timer.pause();
		elementsStore.removeClass("running");
		elementsStore.addClass("paused");
	},
	stopped() {
		timer.reset();
		elementsStore.removeClass("running", "paused");
		elementsStore.addClass("stopped");
	}
}

ui_play_pause.addEventListener("click", toggleRunning);
ui_stop.addEventListener("click", setTo.stopped);


function toggleRunning(e) {
	if(ui_play_pause.classList.contains("running")) {
		setTo.paused();
	}
	else {
		setTo.running();
	}
}
