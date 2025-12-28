function shortenUrl() {
  const input = document.querySelector("input");
  const longUrl = input.value;

  if (longUrl === "") {
    alert("Please enter a URL");
    return;
  }

  // Temporary fake short URL (frontend demo)
  const shortUrl = "https://urlify.io/" + Math.random().toString(36).substring(7);

  // Show result
  let result = document.getElementById("result");
  if (!result) {
    result = document.createElement("p");
    result.id = "result";
    document.body.appendChild(result);
  }

  result.innerHTML = `Short URL: <a href="${longUrl}" target="_blank">${shortUrl}</a>`;
}

