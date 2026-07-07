function init() {
	const codes = document.querySelectorAll(".code");
	if (codes.length === 0) return; // elements not in DOM yet, bail safely

	codes[0].focus();

	codes.forEach((input, index) => {
		input.addEventListener("input", (e) => {
			if(!/^\d$/.test(input.value)){
				input.value = "";
				return;
			}
			if(index < codes.length - 1){
				codes[index+1].focus();
			}
		})

		input.addEventListener("keydown", (e) => {
			if(e.key === "Backspace" && index > 0){
				codes[index-1].focus();
			}
		})
	})
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", init);
} else {
	init();
}