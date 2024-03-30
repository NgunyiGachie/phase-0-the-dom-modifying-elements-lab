const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

const mainElementAfterRemoval = document.getElementById('main');
if (!mainElementAfterRemoval) {
  console.log("Test passed: The element with id 'main' no longer exists.");
} else {
  console.error("Test failed: The element with id 'main' still exists.");
}

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Anthony is the champion";

document.body.appendChild(newHeader);
