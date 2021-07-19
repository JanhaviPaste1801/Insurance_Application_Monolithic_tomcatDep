package com.app.insurance.model;

public class ResponseTemplate {

	private User user;
	private Policy policy;
	private ClaimedPolicy claimedPolicy;
	
	public ResponseTemplate() {
		// TODO Auto-generated constructor stub
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Policy getPolicy() {
		return policy;
	}

	public void setPolicy(Policy policy) {
		this.policy = policy;
	}

	public ClaimedPolicy getClaimedPolicy() {
		return claimedPolicy;
	}

	public void setClaimedPolicy(ClaimedPolicy claimedPolicy) {
		this.claimedPolicy = claimedPolicy;
	}

	public ResponseTemplate(User user, Policy policy, ClaimedPolicy claimedPolicy) {
		super();
		this.user = user;
		this.policy = policy;
		this.claimedPolicy = claimedPolicy;
	}

	
	
	
}
