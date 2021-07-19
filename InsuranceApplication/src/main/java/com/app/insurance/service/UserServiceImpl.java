package com.app.insurance.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.app.insurance.model.ClaimedPolicy;
import com.app.insurance.model.Policy;
import com.app.insurance.model.ResponseTemplate;
import com.app.insurance.model.User;
import com.app.insurance.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository; 
	
	@Autowired
	RestTemplate restTemplate;
	
	@Override
	public List<User> getAllUsers() {
		List<User> allUsers = userRepository.findAll();
		return allUsers;
	}

	@Override
	public User addUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public User updateUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public void deleteUser(int userId) {
		userRepository.deleteById(userId);
	}

	@Override
	public Optional<User> viewUser(int userId) {
		return userRepository.findById(userId);
	}

	@Override
	public User getUser(int userId) {
		return userRepository.findById(userId).orElse(null);
	}

	@Override
	public User fetch(String email, String password) {
		return userRepository.findByEmailAndPassword(email,password);
	}

	@Override
	public Optional<User> viewUserbyEmail(String email) {
		return userRepository.findByEmail(email);
	}

	


}
