const combinationSum3 =(k,n)=>{
    const result =[];
    const dfs =(i,k,n,slate)=>{
        console.log("called")
        if(n<0) return
        if(slate.length === k){
            if(n===0) result.push(slate.slice())
                return
        }

        for(let j = i;j<=9;j++){
            slate.push(j);
            console.log({i:j+1,nSum:{n,j,sum:n-j},slate} ,dfs(j+1,k,n-j,slate),"in dfs");
            slate.pop()
        }
    }
    dfs(1,k,n,[])
    console.log(result)
}

combinationSum3(3,9)

// notes:
 