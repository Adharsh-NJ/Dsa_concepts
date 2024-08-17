function findMaxSunFacingBuildings(heights){
let result = 0;
let max = 0
    for(let i=0;i<heights.length;i++){ 
        if(heights[i]>max){
            max = heights[i];
            result++
        }
}
return result;
}
console.log(findMaxSunFacingBuildings([7, 4, 8, 2, 9]))
