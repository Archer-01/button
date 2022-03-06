const	button = document.querySelector("button");
const	numDiv = document.querySelector("#num");
let		counter;

async function	loadNumber() {
	let	response;
	let	data;

	response = await fetch("/num");
	data = await response.text();
	numDiv.textContent = data;
	counter = parseInt(
		numDiv.textContent
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
	if (counter === 0)
		return ;
	--counter;
	numDiv.textContent = counter;
	Cookies.set("userClicked", "true");
	sendNumber(counter);
}

loadNumber();
