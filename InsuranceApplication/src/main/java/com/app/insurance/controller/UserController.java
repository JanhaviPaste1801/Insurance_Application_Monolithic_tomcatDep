package com.app.insurance.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.insurance.model.ResponseTemplate;
import com.app.insurance.model.User;
import com.app.insurance.repository.UserRepository;
import com.app.insurance.service.UserService;

import javassist.NotFoundException;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	UserService userService;
	
	@Autowired
	UserRepository userRepository;

	@GetMapping("/getAllUsers")
	public List<User> getAllUsers() throws Exception {
		List<User> users = userService.getAllUsers();
		if (users == null) {
			throw new NotFoundException("NO USERS");
		} else
			return users;
	}

	@PostMapping("/addUser")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}

	@PutMapping("/updateUser")
	public User updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}

	@DeleteMapping("/deleteUser/{id}")
	public void deleteUser(@PathVariable("id") int userId) throws Exception {
		User user = userService.getUser(userId);
		if (user == null) {
			throw new NotFoundException("NO USER TO DELETE");
		} else
			userService.deleteUser(userId);
	}

	@GetMapping("/viewUser/{id}")
	public Optional<User> viewUser(@PathVariable("id") int userId) throws Exception {
		Optional<User> user = userService.viewUser(userId);
		if (user == null) {
			throw new NotFoundException("USER NOT FOUND");
		} else
			return userService.viewUser(userId);
	}
	
	@PostMapping("/login")
    public User login(@RequestBody User users) throws NotFoundException  {
        String email = users.getEmail();
        String password = users.getPassword();
        User user = null;
        if(email!=null && password!=null) {
            user = userService.fetch(email, password);
        }
        if(user==null) {
            throw new NotFoundException("Bad Credentials");
        }
        return user;
    }
	
    @GetMapping("/customerlogin/{email}/{password}")
    public ResponseEntity<?> customerLogin(@PathVariable("email") String email, @PathVariable("password") String password) {
        User customerUser = userRepository.findByEmailAndPassword(email, password);
        try {
            if (customerUser!=null) {
                return new ResponseEntity<User>(customerUser, HttpStatus.OK);
            } else
                throw new NotFoundException("Failed");
        } catch (NotFoundException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
	
	@GetMapping("/viewUserbyEmail/{email}")
	public Optional<User> viewUserbyEmail(@PathVariable("email") String email) throws Exception {
		Optional<User> user = userService.viewUserbyEmail(email);
		if (user == null) {
			throw new NotFoundException("USER NOT FOUND");
		} else
			return userService.viewUserbyEmail(email);
	}
	
	

}
