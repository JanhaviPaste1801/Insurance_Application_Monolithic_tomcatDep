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

import com.app.insurance.model.ClaimedPolicy;
import com.app.insurance.model.ResponseTemplate;
import com.app.insurance.model.User;
import com.app.insurance.service.ClaimedPolicyService;

import javassist.NotFoundException;


@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/claimedPolicies")
public class ClaimedPolicyController {

	@Autowired
	ClaimedPolicyService claimedPolicyService;
	
	@GetMapping("/getAllClaimedPolicies")
	public List<ClaimedPolicy> getAllClaimedPolicies(){
		return claimedPolicyService.getAllClaimedPolicies();
	}
	
	@PostMapping("/addClaimedPolicy")
	public ClaimedPolicy addClaimedPolicy(@RequestBody ClaimedPolicy claimedPolicy) throws NotFoundException {
		return claimedPolicyService.addClaimedPolicy(claimedPolicy);
	}
	
	@PutMapping("/updateClaimedPolicy")
	public ClaimedPolicy updateClaimedPolicy(@RequestBody ClaimedPolicy claimedPolicy) {
		return claimedPolicyService.updateClaimedPolicy(claimedPolicy);
	}

	@DeleteMapping("/deleteClaimedPolicy/{id}")
	public void deleteClaimedPolicy(@PathVariable("id") int planId) {
		claimedPolicyService.deleteClaimedPolicy(planId);
	}
	
	@GetMapping("/viewClaimedPolicy/{id}")
	public Optional<ClaimedPolicy> viewClaimedPolicy(@PathVariable("id") int planId) {
		return claimedPolicyService.viewClaimedPolicy(planId);
	}
	
	@GetMapping("/getClaimPolicyByUser/{id}")
	public List<ResponseTemplate> getClaimPolicyByUser(@PathVariable("id") int userId) {
		return claimedPolicyService.getClaimPolicyByUser(userId);
	}
	
	@PostMapping("/claimAPolicy/{policyId}/{userId}")
	public ClaimedPolicy claimAPolicy(@PathVariable("policyId") int policyId,@PathVariable("userId") int userId, @RequestBody ClaimedPolicy claimedPolicy) {
		return claimedPolicyService.claimAPolicy(policyId,userId,claimedPolicy);
	}
	
	@GetMapping("/listOfAllClaimedPolicies")
	public List<ResponseTemplate> listOfAllClaimedPolicies(){
		return claimedPolicyService.listOfAllClaimedPolicies();
	}
	
	@GetMapping("/findByPlanIdAndUserId/{userId}/{planId}")
	public List<ResponseTemplate> findByPlanIdAndUserId(@PathVariable("userId") int userId ,@PathVariable("planId") int planId ){
		return claimedPolicyService.findByPlanIdAndUserId(userId, planId);
	}
	
	
	

}
