// Checks if the number of characters in a string is greater than 100

const limitByLength = (str) => {
    if (str.length <= 100) {
        return str
    } else {
        return `${str.slice(0, 100)}...`
    }
}

console.log(limitByLength('Lorem ipsum dolor sit amet, consectetur adipisicing  eos. Accusamus officia consequatur dolores in'))
console.log(limitByLength('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident maxime praesentium a magni quidem, aspernatur nam voluptates sint, dolor obcaecati labore laboriosam eos. Accusamus officia consequatur dolores in enim. Incidunt!'))
