package com.ryancharlessmith.project.facade;

import java.util.List;

import com.ryancharlessmith.project.data.Project;
import com.ryancharlessmith.project.data.ProjectFilter;

public interface ProjectFacade {
	public Project read(String uniqueUrlKey);
	public List<Project> filter(ProjectFilter filter);
}
