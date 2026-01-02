// REDIRECT LOGIC
const params = new URLSearchParams(window.location.search);
const code = params.get("u");

let urlDB = JSON.parse(localStorage.getItem("urlDB")) || {};

if (code && urlDB[code]) {
  window.location.href = urlDB[code];
}

// ELEMENTS
const shortenBtn = document.getElementById("shortenBtn");
const longUrlInput = document.getElementById("longUrl");
const resultDiv = document.getElementById("result");

// GENERATE SHORT CODE
function generateCode() {
  return Math.random().toString(36).substring(2, 8);
}

// SHORTEN BUTTON CLICK
shortenBtn.addEventListener("click", () => {
  const longUrl = longUrlInput.value.trim();

  if (!longUrl.startsWith("http")) {
    alert("Please enter a valid URL with http/https");
    return;
  }

  const shortCode = generateCode();
  urlDB[shortCode] = longUrl;

  localStorage.setItem("urlDB", JSON.stringify(urlDB));

  const shortUrl = `${window.location.origin}${window.location.pathname}?u=${shortCode}`;

  resultDiv.innerHTML = `
    <p>Short URL:</p>
    <a href="${shortUrl}" target="_blank">${shortUrl}</a>
  `;
});
