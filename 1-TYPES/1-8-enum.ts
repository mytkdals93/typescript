{
    /**
     * 관련된 상수 값을 한 곳에 정의
     */
    
    enum Days {
        Monday = 'monday',
        Tuseday = 1,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Days.Friday);
    let day: Days = Days.Saturday;
    day = 5;
    console.log(day);
    
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    
    let dayOfWeek: DaysOfWeek = 'Monday';



}