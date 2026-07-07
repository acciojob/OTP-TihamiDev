//your JS code here. If required.
// document.addEventListener("DOMContentLoaded", () => {
const codes = document.querySelectorAll(".code");
	codes[0].focus();
	// console.log(codes.length);
	codes.forEach((input, index) => {
		input.addEventListener("input", (e) => {
			if(!/^\d$/.test(input.value)){
				input.value = "";
				return;
			}
			
			if(index<codes.length - 1){
				codes[index+1].focus();	
			}
			
		})
		
		input.addEventListener("keydown", (e) => {
			if(e.key === "Backspace" && index>0){
				// e.preventDefault();
				codes[index-1].focus();
			}
		})
	})	
// });
		