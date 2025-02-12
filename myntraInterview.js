const arr = [1,2,[3,4,[5,6]],7,[4,1],[]]

const result = []
const flattenArr = (arr)=>{
   arr.forEach(element => {
     if(Array.isArray(element)){
        flattenArr(element);
     }else{
        result.push(element)
     }
   });
}
flattenArr(arr);
console.log(result)



const nonRepeatingCharacter = (str) => {
    const charCount = {};
    
    // Count the occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first non-repeating character
    for (const char of str) {
        if (charCount[char] === 1) {
            console.log(char)
            return char;
        }
    }
    
    // Return empty string if no non-repeating character is found
    return "";
};

// Example usage
const string = "malakyalams";
console.log(nonRepeatingCharacter(string)); // Output: "w"