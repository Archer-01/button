const	button = document.querySelector("button");
let		counter;

async function	loadNumber() {
	let	response;
	let	data;

	response = await fetch("/num");
	data = await response.text();
	button.textContent = data;
	counter = parseInt(
		button.textContent
	);
}

async function	sendNumber(num) {
	if (typeof num !== "number") {
		console.error("Invalid number");
		return ;
	}
	fetch("/savenum", {
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify({ num: num }),
	});
}

button.onclick = function(event) {
	if (Cookies.get("userClicked") === "true") {
		return;
	}
	--counter;
	button.textContent = counter;
	Cookies.set("userClicked", "true");
	sendNumber(counter);
}

loadNumber();
