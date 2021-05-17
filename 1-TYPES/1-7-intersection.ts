{
    /**
     * Intersection Types: &
     */

    type Student = {
        name: string;
        score: number;
    };

    type Worker ={
        empolyeedId: number;
        work:() => void;
    }

    function internWork(person: Student & Worker){
        console.log(person.name, person.empolyeedId, person.work());
    }

    internWork(
        {
            name:'eille',
            score: 50,
            empolyeedId:563,
            work:()=>{console.log('sexy')}
        }
    )
}