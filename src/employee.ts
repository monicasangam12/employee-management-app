export class Employee{
    id: number;
    name: string;
    username: string;
    password: string;
    position: string;
    salary: number;
    rating!: number;

    constructor(id: number, name: string, position: string, salary: number, username: string, password: string, rating:number){
        this.id = id;
        this.name = name;
        this.position = position;
        this.username = username;
        this.password = password;
        this.salary = salary;
        this.rating = rating;
    }
}