package com.ryancharlessmith.project.data;

import java.util.List;

public class Instructions {

	private boolean numbered;
	private List<String> instructions;
	public boolean isNumbered() {
		return numbered;
	}
	
	public void setNumbered(boolean numbered) {
		this.numbered = numbered;
	}
	public List<String> getInstructions() {
		return instructions;
	}
	public void setInstructions(List<String> instructions) {
		this.instructions = instructions;
	}
}
