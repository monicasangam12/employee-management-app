package com.employee.info.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.info.model.Employee;
import com.employee.info.repository.EmployeeRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

	@Autowired
	private EmployeeRepo employeeRepo;
	
	@PostMapping("/user")
	Employee newUser(@RequestBody Employee newUser) {
		return employeeRepo.save(newUser);
	}
	
	@GetMapping("/users")
	List<Employee>getAllUsers(){
		return employeeRepo.findAll();
	}
	
	@GetMapping("/user/{id}")
	Employee getUserById(@PathVariable Integer id) {
		return employeeRepo.findById(id).orElseThrow();
	}
	
	@PutMapping("/user/{id}")
	Employee updateUser(@RequestBody Employee newUser,@PathVariable Integer id) {
		return employeeRepo.save(newUser);
	}
	
	@DeleteMapping("/user/{id}")
	String deleteUser(@PathVariable Integer id) {
		if(!employeeRepo.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		employeeRepo.deleteById(id);
		return "User with the id " + id + " has been successfully deleted ";
	}
}
