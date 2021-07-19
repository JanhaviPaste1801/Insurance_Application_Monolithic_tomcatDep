package com.app.insurance.service;

import java.util.List;
import java.util.Optional;

import com.app.insurance.model.Policy;
import com.app.insurance.model.User;

public interface PolicyService {

	List<Policy> getAllPolicies();

	Policy addPolicy(Policy policy);

	Policy updatePolicy(Policy policy);

	void deletePolicy(int policyId);

	Optional<Policy> viewPolicy(int policyId);

}
