function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.querySelector(".rat").addEventListener("click", function () {
  let intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
  }, 100);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000); 
});
