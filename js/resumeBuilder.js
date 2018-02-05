var bio = {
    "name": "Laura Logan",
    "role": "Frontend Web Developer",
    "welcomeMessage": "We must let go of the life we have planned, so as to accept the one that is waiting for us.  --Joseph Campbell",
    "biopic":"images/me-400_small.jpg",
    "contacts": {
      "mobile": "724-272-xxxx",
      "email": "LauraRDH@aol.com",
      "github": "https://github.com/LauraLeeLee",
      "location": "Pittsburgh"
    },
    "skills": ["HTML","CSS","JavaScript","Photoshop"]
};

var education = {
    "schools": [
      {
      "name":"University of Pittsburgh",
      "location": "Pittsburgh, PA",
      "degree": "Associate",
      "dates": "1986-1988",
      "url":"http://www.dental.pitt.edu/students/dental-hygiene-program",
      "majors": ["Dental Hygiene"]
      }
    ],
    "onlineCourses": [
      {
      "title": "Frontend Web Development",
      "school":"Udacity",
      "url":"https://www.udacity.com",
      "dates": "2016-2017"
      },
      {
      "title": "Intro to JavaScript",
      "school":"Code School",
      "dates": "January 2017",
      "url":"http//www.codeschool.com"
     },
      {
      "title": "Introduction to CSS3 and HTML5",
      "school":"Ed2Go",
      "dates": "March 2016-April 2016",
      "url":"http://www.ed2go.com"
    },
    {
    "title": "Intermediate CSS3 and HTML5",
    "school":"Ed2Go",
    "dates": "May 2016-June 2016",
    "url":"http://www.ed2go.com"
    },
    {
    "title": "Introduction to JavaScript",
    "school":"Ed2Go",
    "dates": "July 2016-August 2016",
    "url":"http://www.ed2go.com"
    }
    ]
};

var work = {
  "jobs":[
    {
    "employer": "Centre for Dentistry",
    "title": "Office Manager/Dental Marketer",
    "location": "Cranberry Twp, PA",
    "dates": "1993-present",
    "description":"Help manage daily flow of dental office. Interview and assist in the managment of employees. Manage marketing for new and existing patients."
  },
  {
    "employer": "Dr. Irving Kraft",
    "title": "Dental Hygienist",
    "location": "Philadelphia, PA",
    "dates": "1988-1993",
    "description":"Provide prophylaxis, root planing and scaling, take necessary xrays, patient education, treatment presentation."
  }
  ]
};



var projects = {
  "projects": [
    {
    "title": "Portfolio Project",
    "dates": "December, 2016",
    "description": "Udacity project utilizing skills learned of HTML, CSS and responsiveness",
    "images": ["images/portfolio1-250_xsmall.png", "images/portfolio2-250_xsmall.png"
    ]
    },

    {
    "title": "Roma",
    "dates": "August 2015",
    "description": "Journey through the Eternal City",
    "images": ["images/rome1-250_xsmall.jpg", "images/rome2-250_xsmall.jpg","images/rome3-250_xsmall.jpg"
    ]
    },

    {
    "title": "Fiorenze",
    "dates": "September 2011",
    "description": "Discovery of Renessaince history",
    "images":["images/florence3-250_xsmall.jpg","images/florence4-250_xsmall.jpg","images/florence5-250_xsmall.jpg"
    ]
    }
  ]
};


bio.display = function() {
  //controller
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  //view- render function,
  //for init part of view, selects the element

  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedEmail =  HTMLemail.replace("%data%",bio.contacts.email);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  $("#topContacts").prepend(formattedLocation);
  $("#topContacts").prepend(formattedMobile);
  $("#topContacts").prepend(formattedGithub);
  $("#topContacts").prepend(formattedEmail);

  var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
  $("#header").append(formattedBioPic);

  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkill);
  }
};
bio.display();

work.display = function(){
  work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%",job.title);
    var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%",job.location);
    $(".work-entry:last").prepend(formattedWorkLocation);
    var formattedWorkDates = HTMLworkDates.replace("%data%",job.dates);
    $(".work-entry:last").append(formattedWorkDates);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%",job.description);
    $(".work-entry:last").append(formattedWorkDescription);
  });
};
work.display();

education.display = function(){
  //for(var i=0; i<education.schools.length; i++)
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);
    var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
    $(".education-entry:last").prepend(formattedDegree);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",school.majors);
    $(".education-entry:last").prepend(formattedSchoolMajor);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%",school.dates);
    $(".education-entry:last").prepend(formattedSchoolDates);
    var formattedSchoolName = HTMLschoolName.replace("%data%",school.name);
    $(".education-entry:last").prepend(formattedSchoolName);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",school.location);
    $(".education-entry:last").prepend(formattedSchoolLocation);
   });

   $("#education").append(HTMLonlineClasses);
   for(var i = 0; i < education.onlineCourses.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    $(".education-entry:last").append(formattedOnlineTitle);
    $(".education-entry:last").append(formattedOnlineSchool);
    $(".education-entry:last").append(formattedOnlineDates);
    $(".education-entry:last").append(formattedOnlineURL);
    // $(".education-entry:last").append(formattedOnlineURL);
  }
};
education.display();

projects.display = function(){
  for(var i = 0; i < projects.projects.length; i++){
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
    $(".project-entry:last").append(formattedProjectDescription);
    for(var j = 0; j < projects.projects[i].images.length; j++){
      var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
      $(".project-entry:last").append(formattedProjectImage);
    }
  }
};
projects.display();


//function to internationalize the name
//changes last name to all caps
function intName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();

  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#mapDiv").append(googleMap);
