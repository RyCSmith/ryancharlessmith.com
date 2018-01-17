package com.ryancharlessmith.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

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
	
	@RequestMapping(value="/api/project/{" + UNIQUE_URL_KEY + "}")
	public Project read(@PathVariable(UNIQUE_URL_KEY) String uniqueUrlKey, HttpServletRequest request) {
        System.out.println(request.getRequestURI());
		return projectFacade.read(uniqueUrlKey);
	}
	
	@RequestMapping(value="/api/project/filter")
	public List<Project> filter(ProjectFilter filter, HttpServletRequest request) {
        System.out.println(request.getRequestURI());
        System.out.println(request.getQueryString());
		return projectFacade.filter(filter);
	}

}
