// Returns an array of unique elements
const removeDuplicates = (arr) => {
    return Array.from(new Set(arr))
}

const ids = [1, 2, 2, 3, 3, 3, 4, 5, 5]
const names = ['Austine', 'Ogaga', 'Ogaga']
const options = [true, true, false]
const mixed = ['Austine', 'Ogaga', 'Ogaga', 1, 1, 2, 3, 4, 4, true, true, false]


console.log(removeDuplicates(ids))
console.log(removeDuplicates(names))
console.log(removeDuplicates(options))
console.log(removeDuplicates(mixed))
