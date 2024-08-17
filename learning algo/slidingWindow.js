function longestSubstringWithoutRepeatingChar(s){
    let substring = new Set();
    let max =0
    let j=0;
    for(let i=0;i<s.length;i++){
        while(substring.has(s[i])){
            substring.delete(s[j])
            console.log({substring,i})
          j++
        }
        substring.add(s[i])
        max =Math.max(max,i-j+1)
    }
    return max
}
console.log(longestSubstringWithoutRepeatingChar("malayalam"))

//76. Minimum Window Substring
var minWindow = function(s, t) {
    if (t.length > s.length) return "";

    let check = {};  // Dictionary to store character count of t
    let window = {}; // Dictionary to store character count of the current window
    let have = 0, need = 0; // Track matched characters
    let result = [-1, -1]; // Store the start and end indices of the result substring
    let minLength = Infinity; // Track the minimum length of the valid window
    let left = 0; // Left pointer for the sliding window

    // Fill the check dictionary with the count of each character in t
    for (let char of t) {
        if (check[char]) {
            check[char] += 1;
        } else {
            check[char] = 1;
            need += 1;
        }
    }

    // Iterate over the string s with the right pointer
    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        window[char] = (window[char] || 0) + 1;

        if (check[char] && window[char] === check[char]) {
            have += 1;
        }

        // Contract the window from the left as long as it contains all characters
        while (have === need) {
            // Update the result if this window is smaller
            if ((right - left + 1) < minLength) {
                minLength = right - left + 1;
                result = [left, right];
            }

            // Remove the leftmost character from the window
            window[s[left]] -= 1;
            if (check[s[left]] && window[s[left]] < check[s[left]]) {
                have -= 1;
            }
            left += 1;
        }
    }

    // Return the minimum window substring if found
    if (minLength === Infinity) {
        return "";
    } else {
        return s.slice(result[0], result[1] + 1);
    }
};