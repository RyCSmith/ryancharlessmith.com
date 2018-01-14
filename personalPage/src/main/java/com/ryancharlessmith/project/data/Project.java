package com.ryancharlessmith.project.data;

import java.util.List;

public class Project {

	private int id;
	
	private String name;
	private String description;
	private String overview;
	private String implementationDetails;
	private List<String> technologyInfo;
	private Instructions runningInstructions;

	private String uniqueUrlKey;
	private String repoUrl;
	private String previewImageUrl;
	private List<String> videoUrls;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getOverview() {
		return overview;
	}
	public void setOverview(String overview) {
		this.overview = overview;
	}
	public String getImplementationDetails() {
		return implementationDetails;
	}
	public void setImplementationDetails(String implementationDetails) {
		this.implementationDetails = implementationDetails;
	}
	public List<String> getTechnologyInfo() {
		return technologyInfo;
	}
	public void setTechnologyInfo(List<String> technologyInfo) {
		this.technologyInfo = technologyInfo;
	}
	public Instructions getRunningInstructions() {
		return runningInstructions;
	}
	public void setRunningInstructions(Instructions runningInstructions) {
		this.runningInstructions = runningInstructions;
	}
	public String getUniqueUrlKey() {
		return uniqueUrlKey;
	}
	public void setUniqueUrlKey(String uniqueUrlKey) {
		this.uniqueUrlKey = uniqueUrlKey;
	}
	public String getRepoUrl() {
		return repoUrl;
	}
	public void setRepoUrl(String repoUrl) {
		this.repoUrl = repoUrl;
	}
	public String getPreviewImageUrl() {
		return previewImageUrl;
	}
	public void setPreviewImageUrl(String previewImageUrl) {
		this.previewImageUrl = previewImageUrl;
	}
	public List<String> getVideoUrls() {
		return videoUrls;
	}
	public void setVideoUrls(List<String> videoUrls) {
		this.videoUrls = videoUrls;
	}

}
