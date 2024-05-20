/// write a program that checks for palindrom truthy
// dad .. dad
// mum ... mum
// cat ... tac
//if a string is palindrom , print the sentence stringWord is a palindrom...eg dad is not a palindrom
//if a string is not  palindrom , print the sentence stringWord is not a palindrom..eg cat is not a palindrom


const words = ['dad', 'mum', 'cat'];
words.forEach(checkPalindrome);

function isPalindrome(word) {
    const normalizedWord = word.toLowerCase();

    const reversedWord = normalizedWord.split('').reverse().join('');

    return normalizedWord === reversedWord;
}

function checkPalindrome(word) {
    if (isPalindrome(word)) {
        console.log(`${word} is a palindrome`);
    } else {
        console.log(`${word} is not a palindrome`);
    }
}//dad is a palindrome
//mum is a palindrome
//cat is not a palindrome