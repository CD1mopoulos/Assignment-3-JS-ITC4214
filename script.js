function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimes() {
    const n = parseInt(document.getElementById("numberInput").value);
    const resultDiv = document.getElementById("result");
    if (isNaN(n) || n < 2) {
        resultDiv.textContent = "Please enter a valid integer greater than or equal to 2.";
        return;
    }
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) primes.push(i);
    }
    resultDiv.textContent = "Prime numbers up to " + n + ": " + primes.join(", ");
}

// Add event listener to detect "Enter" key press
document.getElementById("numberInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  // Prevent form submission
        findPrimes();            // Call the function to display primes
    }
});
