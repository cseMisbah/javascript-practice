//Get Current Date in Various Formats
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const today = new Date();

//mm-dd-yyyy
let month = today.getMonth();
let date = today.getDate();
let year = today.getFullYear();

if (month < 10) {
  month = "0" + month;
}

if (date < 10) {
  date = "0" + date;
}

console.log(`${month}-${date}-${year}`);

//mm/dd/yyyy
console.log(`${month}/${date}/${year}`);
