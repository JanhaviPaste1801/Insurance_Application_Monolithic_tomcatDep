package com.app.insurance.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.insurance.model.Policy;
import com.app.insurance.model.User;
import com.app.insurance.service.PolicyService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/policy")
public class PolicyController {
	@Autowired
	PolicyService policyService;
	
	@GetMapping("/getAllPolicies")
	public List<Policy> getAllPolicies(){
		return policyService.getAllPolicies();
	}
	
	@PostMapping("/addPolicy")
	public Policy addPolicy(@RequestBody Policy policy) {
		return policyService.addPolicy(policy);
	}
	
	@PutMapping("/updatePolicy")
	public Policy updatePolicy(@RequestBody Policy policy) {
		return policyService.updatePolicy(policy);
	}

	@DeleteMapping("/deletePolicy/{id}")
	public void deletePolicy(@PathVariable("id") int policyId) {
		policyService.deletePolicy(policyId);
	}
	
	@GetMapping("/viewPolicy/{id}")
	public Optional<Policy> viewPolicy(@PathVariable("id") int policyId) {
		return policyService.viewPolicy(policyId);
	}

	
}
