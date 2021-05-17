{
    /**
     * Type Aliases
     */

    type Text = string;
    const name: Text = 'ellie';
    const address: Text = "korea";
    type Student = {
        name: string,
        age: number,
    }
    const mike: Student ={
        name:"mike",
        age:18,
    }

    /**
     * String literal Types
     */
    type Name = 'name';

    let ellieName: Name;
    ellieName = "name";

    type JSON = 'json';

    const json: JSON = "json";

    type Boal = true;
    
}