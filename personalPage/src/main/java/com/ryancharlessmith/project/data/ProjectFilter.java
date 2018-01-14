package com.ryancharlessmith.project.data;

import java.util.List;

import org.apache.commons.collections4.CollectionUtils;

public class ProjectFilter {

	private boolean returnAll;
	private List<String> uniqueUrlKeys;
	
	public boolean isEmpty() {
		return !returnAll && CollectionUtils.isEmpty(uniqueUrlKeys);
	}

	public boolean isReturnAll() {
		return returnAll;
	}

	public void setReturnAll(boolean returnAll) {
		this.returnAll = returnAll;
	}

	public List<String> getUniqueUrlKeys() {
		return uniqueUrlKeys;
	}

	public void setUniqueUrlKeys(List<String> uniqueUrlKeys) {
		this.uniqueUrlKeys = uniqueUrlKeys;
	}
	
}
