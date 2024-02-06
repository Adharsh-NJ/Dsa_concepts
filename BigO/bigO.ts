const large = new Array(100000).fill('nemo')

function findNemo(array:(Array<string>)){
let t0 = performance.now()
for (let i=0;i<array.length;i++){
    if(array[i] !== "nemo") return;
    console.log('====================================');
    console.log("found nemo");
    console.log('====================================');
}
let t1 = performance.now()
console.log('====================================');
console.log(t1-t0 + " milliseconds");
console.log('====================================');
}
findNemo(large);

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; //o(1)
    a = 50 + 3; //o(1)
  
    for (let i = 0; i < input.length; i++) {//o(n)
    //   anotherFunction(); //o(n)
      let stranger = true; //o(n)
      a++; //o(n)
    }
    return a; //o(1)
  }

  // What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input:number ) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n)
      let x = i + 1; // O(n)
      let y = i + 2; // O(n)
      let z = i + 3; // O(n)

    }
    for (let j = 0; j < input; j++) { // O(n)
      let p = j * 2; // O(n)
      let q = j * 2; // O(n) 
    }
    let whoAmI = "I don't know"; // O(1)
  }
  // Big O = 4 + 7n = O(n)