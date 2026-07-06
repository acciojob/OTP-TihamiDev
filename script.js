//your JS code here. If required.
		console.log("Hello");
		const codes = document.querySelectorAll(".code");
		codes[0].focus();
		
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
			
			input.addEventListener("keyup", (e) => {
				if(e.key === "Backspace" && input.value === "" && index>0){
					codes[index-1].focus();
				}
			})
		})