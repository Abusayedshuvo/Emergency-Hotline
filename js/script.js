const heartBtn = document.querySelectorAll(".heart-btn");
let heartCountElement = document.getElementById("heart-count");
let heartCount = parseInt(heartCountElement.innerHTML);
for (let item of heartBtn) {
  item.addEventListener("click", function () {
    heartCount++;
    heartCountElement.innerHTML = heartCount;
  });
}

// Time function part

const now = new Date();

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const ampm = hours >= 12 ? "PM" : "AM";
const formattedHours = hours % 12 || 12;
const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}  ${ampm}`;

// call btn function part
const coin = document.getElementById("coin");
const callBtn = document.querySelectorAll(".call-btn");
const callHistory = document.getElementById("call-history");

for (let item of callBtn) {
  item.addEventListener("click", function (event) {
    const title = event.target.parentNode.parentNode.querySelector(
      ".text-2xl.font-semibold",
    ).innerText;
    const number = event.target.parentNode.parentNode.querySelector(
      ".font-bold.text-3xl",
    ).innerText;

    if (coin.innerText < 20) {
      alert("Your Coin is finished");
      return;
    }
    coin.innerText = parseInt(coin.innerText) - 20;
    alert(`${title} : ${number} `);

    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
    <div class="bg-[#FAFAFA] p-4 rounded-lg flex justify-between mb-3">
              <div>
                <p class="font-semibold">${title}</p>
                <p class="text-gray-600"> ${number} </p>
              </div>
              <p class=""> ${formattedTime}</p>
    </div>
    `;
    callHistory.appendChild(itemDiv);
  });
}

// clear btn function part

document.getElementById("btn-clear").addEventListener("click", function () {
  callHistory.innerHTML = "";
});

// copy btn function part
const copyCountEl = document.getElementById("copy-count");
let copyCount = parseInt(copyCountEl.innerText);

const copyBtns = document.querySelectorAll(".copy-btn");
for (let item of copyBtns) {
  item.addEventListener("click", function (event) {
    copyCount++;
    copyCountEl.innerText = copyCount;

    const number = event.target.parentNode.parentNode.querySelector(
      ".font-bold.text-3xl",
    ).innerText;
    navigator.clipboard.writeText(number).then(() => {
      alert("Hotline number is copied");
    });
  });
}
