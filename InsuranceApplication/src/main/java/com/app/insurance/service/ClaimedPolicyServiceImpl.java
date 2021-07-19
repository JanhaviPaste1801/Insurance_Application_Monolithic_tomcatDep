package com.app.insurance.service;

import java.time.LocalDate;
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
import com.app.insurance.repository.ClaimedPolicyRepository;

import javassist.NotFoundException;

@Service
@Transactional
public class ClaimedPolicyServiceImpl implements ClaimedPolicyService {

	@Autowired
	ClaimedPolicyRepository claimedPolicyRepository;

	@Autowired
	RestTemplate restTemplate;

	@Override
	public List<ClaimedPolicy> getAllClaimedPolicies() {
		return claimedPolicyRepository.findAll();
	}

	@Override
	public ClaimedPolicy addClaimedPolicy(ClaimedPolicy claimedPolicy) throws NotFoundException {
		ClaimedPolicy claimedPolicies = claimedPolicyRepository.findByPolicyIdAndUserId(claimedPolicy.getPolicyId(),
				claimedPolicy.getUserId());
		if (claimedPolicies == null) {
			claimedPolicy.setClaimedDate(LocalDate.now().toString());
			return claimedPolicyRepository.save(claimedPolicy);
		} else
			throw new NotFoundException("Only taken ");
	}

	@Override
	public ClaimedPolicy updateClaimedPolicy(ClaimedPolicy claimedPolicy) {
		return claimedPolicyRepository.save(claimedPolicy);
	}

	@Override
	public void deleteClaimedPolicy(int planId) {
		claimedPolicyRepository.deleteById(planId);

	}

	@Override
	public Optional<ClaimedPolicy> viewClaimedPolicy(int planId) {
		return claimedPolicyRepository.findById(planId);
	}

	@Override
	public List<ResponseTemplate> getClaimPolicyByUser(int userId) {
		List<ResponseTemplate> responseTemplates = new ArrayList<ResponseTemplate>();
		ResponseTemplate responseTemplate = null;
		System.out.println(userId);
		List<ClaimedPolicy> policyList = claimedPolicyRepository.findAllByUserId(userId);
		ClaimedPolicy claimPolicyDetails = null;
		for (int i = 0; i < policyList.size(); i++) {
			claimPolicyDetails = policyList.get(i);
			User user = restTemplate.getForObject("http://localhost:8080/InsuranceApplication/users/viewUser/" + userId, User.class);
			Policy policy = restTemplate.getForObject(
					"http://localhost:8080/InsuranceApplication/policy/viewPolicy/" + claimPolicyDetails.getPolicyId(), Policy.class);
			// System.out.println(claimPolicyDetails.getPolicyId());
			responseTemplate = new ResponseTemplate(user, policy, claimPolicyDetails);
			responseTemplates.add(i, responseTemplate);
		}
		return responseTemplates;
	}

	@Override
	public ClaimedPolicy claimAPolicy(int policyId, int userId, ClaimedPolicy claimedPolicy) {
		int claimedpolicyId = claimedPolicy.getPolicyId();
		claimedPolicy.setClaimedDate(LocalDate.now().toString());
		claimedPolicy.setPolicyId(policyId);
		claimedPolicy.setUserId(userId);
		return claimedPolicyRepository.save(claimedPolicy);
	}

	@Override
	public List<ResponseTemplate> listOfAllClaimedPolicies() {

		List<ResponseTemplate> responseTemplates = new ArrayList<ResponseTemplate>();
		ResponseTemplate responseTemplate = null;

		List<ClaimedPolicy> policyList = claimedPolicyRepository.findAll();
		ClaimedPolicy claimPolicyDetails = null;

		for (int i = 0; i < policyList.size(); i++) {
			claimPolicyDetails = policyList.get(i);

			User user = restTemplate
					.getForObject("http://localhost:8080/InsuranceApplication/users/viewUser/" + claimPolicyDetails.getUserId(), User.class);

			Policy policy = restTemplate.getForObject(
					"http://localhost:8080/InsuranceApplication/policy/viewPolicy/" + claimPolicyDetails.getPolicyId(), Policy.class);

			responseTemplate = new ResponseTemplate(user, policy, claimPolicyDetails);

			responseTemplates.add(i, responseTemplate);
		}

		return responseTemplates;
	}

	@Override
	public List<ResponseTemplate> findByPlanIdAndUserId(int userId, int planId) {
		List<ResponseTemplate> responseTemplates = new ArrayList<ResponseTemplate>();
		ResponseTemplate responseTemplate = null;
		List<ClaimedPolicy> claim = claimedPolicyRepository.findAllByUserIdAndPlanId(userId, planId);
		
		List<ClaimedPolicy> policyList = claimedPolicyRepository.findAllByUserIdAndPlanId(userId , planId);
		ClaimedPolicy claimPolicyDetails = null;

		for (int i = 0; i < policyList.size(); i++) {
			claimPolicyDetails = policyList.get(i);

			User user = restTemplate
					.getForObject("http://localhost:8080/InsuranceApplication/users/viewUser/" + claimPolicyDetails.getUserId(), User.class);

			Policy policy = restTemplate.getForObject(
					"http://localhost:8080/InsuranceApplication/policy/viewPolicy/" + claimPolicyDetails.getPolicyId(), Policy.class);

			responseTemplate = new ResponseTemplate(user, policy, claimPolicyDetails);

			responseTemplates.add(i, responseTemplate);
		}

		return responseTemplates;
	}


}
