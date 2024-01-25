export const convertCurrency = (amount, fromCurrency, toCurrency) => {
    let exchangeRate = 0
    if (fromCurrency === "USD" && toCurrency === "INR") {
        exchangeRate = 83.11
    } else if (fromCurrency === "INR" && toCurrency === "USD") {
        exchangeRate = 0.012
    } else if (fromCurrency === "USD" && toCurrency === "EUR") {
        exchangeRate = 0.85;
    } else if (fromCurrency === "EUR" && toCurrency === "USD") {
        exchangeRate = 1.18;
    } else if (fromCurrency === "USD" && toCurrency === "AED") {
        exchangeRate = 3.67;
    } else if (fromCurrency === "AED" && toCurrency === "USD") {
        exchangeRate = 0.27;
    } else if (fromCurrency === "EUR" && toCurrency === "INR") {
        exchangeRate = 98.29;
    } else if (fromCurrency === "INR" && toCurrency === "EUR") {
        exchangeRate = 0.0102;
    } else if (fromCurrency === "EUR" && toCurrency === "AED") {
        exchangeRate = 4.31;
    } else if (fromCurrency === "AED" && toCurrency === "EUR") {
        exchangeRate = 0.23;
    } else if (fromCurrency === "INR" && toCurrency === "AED") {
        exchangeRate = 0.047;
    } else if (fromCurrency === "AED" && toCurrency === "INR") {
        exchangeRate = 21.28;
    }

    const result = amount * exchangeRate;
    return result
}