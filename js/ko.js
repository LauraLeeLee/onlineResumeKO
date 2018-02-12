//------------Model
var data = {
  bio: {
    "name": "Laura Logan",
    "role": "Frontend Web Developer",
    "welcomeMessage": "We must let go of the life we have planned, so as to accept the one that is waiting for us.  --Joseph Campbell",
    "biopic": "images/me-400_small.jpg",
    "contacts": [{
      title: "email",
      value: "LauraRDH@aol.com",
      link: "mailto:LauraRDH@aol.com",
      showContact: ko.observable(true),
      noLinkClass: ko.observable(this.link ? false : true)
    },
    { title: "github",
      value: "https://github.com/LauraLeeLee",
      link: "https://github.com/LauraLeeLee",
      showContact: ko.observable(true),
      noLinkClass: ko.observable(this.link ? false : true)
    },
    { title: "mobile",
      value: "724-272-xxxx",
      link: "tel:724-272-3057",
      showContact: ko.observable(true),
      noLinkClass: ko.observable(this.link ? false : true)
    },
    { title: "twitter",
      value: "",
      link: "",
      showContact: ko.observable(true),
      noLinkClass: ko.observable(this.link ? false : true)
    },
    { title: "blog",
      value: "",
      link: "",
      showContact: ko.observable(true),
      noLinkClass: ko.observable(this.link ? false : true)
    },
    { title: "location",
      value: "Pittsburgh",
      link: "",
      showContact: ko.observable(true),
      noLinkClass: ko.observable(this.link ? true : false)
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
        "dates": "2016-2018"
      },
      {
        "title": "Intro to JavaScript",
        "school": "Code School",
        "dates": "January 2017",
        "url": "http//www.codeschool.com"
      },
      {
        "title": "Introduction to JavaScript",
        "school": "Ed2Go",
        "dates": "July 2016-August 2016",
        "url": "http://www.ed2go.com"
      },
      {
        "title": "Intermediate CSS3 and HTML5",
        "school": "Ed2Go",
        "dates": "May 2016-June 2016",
        "url": "http://www.ed2go.com"
      },
      {
        "title": "Introduction to CSS3 and HTML5",
        "school": "Ed2Go",
        "dates": "March 2016-April 2016",
        "url": "http://www.ed2go.com"
      }
    ],
  },
  work: {
    "jobs": [{
        employer: "Centre for Dentistry",
        title: "- Office Manager/Dental Marketer",
        location: "Cranberry Twp, PA",
        dates: "1993-present",
        description: "Help manage daily flow of dental office. Interview and assist in the managment of employees. Manage marketing for new and existing patients."
      },
      {
        employer: "Dr. Irving Kraft",
        title: "- Dental Hygienist",
        location: "Philadelphia, PA",
        dates: "1988-1993",
        description: "Provide prophylaxis, root planing and scaling, take necessary xrays, patient education, treatment presentation."
      }
    ]
  },
  projects: {
    "projects": [{
      "title": "Neighborhood Map Project",
      "link": "https://github.com/LauraLeeLee/NeighborhoodMapProject",
      "dates": "January 2018",
      "description": "Final project for Udacity FEND program. Main points to the project were using Google Map Apis as well as Google Places services, adding a third party api and KnockoutJS for rendering to the DOM.",
      "images": ["images/map_proj1-250_xsmall.png", "images/map_proj2-250_xsmall.png", "images/map_proj4-250_xsmall.png"]
    },
    {
      "title": "Cat Clicker Pro",
      "link": "https://github.com/LauraLeeLee/catClickerPro",
      "dates": "September 2017",
      "description": "Udacity FEND lesson project. We were given base code. Lessons for this task were to reinforce separation of concerns using MVO structure. Includes three view model areas to separate the different views of this application",
      "images": ["images/catClick1-250_xsmall.png", "images/catClick2-250_xsmall.png", "images/catClick3-250_xsmall.png"]
    },
    {
      "title": "Classic Arcade Game",
      "link": "https://github.com/LauraLeeLee/fendArcadeGame",
      "dates": "April 2017",
      "description": "Udacity FEND project. We were given base code. Our task was to create the players as well as the cars using skills learned from the lessons for Object Constructors, Prototypal Classes, Scopes, This, and Closures. ",
      "images": ["images/arcade1-250_xsmall.png", "images/arcade2-250_xsmall.png", "images/arcade3-250_xsmall.png"]
    },
    {
      "title": "Portfolio Project",
      "link": "",
      "dates": "December, 2016",
      "description": "Udacity project utilizing skills learned of HTML, CSS and responsiveness",
      "images": ["images/portfolio1-250_xsmall.png", "images/porfolio2-250_xsmall.png"]
    }]
  },
  footer: [{
    title: "laurardh@aol.com",
    url: "mailto:laurardh@aol.com",
    classIcon: "entypo-mail"
  },
  { title: "github",
    url: "https://www.github.com/LauraLeeLee",
    classIcon: "entypo-github"
    },
  { title: "linkedin",
    url: "https://www.linkedin.com/in/laura-logan-30272a16?trk=hp-identity-name",
    classIcon: "entypo-linkedin"
  },
  { title: "facebook",
    url: "https://www.facebook.com/lauraleelee",
    classIcon: "entypo-facebook"
  }]
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
  self.footer = ko.observableArray(data.footer);
  self.link = ko.observable(data.bio.contacts.link);
  self.facebook = ko.observable(data.bio.facebook);
  self.linkedin = ko.observable(data.bio.linkedin);
  // self.noLinkClass = ko.observable(data.bio.contacts.link ? false : true);
  // self.mobile = ko.observable(data.bio.contacts.mobile);
  // self.email = ko.observable(data.bio.contacts.email);
  // self.twitter = ko.observable(data.bio.contacts.twitter);
  // self.github = ko.observable(data.bio.contacts.github);
  self.city = ko.observable(data.bio.contacts.location);

  self.skills = ko.observableArray(data.bio.skills);
  self.schools = ko.observableArray(data.education.schools);
  self.onlineCourses = ko.observableArray(data.education.onlineCourses);
  self.jobs = ko.observableArray(data.work.jobs);
  self.projects = ko.observableArray(data.projects.projects);
  // self.showContact = ko.observable(true);

  self.hideLink = function(contact){
    if( self.link !== ""){
      // self.contact.showContact(false);

    }
  }
  //code that changes the name format to internationalized and back to regular
  self.intName = function(name) {
    var name = self.name().trim().split(" ");
    if (name[1] === name[1].toUpperCase()) {
      name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
      name[1] = name[1].slice(0, 1).toUpperCase() + name[1].slice(1).toLowerCase();
      self.name(name[0] + " " + name[1]);
    } else {
        name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
        name[1] = name[1].toUpperCase();
        self.name(name[0] + " " + name[1]);
    }
    console.log(self.name());
  }

};
ko.applyBindings(new ViewModel());
