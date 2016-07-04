var stdInfo = {
    "name": {},
    "dob": {},
    "contact": {},
    "address": {}
};
stdInfo.name.fname = (prompt("Enter Students First Name"));
stdInfo.name.mname = (prompt("Enter Students Middel Name"));
stdInfo.name.lname = (prompt("Enter Students Last Name"));

stdInfo.dob.date = parseInt(prompt("Enter Students Birth date"));
stdInfo.dob.month = (prompt("Enter Students Birth month"));
stdInfo.dob.year = parseInt(prompt("Enter Students Birth Year"));

stdInfo.contact.mobile = parseInt(prompt("Mobiel Number"));
stdInfo.contact.home = parseInt(prompt("Enter home contact no."));

stdInfo.address.local = (prompt("Enter Local Address"));
stdInfo.address.permanant = (prompt("Enter permanant Address"));

console.log("Student Name = ", stdInfo.name.fname + ' ' + stdInfo.name.mname + ' ' + stdInfo.name.lname);
console.log("Birthdate = ", stdInfo.dob.date + ' ' + stdInfo.dob.month + ' ' + stdInfo.dob.year);
console.log("Mobile no. = ", stdInfo.contact.mobile);
console.log("contact Home =", stdInfo.contact.home);
console.log("Address =", stdInfo.address.local);
console.log("permanant Address = ", stdInfo.address.permanant);