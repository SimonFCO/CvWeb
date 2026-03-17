function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const rat = document.querySelector(".rat");
if (rat) {
  rat.addEventListener("click", function () {
    let intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomColor();
    }, 500);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);
  });
}

const secretCode = "rat";
let keyBuffer = "";

document.addEventListener("keydown", function (event) {
  keyBuffer += event.key.toLowerCase();

  if (keyBuffer.length > secretCode.length) {
    keyBuffer = keyBuffer.slice(-secretCode.length);
  }

  if (keyBuffer === secretCode) {
    openModalApp();
    keyBuffer = "";
  }
});

function openModalApp() {
  const modal = document.getElementById("easterEggModal");
  modal.style.display = "flex";
}

function closeModalApp() {
  const modal = document.getElementById("easterEggModal");
  if (modal) {
    modal.style.display = "none";
  }
  const closeButton = document.getElementById("closeModalBtn");
  if (closeButton) {
    closeButton.style.transform = `translate(0px, 0px)`;
  }
}

const closeBtn = document.getElementById("closeModalBtn");
let dodgeCount = 0;

if (closeBtn) {
  closeBtn.addEventListener("mouseover", function () {
    dodgeCount++;

    if (dodgeCount == 1) {
      this.innerText = "almost";
      const randomX = Math.floor(Math.random() * 200) - 100;
      const randomY = Math.floor(Math.random() * 150) - 75;
      this.style.transform = `translate(${randomX}px, ${randomY}px)`;
    } else if (dodgeCount == 2) {
      this.innerText = "so close!";
      const randomX = Math.floor(Math.random() * 200) - 100;
      const randomY = Math.floor(Math.random() * 150) - 75;
      this.style.transform = `translate(${randomX}px, ${randomY}px)`;
    } else if (dodgeCount == 3) {
      this.innerText = "Okay, last chance!";
      const randomX = Math.floor(Math.random() * 200) - 100;
      const randomY = Math.floor(Math.random() * 150) - 75;
      this.style.transform = `translate(${randomX}px, ${randomY}px)`;
    } else if (dodgeCount == 4) {
      this.innerText = "Try again!";
      const randomX = Math.floor(Math.random() * 200) - 100;
      const randomY = Math.floor(Math.random() * 150) - 75;
      this.style.transform = `translate(${randomX}px, ${randomY}px)`;
    } else {
      this.innerText = "Okay fine, you win";
      this.style.backgroundColor = "grey";
    }
  });

  closeBtn.addEventListener("click", function () {
    closeModalApp();
    dodgeCount = 0;
    this.innerText = "Close";
    this.style.backgroundColor = "red";
  });
}
