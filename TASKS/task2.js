/* Program for Task 2*/
// A program to understand string library functions

//getting firstName and lastName from user
const firstName = prompt("Enter your first name :");
const lastName = prompt("Enter your last name :");

const fullName = firstName + " " + lastName;

document.write(fullName + "<br />");

//printing the length of full name
document.write("Length of fullname is " + fullName.length + "<br/>");

//printing the full name in uppercase
document.write("Uppercase fullname is : " + fullName.toUpperCase());
