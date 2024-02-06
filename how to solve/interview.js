function print(){
    console.log("asfasfsa")
}
print()

function findCommon(ar1, ar2) {
    let largeArray;
    let smallArray;
    let result = false;

    // Determine which array is larger
    if (ar1.length > ar2.length) {
        largeArray = ar1;
        smallArray = ar2;
    } else {
        largeArray = ar2;
        smallArray = ar1;
    }

    // Create a hashmap to store unique elements from the large array
    const countHashMap = {};
    largeArray.forEach(element => {
        countHashMap[element] = true;
    });

    // Check if any element from the small array exists in the hashmap
    for (let i = 0; i < smallArray.length; i++) {
        if (countHashMap[smallArray[i]]) {
            result = true;
            break; // Exit the loop if a common element is found
        }
    }

    return result;
}

// Example usage:
const arr1 = ['a', 'b', 'c'];
const arr2 = ['e', 'd', 'f'];

console.log(findCommon(arr1, arr2)); // Output: true
