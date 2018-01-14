package com.ryancharlessmith.project.facade;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import com.google.common.collect.Lists;
import com.google.gson.Gson;
import com.ryancharlessmith.project.data.Instructions;
import com.ryancharlessmith.project.data.Project;
import com.ryancharlessmith.project.data.ProjectFilter;

@Component
public class ProjectFacadeImpl implements ProjectFacade {
	
	public static final String PROJECTS_DAO_FILE = "dao/projects.json";
	
	private Gson gson = new Gson();
	private Map<String, Project> projectCache = new ConcurrentHashMap<>();
	
	@PostConstruct
	private void init() throws IOException {
		ClassPathResource projectsFileResource = new ClassPathResource(PROJECTS_DAO_FILE);
		Reader reader = new InputStreamReader(projectsFileResource.getInputStream());
		Project[] projects = gson.fromJson(reader, Project[].class);
		for (Project project : projects) {
			if (project.getUniqueUrlKey() == null) {
				continue;
			}
			projectCache.put(project.getUniqueUrlKey(), project);
		}
	}
	
	public Project read(String uniqueUrlKey) {
		return projectCache.get(uniqueUrlKey);
	}
	
	public List<Project> filter(ProjectFilter filter) {
		if (filter.isEmpty()) {
			return new ArrayList<Project>();
		}
		if (filter.isReturnAll()) {
			return projectCache.values().stream().collect(Collectors.toList());
		}
		
		Set<String> keysSet = new HashSet<>(filter.getUniqueUrlKeys());
		return projectCache.keySet().stream()
				.filter(x -> keysSet.contains(x))
				.map(x -> projectCache.get(x))
				.collect(Collectors.toList());
	}
	
	
	// for testing without file reading
	private static Project getMockProject() {
		Project p = new Project();
		p.setDescription("description");
		p.setId(1);
		p.setName("name");
		p.setOverview("overview");
		p.setImplementationDetails("implementationDetails");
		p.setPreviewImageUrl("previewImageUrl");
		p.setRepoUrl("repoUrl");
		p.setUniqueUrlKey("uniqueUrlKey");
		p.setVideoUrls(Lists.newArrayList("videoUrlOne", "videoUrlTwo"));
		p.setTechnologyInfo(Lists.newArrayList("techInfoOne", "techInfoTwo"));
		Instructions i = new Instructions();
		i.setNumbered(true);
		i.setInstructions(Lists.newArrayList("instOne", "instrTwo"));
		p.setRunningInstructions(i);
		return p;
	}
}
