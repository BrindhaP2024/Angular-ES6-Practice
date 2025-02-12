function makeRequest(url, timeout = 2000, callback = function() {}) {
    // The rest of the function
    console.log(`URL: ${url}`);
    console.log(`Timeout: ${timeout}`);
    console.log(`Callback: ${callback}`);
}

// Example usage
makeRequest('google.com', 0);
