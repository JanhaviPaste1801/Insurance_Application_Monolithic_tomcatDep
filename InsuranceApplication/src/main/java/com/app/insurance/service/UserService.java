package com.app.insurance.service;

import java.util.List;
import java.util.Optional;

import com.app.insurance.model.ResponseTemplate;
import com.app.insurance.model.User;

public interface UserService {

	public List<User> getAllUsers();

	public User addUser(User user);

	public User updateUser(User user);

	public void deleteUser(int userId);

	public Optional<User> viewUser(int userId);

	public User getUser(int userId);

	public User fetch(String username, String password);

	public Optional<User> viewUserbyEmail(String email);

	

}
