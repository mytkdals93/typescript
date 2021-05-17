{
 /**
  * Type Assertion 💩
  */

    function jsStrFunc(): any{
        return 'Hello';
    }
    const result = jsStrFunc();
    (<string>result).length;
}