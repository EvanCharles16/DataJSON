const DATA = {
    "employees": [{
            "firstName": "John",
            "lastName": "Doe"
        },
        {
            "firstName": "Anna",
            "lastName": "Smith"
        },
        {
            "firstName": "Peter",
            "lastName": "Jones"
        },
        {
            "firstName": "Doni",
            "lastName": "Wong"
        },
        {
            "firstName": "Slamet",
            "lastName": "Jordan"
        },
        {
            "firstName": "Carlo",
            "lastName": "Wee"
        },
        {
            "firstName": "Philips",
            "lastName": "Morris"
        },
        {
            "firstName": "Angga",
            "lastName": "Dwi"
        },
        {
            "firstName": "Vicky",
            "lastName": "Sasongko"
        },
        {
            "firstName": "Nadya",
            "lastName": "Lembayung"
        }
    ],

    "jobs": [{
            "department": "QC",
            "title": "QA"
        },
        {
            "department": "IT",
            "title": ['IT Support', 'Software Engineer', 'UI/UX', 'DevOps']
        },
        {
            "department": "Human Resources Development",
            "title": "SPV"
        },
        {
            "department": "Finance and Accounting",
            "title": "Finance"
        },
        {
            "department": "Marketing and Customer Service",
            "title": "Marketing"
        },
        {
            "department": "Maintance and Facility",
            "title": "Maintance"
        }
    ],

    "details": [{
            "age": [22, 23, 24, 29, 30, 32]
        },
        {
            "experience": ['2 Tahun', '3 Tahun', '4 Tahun']
        }
    ]
}

// Name , Jobs , Department , Title ,  Age , Experience

let name = DATA.employees;
let job = DATA.jobs;
let age = DATA.details;
let exp = DATA.details[1];

console.log (`1. Nama : ${name[0].firstName} ${name[0].lastName}, 
   Job : ${job[0].department}, 
   Title : ${job[0].title}, 
   Age : ${age[0].age[0]}, 
   Experience : ${exp.experience[0]}`)

console.log (`2. Nama : ${name[1].firstName} ${name[1].lastName}, 
   Job : ${job[1].department}, 
   Title : ${job[1].title[0]}, 
   Age : ${age[0].age[1]}, 
   Experience : ${exp.experience[1]}`)

console.log (`3. Nama : ${name[2].firstName} ${name[2].lastName}, 
   Job : ${job[1].department}, 
   Title : ${job[1].title[1]}, 
   Age : ${age[0].age[2]}, 
   Experience : ${exp.experience[2]}`)

console.log (`4. Nama : ${name[3].firstName} ${name[3].lastName}, 
   Job : ${job[1].department}, 
   Title : ${job[1].title[2]}, 
   Age : ${age[0].age[3]}, 
   Experience : ${exp.experience[0]}`)

console.log (`5. Nama : ${name[4].firstName} ${name[4].lastName}, 
   Job : ${job[1].department}, 
   Title : ${job[1].title[3]}, 
   Age : ${age[0].age[4]}, 
   Experience : ${exp.experience[2]}`)

console.log (`6. Nama : ${name[5].firstName} ${name[5].lastName}, 
   Job : ${job[2].department}, 
   Title : ${job[2].title}, 
   Age : ${age[0].age[0]}, 
   Experience : ${exp.experience[1]}`)

console.log (`7. Nama : ${name[6].firstName} ${name[6].lastName}, 
   Job : ${job[3].department}, 
   Title : ${job[3].title}, 
   Age : ${age[0].age[1]}, 
   Experience : ${exp.experience[2]}`)

console.log (`8. Nama : ${name[7].firstName} ${name[7].lastName}, 
   Job : ${job[4].department}, 
   Title : ${job[4].title}, 
   Age : ${age[0].age[5]}, 
   Experience : ${exp.experience[0]}`)

console.log (`9. Nama : ${name[8].firstName} ${name[8].lastName}, 
   Job : ${job[5].department}, 
   Title : ${job[5].title}, 
   Age : ${age[0].age[3]}, 
   Experience : ${exp.experience[2]}`)

console.log (`10. Nama : ${name[9].firstName} ${name[9].lastName}, 
   Job : ${job[1].department}, 
   Title : ${job[1].title[0]}, 
   Age : ${age[0].age[4]}, 
   Experience : ${exp.experience[1]}`)