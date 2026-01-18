async function generate() {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    document.getElementById("quote-text").innerText = data.quote;
}