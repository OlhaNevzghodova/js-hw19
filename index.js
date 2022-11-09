const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, element) {
    return array.splice(array.indexOf(element), 1);
}

removeElement(array, 5);
console.log(array);

