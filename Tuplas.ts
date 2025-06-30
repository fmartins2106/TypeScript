type NameList = string[];

type CalendarDate = [day:number, month:number, year:number];

const list: NameList = [];
list.push("Fernando");

const date: CalendarDate = [20,10,2024];

function createDate(date: CalendarDate){
    const [day,month,year] = date;
}

createDate([10,10,2004]);

