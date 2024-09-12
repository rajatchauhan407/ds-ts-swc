class Recursion{
    //#region 
    printName(i:number,n:number):void{
        if(i>n) return;
        console.log("Rajat");
        this.printName(i+1,n)
    }

    printOneToN(i:number,n:number){
        if(!n) {throw new Error("N not provided")};
        if(i>n) return ;
        console.log(i);
        this.printOneToN(i+1,n)
    }
    //#endregion
}

export default Recursion;