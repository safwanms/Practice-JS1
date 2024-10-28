const students = [
    { "name": "John Doe", "age": 20, "address": { "pincode": "100001", "city": "New York", "country": "USA" } },
    { "name": "Alice Smith", "age": 22, "address": { "pincode": "200002", "city": "Los Angeles", "country": "USA" } },
    { "name": "Rahul Mehta", "age": 21, "address": { "pincode": "110011", "city": "Delhi", "country": "India" } },
    { "name": "Maria Garcia", "age": 23, "address": { "pincode": "28013", "city": "Madrid", "country": "Spain" } },
    { "name": "Sophia Brown", "age": 19, "address": { "pincode": "SW1A 1AA", "city": "London", "country": "UK" } },
    { "name": "Liam Nguyen", "age": 20, "address": { "pincode": "75001", "city": "Paris", "country": "France" } },
    { "name": "Emma Johnson", "age": 21, "address": { "pincode": "90001", "city": "Chicago", "country": "USA" } },
    { "name": "David Chen", "age": 22, "address": { "pincode": "200080", "city": "Shanghai", "country": "China" } },
    { "name": "Nina Patel", "age": 24, "address": { "pincode": "400001", "city": "Mumbai", "country": "India" } },
    { "name": "Carlos Sanchez", "age": 23, "address": { "pincode": "01000", "city": "Mexico City", "country": "Mexico" } }

    
];


// 1 a) Write a function that takes in the JSON data and prints out all the students' names.
function studentName(students){
    students.forEach(student =>{
    console.log(student.name);
    });
}
studentName(students);

// 1 b) Create a function that lists all students who are from the USA.

function StudentsFromUSA(students) {
    return students.filter(student => student.address.country === "USA");
}

const studentsUSA = StudentsFromUSA(students);
console.log(studentsUSA);


// 1 c) Write a function to find the city of a student based on their name. If the student is not found, return "Student not found".

function findCity(students, name) {
    const student = students.find(student => student.name === name);
    return student ? student.address.city : "Student not found";
}
console.log(findCity(students, "Rahul Mehta"));
console.log(findCity(students, "John Doe"));
console.log(findCity(students, "Maria Garcia"));
console.log(findCity(students, "Sophia Brown"));
console.log(findCity(students, "Liam Nguyen"));
console.log(findCity(students, "David Chen"));
console.log(findCity(students, "Md Safwan")); 





// 2 a) Write a function that returns an array of all students who are above 21 years old.

function Students21(students) {
    return students.filter(student => student.age > 21);
}
console.log(Students21(students));

// 2 b) Create a function that returns an array of names of students from a given country, like "India" or "Japan".

function StudentsByCountry(students, country) {
    return students
        .filter(student => student.address.country === country)
        .map(student => student.name);
}
console.log(StudentsByCountry(students, "India")); 
console.log(StudentsByCountry(students, "USA")); 
console.log(StudentsByCountry(students, "Mexico")); 
console.log(StudentsByCountry(students, "China")); 
console.log(StudentsByCountry(students, "Spain")); 
console.log(StudentsByCountry(students, "UK")); 
console.log(StudentsByCountry(students, "France")); 
console.log(StudentsByCountry(students, "Japan")); 




// 2 c) Write a function that returns an array of objects with only name and age properties for each student.

function StudentNameAndAge(students) {
    return students.map(student => ({
        name: student.name, age: student.age
    }));
}

console.log(StudentNameAndAge(students));

// 3 a) Write a function to add a new student to the JSON data. Accept name, age, pincode, city, and country as inputs.
function addNewStudent(students, name, age, pincode, city, country) {
    const newStudent = {
        name: name,
        age: age,
        address: {
            pincode: pincode,
            city: city,
            country: country
        }
    };
    students.push(newStudent);
    return students;
}
addNewStudent(students, "Safwan", 28, "577536", "Chitradurga", "India");
console.log(students);



// 3 b) Create a function that updates the city of a student based on their name. If the student isn’t found, return "Student not found".

// 3 c) Write a function that increases the age of each student by 1 (e.g., for updating a new academic year).
function increaseAge(students) {
    students.forEach(student => {
        student.age = student.age + 1 ;
    });
    return students;
}
console.log(students);
increaseAge(students);

// 4 a)  Write a function to count how many students are from each country. Return the result as an object, e.g., { "USA": 5, "India": 3 }.


// 4 b)  Write a function that calculates the average age of all students.

function AverageAge(students) {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}
const avgAge = AverageAge(students);
console.log("Average Age:", avgAge);



// 4 c)  Create a function that calculates the total number of students who are older than 22.
function Students22(students) {
    return students.filter(student => student.age > 22).length;
}
const studentsOlderThan22 = Students22(students);
console.log(studentsOlderThan22);



// 5 a)  Write a function to search for students by city and return a list of names of students from that city.

function StudentsFromCity(students, city) {
    return students
        .filter(student => student.address.city === city)
        .map(student => student.name);
}
const studentsFromCity = StudentsFromCity(students, "Delhi");
console.log("Students from delhi:", studentsFromCity);


// 5 b)  Create a function that sorts the students by age in ascending order and prints their names and ages.


// 5 c)  Write a function to find the oldest student and print their name, age, and city.





// 6 a)  Write a function that returns a new JSON array with each student's name in uppercase.


// 6 b)  Create a function that removes students who are younger than 20 and returns the updated JSON array.



// 6 c)  Write a function to transform each student’s country to lowercase and return the updated JSON array.

// 7 a)  Write a function that returns an array of unique countries represented in the JSON data.

// 7 b)  Create a function that returns all unique pincodes from the JSON data.


// 7 c)  Write a function that returns a list of students who live in cities with duplicate names (e.g., if there were multiple entries for "Paris").

// 8 a)  Write a function that groups students by country into separate arrays. Return an object where each key is a country and the value is an array of students from that country.
// 8 b) Create a function that finds the most common city among all students.
// 8 c)  Write a function that returns a list of students sorted first by country and then by city within each country.
