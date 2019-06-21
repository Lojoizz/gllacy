document.querySelector(".icon1").addEventListener("click", function() {
	document.querySelector(".icon1").src="img/activeRound.svg"
	document.querySelector(".icon2").src="img/Round.svg"
	document.querySelector(".icon3").src="img/Round.svg"
	document.querySelector(".body").style.backgroundColor="#8aa495"
	document.querySelector(".background").style.backgroundImage="url('img/back1.png')"
})

document.querySelector(".icon2").addEventListener("click", function() {
	document.querySelector(".icon1").src="img/Round.svg"
	document.querySelector(".icon2").src="img/activeRound.svg"
	document.querySelector(".icon3").src="img/Round.svg"
	document.querySelector(".body").style.backgroundColor="#8996a6"
	document.querySelector(".background").style.backgroundImage="url('img/back2.png')"
})

document.querySelector(".icon3").addEventListener("click", function() {
	document.querySelector(".icon1").src="img/Round.svg"
	document.querySelector(".icon2").src="img/Round.svg"
	document.querySelector(".icon3").src="img/activeRound.svg"
	document.querySelector(".body").style.backgroundColor="#9d8b84"
	document.querySelector(".background").style.backgroundImage="url('img/back3.png')"
})
