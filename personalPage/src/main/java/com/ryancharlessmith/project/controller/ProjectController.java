package com.ryancharlessmith.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ryancharlessmith.project.data.Project;
import com.ryancharlessmith.project.data.ProjectFilter;
import com.ryancharlessmith.project.facade.ProjectFacade;

@RestController
public class ProjectController {
	
	public static final String UNIQUE_URL_KEY = "uniqueUrlKey";
	
	@Autowired
	private ProjectFacade projectFacade;
	
	@RequestMapping(value="/project/{" + UNIQUE_URL_KEY + "}")
	public Project read(@PathVariable(UNIQUE_URL_KEY) String uniqueUrlKey) {
		return projectFacade.read(uniqueUrlKey);
	}
	
	@RequestMapping(value="/project/filter")
	public List<Project> filter(ProjectFilter filter) {
		return projectFacade.filter(filter);
	}

}
