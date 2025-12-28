const shortenBtn = document.querySelector('button'); // Ensure this matches your HTML
const inputField = document.querySelector('input');

shortenBtn.addEventListener('click', async () => {
    const longUrl = inputField.value.trim();
    if (!longUrl) return alert("Please enter a link!");

    // We wrap the API URL with a proxy to avoid CORS errors
    const proxyUrl = "https://corsproxy.io/?";
    const apiUrl = "https://cleanuri.com/api/v1/shorten";

    try {
        const response = await fetch(proxyUrl + apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ url: longUrl }) // CleanURI expects form-data
        });

        const data = await response.json();
        if (data.result_url) {
            // Update your UI here to show the link
            alert("Shortened Link: " + data.result_url);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Check the console!");
    }
});

