class Timer {
	constructor(ui_output, ui_play_pause, ui_stop) {
		// UI
		this.ui_output = ui_output;
		this.ui_play_pause = ui_play_pause;
		this.ui_stop = ui_stop;
		this.playButtonHTML = "<i class='far fa-play-circle'></i>";
		this.pauseButtonHTML = "<i class='far fa-pause-circle'></i>";
		// Timer functionality
		this.tick;
		this.startTime;
		this.elapsedTime = 0;
	}
	start() {
		this.startTime = Date.now() - this.elapsedTime;
		this.elapsedTime = 0;
		this.tick = setInterval(() => this.ui_output.textContent = this.getTime(), 200);
		this.ui_play_pause.innerHTML = this.pauseButtonHTML;
		this.ui_stop.disabled = false;
		return {
			status: "running",
			startTime: this.startTime
		};
	}
	pause() {
		this.elapsedTime = Date.now() - this.startTime;
		this.startTime = 0;
		clearInterval(this.tick);
		this.ui_play_pause.innerHTML = this.playButtonHTML;
		return {
			status: "paused",
			elapsedTime: this.elapsedTime
		};
	}
	reset() {
		this.startTime = Date.now();
		this.elapsedTime = 0;
		clearInterval(this.tick);
		this.ui_output.textContent = "00:00";
		this.ui_play_pause.innerHTML = this.playButtonHTML;
		this.ui_stop.disabled = true;
		return {
			status: "reset"
		}
	}
	getTime() {
		if (this.elapsedTime) throw "Timer is paused";
		let time = Date.now() - this.startTime;
		let totalSeconds = Math.floor(time / 1000);
		let mins = Math.floor(totalSeconds / 60);
		let secs = Math.floor(totalSeconds - mins * 60);

		let minsString = mins <= 9 ? `0${mins.toString()}` : mins;
		let secsString = secs <= 9 ? `0${secs.toString()}` : secs;
		return `${minsString}:${secsString}`;
	}
}