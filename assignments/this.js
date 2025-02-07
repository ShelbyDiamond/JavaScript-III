/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global/window binding- makes a function that is called with a particular "this" value.
 * 2. Implicit binding occurs when dot notation is used to invoke a function.
 * 3. New Binding creates a blank, plain JavaScript object and Returns this if the function doesn't return.
 * 4. Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
 *
 * write out a code example of each explanation above
 */

// Principle 1
function givenAge(age) {
  console.log(this);
  return age;
}
console.log(givenAge(26));

// Principle 2
const patient = {
  name: "Russell James",
  DOB: "02/28/2017",
  Address: "123 I Love My Nephew Lane",
  Dx: "E11.65 - Type 2 diabetes mellitus with hyperglycemia",
  patientSummary() {
    return `This patient ${this.name} with a date of birth ${
      this.DOB
    } and lives on ${this.Address} does not have a diagnosis of ${this.Dx}.`;
  }
};

console.log(patient.patientSummary());

// Principle 3

function myfamily(neice, nephew) {
  this.neice = neice;
  this.nephew = nephew;
  this.summary = function() {
    console.log(`My Neice is ${neice}. My nephew is ${nephew}.`);
  };
}
const family1 = new myfamily("Ruby Genevieve", "Russell James");
const family2 = new myfamily("Jessie Ashlee", "Josh Evan");

family1.summary();
family2.summary();
// Principle 4

// code example for Explicit Binding
function Patient(attritbutes) {
  this.name = attritbutes.name;
  this.dob = attritbutes.dob;
  this.dx = attritbutes.dx;

  this.charts = function() {
    return `During today's appointment Patient ${
      this.name
    } with a Date Of Birth of ${this.dob} was diagnosed with ${this.dx}.`;
  };
}

const jennifer = new Patient({
  name: "Jennifer Diamond",
  dob: "03/05/1969",
  dx: "F90.9 - Attention-deficit hyperactivity disorder, unspecified type"
});

const todd = new Patient({
  name: "Todd Hanle",
  dob: "04/23/1967",
  dx: "I10 - Essential (primary) hypertension"
});

console.log(jennifer.charts());
console.log(jennifer.charts.call(todd));
