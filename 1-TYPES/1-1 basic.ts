{
  //number
  const num: number = 6;

  //string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  //undefined - 값이 있는지 없는지 불명확
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;

  //null - 값이 없다는 것을 정의
  let person: null; // 💩
  let person2: string | null;


  //unknown 💩
  let notSure: unknown = 0;
  notSure = "her";
  notSure = true;

  //any  💩
  let anything: any = 0;
  anything = "hello";

  //void
  function print() {
    console.log("hello");
    return;
  }

  let unusable: void = undefined // 💩

  //never
  function throwError(message: string): never{
    //message -> server(log)
    throw new Error(message);
  }
  let obj: object; // 💩
  


}
