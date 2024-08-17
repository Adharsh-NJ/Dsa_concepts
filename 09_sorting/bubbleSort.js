const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
   for(let i=0;i<length;i++){
    for(let j=0;j<length;j++){
      if(numbers[j]>numbers[j+1]){
        console.log({numbers})
        const temp = numbers[j+1];
        numbers[j+1] = numbers[j];
        numbers[j] = temp;
      }
    }
   }
}

bubbleSort(numbers);
console.log(numbers);

//when to use