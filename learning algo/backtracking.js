const combinationSum3 =(k,n)=>{
    const result =[];
    function dfs(i,k,n,slate){
        console.log("called")
        if(n<0) return
        if(slate.length === k){
            if(n===0) result.push(slate.slice())
                return
        }

        for(let j = i;j<=n;j++){
            slate.push(j);
            dfs(j+1,k,n-j,slate)
            slate.pop()
        }
    }
    dfs(1,k,n,[])
    console.log(result)
}

combinationSum3(3,9)

// notes

// 51. N-Queens (hard)

var solveNQueens = function(n) {
    let board = Array.from({length:n},()=> new Array(n).fill("."));
    let solutions = [];
    function isSafe(board,row,col){
        for(let i = 0;i<n;i++){
            if(board[i][col]==="Q" || board[row][i]==="Q"){
                return false
            }
        }
       for(let i=row,j=col;i>=0 && j>=0;j--,i--){
         if(board[i][j]==="Q"){
            return false
         }
       }
       for(let i=row,j=col;i>=0 && j<n;j++,i--){
         if(board[i][j]==="Q"){
            return false
         }
       }
        return true
    }
    function backTrack(row){
        if(row===n){
            solutions.push(board.map((row)=> row.join("")))
            return;
        }
        for(let col=0;col<n;col++){
            if(isSafe(board,row,col)){
            board[row][col]="Q";
            backTrack(row + 1);
            board[row][col]="."
            }
        }
    }
    backTrack(0);

    return solutions
};