package com.employee.info.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.info.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

}
