/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global/window binding- bind() makes a function that is called with a particular this value.
 * 2. Implicit binding occurs when dot notation is used to invoke a function.
 * 3. New Binding creates a blank, plain JavaScript object and Returns this if the function doesn't return.
 * 4. Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3
function House(stories, model, year) {
  this.stories = stories;
  this.model = model;
  this.year = year;
}
console.log(House);

// Principle 4

// code example for Explicit Binding
