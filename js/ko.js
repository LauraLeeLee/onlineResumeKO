//------------Model
var data = {
  bio: {
    "name": "Laura Logan",
    "role": "Frontend Web Developer",
    "welcomeMessage": "We must let go of the life we have planned, so as to accept the one that is waiting for us.  --Joseph Campbell",
    "biopic": "images/me-400_small.jpg",
    "contacts": [{
      title: "mobile",
      value: "724-272-xxxx",
      link: "tel:724-272-3057",
      showContact: ko.observable(true)
    },
    { title: "email",
      value: "LauraRDH@aol.com",
      link: "mailto:LauraRDH@aol.com",
      showContact: ko.observable(true)
    },
    { title: "twitter",
      value: "",
      link: "",
      showContact: ko.observable(true)
    },
    { title: "github",
      value: "https://github.com/LauraLeeLee",
      link: "https://github.com/LauraLeeLee",
      showContact: ko.observable(true)
    },
    { title: "blog",
      value: "",
      link: "",
      showContact: ko.observable(true)
    },
    { title: "location",
      value: "Pittsburgh",
      link: "",
      showContact: ko.observable(true)
    }],
    "skills": ["HTML", "CSS", "JavaScript", "KnockoutJs", "Photoshop"]
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

//---------------ViewModel
var vm;
var ViewModel = function() {
  var self = this;

  self.name = ko.observable(data.bio.name);
  self.role = ko.observable(data.bio.role);
  self.welcomeMessage = ko.observable(data.bio.welcomeMessage);
  self.biopic = ko.observable(data.bio.biopic);
  self.contacts = ko.observableArray(data.bio.contacts);
  self.link = ko.observable(data.bio.contacts.link);

  // self.mobile = ko.observable(data.bio.contacts.mobile);
  // self.email = ko.observable(data.bio.contacts.email);
  // self.twitter = ko.observable(data.bio.contacts.twitter);
  // self.github = ko.observable(data.bio.contacts.github);
  // self.city = ko.observable(data.bio.contacts.location);

  self.skills = ko.observableArray(data.bio.skills);
  self.schools = ko.observableArray(data.education.schools);
  self.onlineCourses = ko.observableArray(data.education.onlineCourses);
  self.jobs = ko.observableArray(data.work.jobs);
  self.projects = ko.observableArray(data.projects.projectsS);
  // self.showContact = ko.observable(true);

  self.hideLink = function(contact){
    if( self.link !== ""){
      self.contact.showContact(false);
    }
  }
};

ko.applyBindings(new ViewModel());
