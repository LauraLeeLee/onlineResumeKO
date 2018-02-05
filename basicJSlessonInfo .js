

// $("#main").append("Laura Spaziani Logan");
// [string].replace([old]. [new]);

var role= "Frontend Web Developer";
var name= "Laura Logan Spaziani";
var formattedName= HTMLheaderName.replace("%data%", name);




var formattedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedGithub= HTMLgithub.replace("%data%", bio.contacts.github);
var formattedEmail=  HTMLemail.replace("%data%",bio.contacts.email);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.picture);
var formattedWelcomeMsg= HTMLwelcomeMsg.replace("%data%",bio.message);
var formattedSkills= HTMLskills.replace("%data%", bio.skills);

/*var work= {};
  work.current= "Dental marketing/manager";
  work.employer= "Centre for Dentistry";
  work.workDates= "24 years";
  work.location= "Cranberry Twp, PA";


var education= {};
education["lastSchool"]= "University of Pittsburgh";
education["yearsAttended"]= "4 years";
education["schoolLocation"]= "Pittsburgh, PA";
*/


var formattedWorkDescription= HTMLworkDescription.replace("%data%",work.current);
var formattedEmployer= HTMLworkEmployer.replace("%data%",work.employer);
var formattedWorkDates= HTMLworkDates.replace("%data%",work.workDates);
var formattedWorkLocation= HTMLworkLocation.replace("%data%",work.location);

var formattedSchoolName= HTMLschoolName.replace("%data%",education.lastSchool);
var formattedSchoolDates= HTMLschoolDates.replace("%data%",education.yearsAttended);
var formattedSchoolLocation= HTMLschoolLocation.replace("%data%",education.schoolLocation);





  $("#header").prepend(formattedName);

$("#header").prepend(formattedWelcomeMsg);
$("#header").prepend(formattedSkills);
$("#education").append(HTMLschoolStart);
$(".education-entry").append(education.lastSchool);
$("#main").append(work["current"]);
$("#main").append(education.lastSchool);




/*Append HTMLschoolStart to the #education
 div and append the education elements
 to the .education-entry div.(this class is in the helperjs file)*/

 // var firstName= "James";
 // var age= 32;
 // console.log(firstName);
 // var awesomeThoughts= "I am Laura and I am awesome!";
 // console.log(awesomeThoughts);
// var funThoughts= awesomeThoughts.replace("awesome", "fun");
// $("#main").append(funThoughts);

// example to show how the var in the for loop targets
// value in the array itself
//var itemAtTheIndex = myArray[indexValue]

/*work.jobs.forEach(function(i) {
  $("#workExperience").append(HTMLworkStart);
 var formattedEmployer= HTMLworkEmployer.replace("%data%",i.employer);
 var formattedWorkTitle= HTMLworkTitle.replace("%data%",work.jobs[i].title);
 var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
 $(".work-entry:last").append(formattedEmployerTitle);
 var formattedWorkLocation= HTMLworkLocation.replace("%data%",work.jobs[i].location);
 $(".work-entry:last").prepend(formattedWorkLocation);
 var formattedWorkDates= HTMLworkDates.replace("%data%",work.jobs[i].dates);
 $(".work-entry:last").append(formattedWorkDates);
 var formattedWorkDescription=HTMLworkDescription.replace("%data%",work.jobs[i].description);
 $(".work-entry:last").append(formattedWorkDescription);
 console.log(job);
});  */


/*function displayWork (){
  for(var i=0; i<work.jobs.length; i++){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer= HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
    var formattedWorkTitle= HTMLworkTitle.replace("%data%",work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedWorkLocation= HTMLworkLocation.replace("%data%",work.jobs[i].location);
    $(".work-entry:last").prepend(formattedWorkLocation);
    var formattedWorkDates= HTMLworkDates.replace("%data%",work.jobs[i].dates);
    $(".work-entry:last").append(formattedWorkDates);
    var formattedWorkDescription=HTMLworkDescription.replace("%data%",work.jobs[i].description);
    $(".work-entry:last").append(formattedWorkDescription);
   }
};  displayWork(work.jobs);
*/
