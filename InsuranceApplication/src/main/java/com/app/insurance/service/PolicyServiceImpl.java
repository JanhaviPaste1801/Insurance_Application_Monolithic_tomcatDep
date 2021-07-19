package com.app.insurance.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.insurance.model.Policy;
import com.app.insurance.model.User;
import com.app.insurance.repository.PolicyRepository;

@Service
@Transactional
public class PolicyServiceImpl implements PolicyService {
	
	@Autowired
	PolicyRepository policyRepository;

	@Override
	public List<Policy> getAllPolicies() {
		List<Policy> policies = policyRepository.findAll();
		return policies;
	}

	@Override
	public Policy addPolicy(Policy policy) {
		return policyRepository.save(policy);
	}

	@Override
	public Policy updatePolicy(Policy policy) {
		return  policyRepository.save(policy);
	}

	@Override
	public void deletePolicy(int policyId) {
		policyRepository.deleteById(policyId);
		
	}

	@Override
	public Optional<Policy> viewPolicy(int policyId) {
		return policyRepository.findById(policyId);
	}
	
	
}
