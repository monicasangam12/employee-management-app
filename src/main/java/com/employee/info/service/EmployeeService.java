package com.employee.info.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.info.model.Employee;
import com.employee.info.repository.EmployeeRepo;

@Service
public class EmployeeService implements EmployeeServiceInterface{

	 @Autowired
	 private EmployeeRepo employeeRepository;
	
	@Override
	public List<Employee> getAllEmployees() {
		// TODO Auto-generated method stub
		return employeeRepository.findAll();
	}

	@Override
	public Optional<Employee> getEmployeeById(int id) {
		// TODO Auto-generated method stub
		return employeeRepository.findById(id);
	}

	@Override
	public Employee createEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return employeeRepository.save(employee);
	}

	@Override
	public Employee updateEmployee(Employee employeeDetails, int id) {
		// TODO Auto-generated method stub
		return employeeRepository.save(employeeDetails);
	}

	@Override
	public void deleteEmployee(int id) {
		System.out.println("This id got deleted from the employee: " + id);
	}

	
}
