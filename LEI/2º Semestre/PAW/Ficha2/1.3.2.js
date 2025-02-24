/**
 * Calculate the multiplication of two numbers passed as argument and return the value
 * 
 * @param {*} a first number
 * @param {*} b second number
 * @returns the multiplication value
 */
function sumTwo(a, b) {
    let soma = a + b;
    return "Resultado de " + a + " + " + b + " é " + soma;
}

console.log(sumTwo(5, 7))

/**
 * Return the largest string of a string array passed as an argument.
 * 
 * @param {*} arr the array string
 * @returns the biggest string
 */
function biggestString(arr) {
    let biggest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > biggest.length) {
            biggest = arr[i];
        }
    }

    return biggest;
}

console.log(biggestString(["Engenharia", "Informática", "ESTG"]));

/**
 * Given a string replace the first letter with the equivalent capital letter and return the string.
 * If it is already capitalized, you must return the same string
 * 
 * @param {*} string String to modify
 * @returns the string
 */
function capitalizeFirstLetter(string) {
    if (string[0] == string[0].toUpperCase()) {
        return string;
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

console.log(capitalizeFirstLetter("test with lower"));
console.log(capitalizeFirstLetter("Test with Upper"));

/**
 * Return the number that most often appears in an array of 
 * integers passed as an argument and return the value.
 * @param {*} arr the numbers array
 * @returns the number with more appearances 
 */
function biggestAppearances(arr) {
    let countAppearances = 0;
    let biggestAppearances;

    for (let i = 0; i < arr.length; i++) {
        let currentApp = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                currentApp ++;
            }
        }

        if (currentApp > countAppearances) {
            countAppearances = currentApp;
            biggestAppearances = arr[i];
        }
    }

    return "The number " + biggestAppearances + " appeared " + countAppearances;
}

console.log(biggestAppearances([1, 2, 3, 4, 1, 2, 2]));

/**
 * Validate that a string passed as an argument represents a valid e-mail. 
 * The function must return a boolean (true/false).
 * 
 * @param {*} email the email to verify
 * @returns true or false
 */
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

console.log(isValidEmail("test@example.com")); 
console.log(isValidEmail("invalid-email"));    
console.log(isValidEmail("user@domain.co.uk"));
console.log(isValidEmail("user@domain"));       

/**
 * Format a received number as an argument to display exactly 9 digits and return the value
 * with string format. If the number has less than 9 digits , leading zeros should be added. 
 * If the number has more than 9 digits you should throw an exception.
 * 
 * @param {*} number the number to verify
 * @returns the number
 */
function formatNumber(number) {
    const numberString = number.toString(); 
    let formattedNumber = numberString;

    if (formattedNumber.length > 9) {
        throw new Error("The number have more than 9 caracteres");
    }

    while (formattedNumber.length < 9) {
        formattedNumber = '0' + formattedNumber; 
    }

    return formattedNumber;
}

try {
    console.log(formatNumber(1234567));     
    console.log(formatNumber(123456789));  
    console.log(formatNumber(123456789012));
} catch (error) {
    console.error("Error: " + error.message);
}

/**
 * Calculate whether the number passed as argument is a prime number. 
 * The function must return a boolean (true/false)
 * 
 * @param {*} Number the number to verify
 * @returns primo ou não primo
 */
function primeNumber(Number) {
    if (Number % 2 == 0) {
        return "Número primo!"
    } else {
        return "O número não é primo!"
    }
}

console.log(primeNumber(1));
console.log(primeNumber(2));

/**
 * Convert a value into euro cents in their respective 
 * currencies and return the coins in the array form
 * 
 * @param {*} cents the number of cents
 * @returns the coins used
 */
function convertCoins(cents) {
    const coins = [200, 100, 50, 20, 10, 5, 2, 1];
    let result = [];

    for (let i = 0; i < coins.length; i++) {
        while (cents >= coins[i]) {
            result.push(coins[i]);
            cents -= coins[i];
        }
    }

    return result;
}

console.log(convertCoins(46));

/**
 * Create a function that checks whether a word passed as an 
 * argument is a palindrome and returns a boolean (true/false).
 * @param {*} Word the word to verify
 * @returns true or false
 */
function verifyPalindrome(Word) {
    for (let i = 0; i < Word.length; i++) {
        if (Word[i] !== Word[Word.length - i - 1]) {
            return false;
        }
    }

    return true;
}

console.log(verifyPalindrome("arara"));
console.log(verifyPalindrome("Miguel"));

/**
 * Create a function that returns the number of 
 * days of the month of a date passed as a parameter.
 * 
 * @param {*} date  the date do verify
 * @returns the number of days
 */
function numberOfDays(date) {
    const year = date.getFullYear();
    const month = date.getMonth(); 
    
    const nextMonth = new Date(year, month + 1, 0); 
  
    return nextMonth.getDate(); 
}

const date = new Date('2025-01-23'); 
console.log(numberOfDays(date)); 
  