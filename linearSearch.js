// Check if a string exists in an array of strings

const linearSearch = (str, arr) => {
    const searchResult = arr.find((item) => item.toLowerCase() === str.toLowerCase())

    if (searchResult) {
        return 'Yes, the string exists in the array'
    } else {
        return 'No, the string does not exist in the array'
    }
}

const names = ['Austine', 'Ogaga', 'Udhe']

console.log(linearSearch('Austine', names))
console.log(linearSearch('austine', names))
console.log(linearSearch('Sabinus', names))
