export class Employee {
    id:number;
    name:string;
    salary:number;

    constructor(id:number,name:string,salary:number) {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    getData():void{
        console.log("id is "+this.id);
        console.log("name is "+this.name);
        console.log("salary is "+this.salary);
    }
}
