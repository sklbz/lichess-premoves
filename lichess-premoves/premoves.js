const moveTable = () => document.querySelector('rm6 l4x');

function handleMove() {
	//const move = moveTable.querySelector('button');
	//move.click();
	console.log(moveTable.innerHTML);
	console.log(moveTable.innerText);
}

const config = {
	childlist: true,
	subtree: true
};

const observer = new MutationObserver(handleMove);

const interval = setInterval(initObserver, 300);

function initObserver() {
	if (!moveTable()) {
		console.log("no TABL")
		return;
	}

	clearInterval(interval);
	observer.observe(moveTable(), config);
}
