// Check if a word is palindrome

const palindrome = (word) => {
    word = word.toLowerCase()
    let isPalindrome = false

    if (word.split('').reverse().join('') === word) {
        isPalindrome = true
    }

    console.log(`${word} is ${!isPalindrome ? 'not ' : ''}a palindrome`)
}

palindrome('level')
palindrome('Level')
palindrome('energy')
