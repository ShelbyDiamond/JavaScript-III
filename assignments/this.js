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
    } and lives on ${this.address} does not have a diagnosis of ${this.Dx}`;
  }
};

// Principle 3
// function house(stories, model, year) {
//   this.stories = 2;
//   this.model = whatever a house model is;
//   this.year = 2019;
// }
// console.log(house);

// Principle 4

// code example for Explicit Binding
