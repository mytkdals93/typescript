{
    function add(num1: number, num2: number): number{
        return num1 + num2;
    }


    function jsFetchNum(id:number): Promise<number>{
        //code..
        //code..
        //code..
        return new Promise((resolve,reject) => {
            resolve(100);
        })
    }

    //JavaScript => TypeScript

    //Optional parameter
    function printName(firstName: string, lastName?: string){
        console.log(firstName);
        console.log(lastName);
    }

    printName('Steve','Jobs')
    printName('Ellie');

    //Default parameter
    function printMessage(message:string = 'default message'){
        console.log(message);
    }
    printMessage();

    function addNumbers(...nums):number {
        return nums.reduce(((a,b)=>a+b));
    }
    console.log(addNumbers(3,1,2,4));
}