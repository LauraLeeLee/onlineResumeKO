//------------Model
var model = {
  bio: {
    "name": "Laura Logan",
    "role": "Frontend Web Developer",
    "welcomeMessage": "We must let go of the life we have planned, so as to accept the one that is waiting for us.  --Joseph Campbell",
    "biopic": "images/me-400_small.jpg",
    "contacts": {
      "mobile": "724-272-xxxx",
      "email": "LauraRDH@aol.com",
      "github": "https://github.com/LauraLeeLee",
      "location": "Pittsburgh"
    },
    "skills": ["HTML", "CSS", "JavaScript", "Photoshop"]
  },


  education: {
    "schools": [{
      "name": "University of Pittsburgh",
      "location": "Pittsburgh, PA",
      "degree": "Associate",
      "dates": "1986-1988",
      "url": "http://www.dental.pitt.edu/students/dental-hygiene-program",
      "majors": ["Dental Hygiene"]
    }],
    "onlineCourses": [{
        "title": "Frontend Web Development",
        "school": "Udacity",
        "url": "https://www.udacity.com",
        "dates": "2016-2017"
      },
      {
        "title": "Intro to JavaScript",
        "school": "Code School",
        "dates": "January 2017",
        "url": "http//www.codeschool.com"
      },
      {
        "title": "Introduction to CSS3 and HTML5",
        "school": "Ed2Go",
        "dates": "March 2016-April 2016",
        "url": "http://www.ed2go.com"
      },
      {
        "title": "Intermediate CSS3 and HTML5",
        "school": "Ed2Go",
        "dates": "May 2016-June 2016",
        "url": "http://www.ed2go.com"
      },
      {
        "title": "Introduction to JavaScript",
        "school": "Ed2Go",
        "dates": "July 2016-August 2016",
        "url": "http://www.ed2go.com"
      }
    ]
  },


  work: {
    "jobs": [{
        "employer": "Centre for Dentistry",
        "title": "Office Manager/Dental Marketer",
        "location": "Cranberry Twp, PA",
        "dates": "1993-present",
        "description": "Help manage daily flow of dental office. Interview and assist in the managment of employees. Manage marketing for new and existing patients."
      },
      {
        "employer": "Dr. Irving Kraft",
        "title": "Dental Hygienist",
        "location": "Philadelphia, PA",
        "dates": "1988-1993",
        "description": "Provide prophylaxis, root planing and scaling, take necessary xrays, patient education, treatment presentation."
      }
    ]
  },

  projects: {
    "projects": [{
        "title": "Portfolio Project",
        "dates": "December, 2016",
        "description": "Udacity project utilizing skills learned of HTML, CSS and responsiveness",
        "images": ["images/portfolio1-250_xsmall.png", "images/portfolio2-250_xsmall.png"]

      },

      {
        "title": "Roma",
        "dates": "August 2015",
        "description": "Journey through the Eternal City",
        "images": ["images/rome1-250_xsmall.jpg", "images/rome2-250_xsmall.jpg", "images/rome3-250_xsmall.jpg"]
      },

      {
        "title": "Fiorenze",
        "dates": "September 2011",
        "description": "Discovery of Renessaince history",
        "images": ["images/florence3-250_xsmall.jpg", "images/florence4-250_xsmall.jpg", "images/florence5-250_xsmall.jpg"]
      }
    ]
  },

};

//------------------Octopus
var octopus = {
  // accesses the model for specific data sections , returns an object
  getModelData: function(data_section) {
    return model[data_section];
  },

  //calls initial view render functions to render to the page
  init: function() {
    //render bio section
    var bioData = this.getModelData('bio');
    bioView.render(bioData);
    //render work section
    var workData = this.getModelData('work');
    workView.render(workData);

    var educationData = this.getModelData('education');
    educationView.render(educationData);

    var projectData = this.getModelData('projects');
    projectView.render(projectData);

    mapView.render();
  },
};

//-----------------View
var bioView = {
  render: function(bioData) {
    formattedName = HTMLheaderName.replace("%data%", bioData.name);
    formattedRole = HTMLheaderRole.replace("%data%", bioData.role);
    formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bioData.welcomeMessage);
    formattedMobile = HTMLmobile.replace("%data%", bioData.contacts.mobile);
    formattedGithub = HTMLgithub.replace("%data%", bioData.contacts.github);
    formattedEmail = HTMLemail.replace("%data%", bioData.contacts.email);
    formattedLocation = HTMLlocation.replace("%data%", bioData.contacts.location);
    formattedBioPic = HTMLbioPic.replace("%data%", bioData.biopic);

    var header = $("#header");
    header.prepend(formattedRole);
    header.prepend(formattedName);
    header.append(formattedWelcomeMsg);

    var topContacts = $("#topContacts");
    topContacts.prepend(formattedLocation);
    topContacts.prepend(formattedMobile);
    topContacts.prepend(formattedGithub);
    topContacts.prepend(formattedEmail);
    header.append(formattedBioPic);

    header.append(HTMLskillsStart);
    var _skillsContainer = $('#skills');
    bioData.skills.forEach(function(skill) {
      _skillsContainer.append(HTMLskills.replace("%data%", skill));
    });
  }
};

var workView = {
  render: function(workData) {
    var _workContainer = $('#workExperience');
    workData.jobs.forEach(function(job) {
      var _workEntry = $(HTMLworkStart);
      _workEntry.append(HTMLworkEmployer.replace("%data%", job.employer));
      _workEntry.append(HTMLworkTitle.replace("%data%", job.title));
      _workEntry.append(HTMLworkLocation.replace("%data%", job.location));
      _workEntry.append(HTMLworkDates.replace("%data%", job.dates));
      _workEntry.append(HTMLworkDescription.replace("%data%", job.description));
      _workContainer.append(_workEntry);
    });
  }
};

var educationView = {
  render: function(educationData) {
    var _educationContainer = $('#education');
    var _educationEntry;
    //var _educationEntry_last = $(".education-entry:last");
    educationData.schools.forEach(function(school) {
      var _educationEntry = $(HTMLschoolStart);
      _educationContainer.append(_educationEntry);
      _educationEntry.prepend(HTMLschoolDegree.replace("%data%", school.degree));
      _educationEntry.prepend(HTMLschoolMajor.replace("%data%", school.majors));
      _educationEntry.prepend(HTMLschoolDates.replace("%data%", school.dates));
      _educationEntry.prepend(HTMLschoolName.replace("%data%", school.name));
      _educationEntry.prepend(HTMLschoolLocation.replace("%data%", school.location));
    });

  _educationContainer.append(HTMLonlineClasses);
    educationData.onlineCourses.forEach(function(course) {
      var _educationEntry = $(HTMLschoolStart);
      _educationContainer.append(_educationEntry);
      _educationEntry.append(HTMLonlineTitle.replace("%data%", course.title));
      _educationEntry.append(HTMLonlineSchool.replace("%data%", course.school));
      _educationEntry.append(HTMLonlineDates.replace("%data%", course.dates));
      _educationEntry.append(HTMLonlineURL.replace("%data%", course.url).replace("#", course.url));
    });
  }
};

var projectView = {
  render: function(projectData) {
    var _projectContainer = $('#projects');
    var _projectEntry = $(HTMLprojectStart);
    for (var i = 0; i < projectData.projects.length; i++) {

      _projectEntry.append(HTMLprojectTitle.replace("%data%", projectData.projects[i].title));
      _projectEntry.append(HTMLprojectDates.replace("%data%", projectData.projects[i].dates));
      _projectEntry.append(HTMLprojectDescription.replace("%data%", projectData.projects[i].description));
      for (var j = 0; j < projectData.projects[i].images.length; j++) {
        _projectEntry.append(HTMLprojectImage.replace("%data%", projectData.projects[i].images[j]));
      };
      _projectContainer.append(_projectEntry);
    };
  }
};

var mapView = {
  render: function(mapData) {
    $("#mapDiv").append(googleMap);
  }
};

var intButtonView = {
  //code that changes the name format
  intName: function(name) {
    var newName = '';

    console.log(name);

    name = name.trim().split(" ");
    console.log(name);
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();

    return name[0] + " " + name[1];
    //return newName;
  },
  //function to initialize button, appends button to page
  //adds click handler
  init: function() {
    var self = this;
    $('#main').append(internationalizeButton);
    $('button').click(function() {
      //self is used instead of this because of, not sure why, the 'this' could cause
      //confusion in other areas of the code?
      self.render();
    });
  },
  render: function() {
    var $name = $('#name');
    var intName = intButtonView.intName($name.text());
    $name.html(intName);
    console.log(intName);
  },

};
intButtonView.init();

octopus.init();
