const	button = document.querySelector("button");
let		counter = 0;
let		userClicked = false;

if (window.localStorage.counter === undefined) {
	window.localStorage.counter = button.textContent;
} else {
	button.textContent = window.localStorage.counter;
}

counter = window.localStorage.counter;

console.log(counter);

button.onclick = function(event) {
	if (userClicked)
		return;
	--counter;
	button.textContent = counter;
	window.localStorage.counter = parseInt(counter);
	if (userClicked === false)
		userClicked = true;
	if (counter === 0)
		window.localStorage.counter = Math.floor(Math.random() * 100);
}