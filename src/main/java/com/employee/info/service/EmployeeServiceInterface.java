package com.employee.info.service;

import java.util.List;
import java.util.Optional;

import com.employee.info.model.Employee;

public interface EmployeeServiceInterface {
	List<Employee>getAllEmployees();
	Optional<Employee> getEmployeeById(int id);
	Employee createEmployee(Employee employee);
	Employee updateEmployee(Employee employeeDetails, int id);
	void deleteEmployee(int id);
	
}
