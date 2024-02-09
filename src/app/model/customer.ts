export class Customer {

    id:number;
    name:string;
    salary:number;
    dob:Date;
    email:string;

    constructor(id:number,name:string,salary:number,dob:Date,email:string){
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.dob=dob;
        this.email=email;
    }
}
