var bio = {
	"name": "Marina Tolj",
	"role": "Front-end Web Developer",
	"contacts" :
		{
		"mobile" : "+385915767721",
     	"email" : "marinatolj@yahoo.com",
     	"linkedIn" : "linkedin.com/in/marinatolj",
     	"github" : "Marina-Tolj",
     	"location" : "Zagreb, Croatia"
		},
	"welcomeMsg" : "Hi! I’m Marina, a Front-End Web Developer with a diverse set of skills, experience and knowledge!",
	"skills" : ["Coding: HTML, CSS, JavaScript ", "Web design", "Architecture, Urbanism, Sustainability, Research", "AutoCad, SketchUp, Rhino 3D", "Photoshop, Illustrator, InDesign, Adobe Acrobat", "Microsoft Office", "Graphics, Drawing"],
	"bioPic" : "images/A1.jpg",
	};

bio.display = function() {

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);
	$("#topContacts").append(formattedLinkedIn);
	$("#footerContacts").append(formattedLinkedIn);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedlocation);
	$("#footerContacts").append(formattedlocation);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	$("#header").append(formattedWelcomeMsg);

	var formattedWBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedWBioPic);

	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills){
			
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#header").append(formattedSkill);
	}
};

bio.display();

var work = {
	"jobs" :[
		{
			"title":"Freelance Architect and Writer, Udacity Nanodegree Student",
			"employer":"Myself",
			"dates":"February 2015 - Present",
			"location":"Zagreb, Croatia",
			"description": "Working on self-initiated projects in architecture and writing, while finishing the Udacity Front-End Web Developer Nanodegree."
		},
		{
			"title":"Architectural Designer",
			"employer":"Spectacle Bureau for Architecture and Urbanism Inc.",
			"dates":"May 2014 – January 2015",
			"location":"Calgary, Canada",
			"description": "Development of design concepts and ideas, Development of design options in collaboration with the design team, Leadership of small design teams in the concept/idea development stage of the project, Preparation of architectural and urbanistic drawings of all scales, Design research, Preparing and presenting design proposals to clients, Attending regular meetings with clients, contractors and other specialists, Preparation of presentations, design books, graphics, 3D models and visualizations, Making of architectural (physical) models of all scales, Photography of the project sites and of physical models, Design and coding of Spectacle website, using HTML, CSS and JavaScript (to be launched soon)"
		},
		{
			"title":"Graphic and Web Designer + Web Developer",
			"employer":"Latica",
			"dates":"March 2014 – April 2014",
			"location":"Calgary, Canada",
			"description": "This project included taking photos of Latica products, creating graphics for the website (drawings of products and menus), and designing and coding of latica.co website."
		},
		{
			"title":"Architectural Researcher",
			"employer":"University of Zagreb, Faculty of Architecture, Department for Architectural Design",
			"dates":"December 2013 – January 2014",
			"location":"Zagreb, Croatia",
			"description": "The Research was comprised of comparative analysis of three of the existing Residential Building Directives. The results of the analysis is a prediction of future trends."
		},
		{
			"title":"Collaborator",
			"employer":"Studio A",
			"dates":"March 2012 – April 2012",
			"location":"Zagreb, Croatia",
			"description": "Collaboration on competition for the urban-architectural concept design for the BADEL SITE redevelopment/ Zagreb, Croatia. Collaboration included: Preparation of architectural drawings, Designing office layouts, Making architectural scaled models, Architectural graphics"
		},
		{
			"title":"Photographer and Photo Safari course Photography Instructor",
			"employer":"Zoo Zagreb",
			"dates":"May 2011 – November 2011",
			"location":"Zagreb, Croatia",
			"description": "Teaching the Photo Safari course. Work also included preparation of a short curriculum for teaching. The Course was comprised of teaching children about photography and how to take photos in various situation. Photography work for the zoo included taking photos of various events, animals and dwellings. Some of the selected photos were published in the book “Divlja djeca Maksimira”."
		},
		{
			"title":"Architecture Intern",
			"employer":"Studio A",
			"dates":"September 2010 – December 2010",
			"location":"Zagreb, Croatia",
			"description": "Work done during the internship included: Preparing architectural drawings for various projects and project stages, Preparing detail drawings, Creating architectural visualizations and 3D models, Collaboration on architectural competitions, Making architectural scaled models for all design stages, Digitization of old architectural drawings"
		}
	]
};

work.display = function(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle= formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		}
}

work.display();

var skillDia={
	"skillsMsg" : "Expanded skills diagram, showing more of my skills and how they work together. "
};

skillDia.display = function(){
		$("#skillsDiagram").append(HTMLskillDiagramStart);

		var formattedskillsMsg = HTMLskillsDescription.replace("%data%", skillDia.skillsMsg);
		$(".skills-entry").prepend(formattedskillsMsg);
}

skillDia.display();

var projects = {
	"myProjects":[
		{
			"title" : "Portfolio Site",
			"dates" : "March 2015 - April 2015",
			"description": "Built my own portfolio site to showcase my work done during Udacity Front-End Web Development Nanodegree.",
			"images": "images/project1.jpg"
		},
		{
			"title" : "Interactive Resume",
			"dates": "April 2015",
			"description": "Resume containing all the relevant info about me.",
			"images": "images/project2.jpg"
		}
	]
};

projects.display = function() {
	for(myProject in projects.myProjects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.myProjects[myProject].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.myProjects[myProject].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.myProjects[myProject].description);
		$(".project-entry:last").append(formattedDescription);

		var forrmatedImage = HTMLprojectImage.replace("%data%", projects.myProjects[myProject].images);
		$(".project-entry:last").append(forrmatedImage);
	}
}

projects.display();

var education = {
	"schools":[
		{
			"name": "University of Zagreb, Faculty of Architecture",
			"location": "Zagreb, Croatia",
			"degree": "M.Sc.",
			"major": ["Architecture", "Urbanism"],
			"dates": "2011-2013"
		},
		{
			"name": "University of Zagreb, Faculty of Architecture",
			"location": "Zagreb, Croatia",
			"degree": "B.Sc.",
			"major": ["Architecture", "Urbanism"],
			"dates": "2006-2011"
		}
	],
	"onlineCourses":[
		{
			"title" : "Front-End Web Development Nanodegree",
			"school" : "Udacity",
			"duration": "Currently enroled",
			"dates": 2015,
			"url" : "udacity.com"
		},
		{
			"title" : "HTML",
			"school" : "Codecademy",
			"duration": "Self-paced",
			"dates": 2013,
			"url" : "codecademy.com"
		},
		{
			"title" : "CSS",
			"school" : "Codecademy",
			"duration": "Self-paced",
			"dates": 2013,
			"url" : "codecademy.com"
		},
		{
			"title" : "JavaScript",
			"school" : "Codecademy",
			"duration": "Self-paced",
			"dates": 2013,
			"url" : "codecademy.com"
		},
		{
			"title" : "Creativity, Innovation, and Change",
			"school" : "Coursera",
			"duration": "8 weeks",
			"dates": 2013,
			"url" : "coursera.org"
		},
		{
			"title" : "Design: Creation of Artifacts in Society",
			"school" : "Coursera",
			"duration": "8 weeks",
			"dates": 2012,
			"url" : "coursera.org"
		},
		{
			"title" : "Human-Computer Interaction",
			"school" : "Coursera",
			"duration": "8 weeks",
			"dates": 2012,
			"url" : "coursera.org"
		},
		{
			"title" : "Introduction to Sustainability",
			"school" : "Coursera",
			"duration": "8 weeks",
			"dates": 2012,
			"url" : "coursera.org"
		},
		{
			"title" : "Networked Life",
			"school" : "Coursera",
			"duration": "6 weeks",
			"dates": 2012,
			"url" : "coursera.org"
		}		
	]
};

education.display = function() {
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var forrmatedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(forrmatedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var forrmatedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(forrmatedMajor);
	}

	$("#education").append(HTMLonlineClasses);

	for(onlineCourse in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedUrl);
	}
}

education.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
