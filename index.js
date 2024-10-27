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
// 1. Accessing Data
// - a) Write a function that takes in the JSON data and prints out all the students' names.
// - b) Create a function that lists all students who are from the USA.
// - c) Write a function to find the city of a student based on their name. If the student is not found, return "Student not found".

// 2. Filtering and Mapping
// - a) Write a function that returns an array of all students who are above 21 years old.
// - b) Create a function that returns an array of names of students from a given country, like "India" or "Japan".
// - c) Write a function that returns an array of objects with only name and age properties for each student.

// 1 a)
function studentName(students){
    students.forEach(student =>{
    console.log(student.name);
    });
}
studentName(students);

// 1 b)

// 1 c) 
function studentCity(students,name) {
    const student = students.find(student => student.name === name);
    if (student) {
        return students.address.city;
    } else {
        return "Student not found";
    }
}
console.log(studentCity(students, "Emma Johnson")); 
console.log(studentCity(students, "Md Safwan"));   



// 2 a)
function Students21(students) {
    return students.filter(student => student.age > 21);
}
console.log(Students21(students));

// 2 b)


// 2 c)
function StudentNameAndAge(students) {
    return students.map(student => ({
        name: student.name, age: student.age
    }));
}

console.log(StudentNameAndAge(students));









