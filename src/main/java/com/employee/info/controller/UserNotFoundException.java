package com.employee.info.controller;

public class UserNotFoundException extends RuntimeException {

	public UserNotFoundException(Integer id) {
		super("Could not find the user with the id :"  + id);
	}
}
