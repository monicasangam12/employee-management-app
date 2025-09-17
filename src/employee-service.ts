import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private apiUrl = 'https://localhost:8080/employees';

    constructor(private http: HttpClient) { 
        
    }

    getEmployeeDetails(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    };

    getEmployeeById(id: number) {
        const employees = this.getEmployeeDetails();
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }

    postEmployeeDetails(employee: { id: number, name: string, position: string, salary: number, username: string, password: string, rating: number }) {
            this.http.post(this.apiUrl, employee).subscribe(data => {
            console.log(data);
        });
        console.log('Employee details posted:', employee);
    }

    updateEmployeeDetails(id: number, updatedInfo: { name?: string, position?: string }) {
        this.http.put(`${this.apiUrl}/${id}`, updatedInfo).subscribe(data => {
            console.log(data);
        });
        console.log(`Employee with ID ${id} updated with:`, updatedInfo);
    }

    deleteEmployee(id: number) {
        this.http.delete(`${this.apiUrl}/${id}`).subscribe(data => {
            console.log(data);
        });
        console.log(`Employee with ID ${id} deleted`);
    }
}