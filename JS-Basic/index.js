/*

let info = "internet positif"

console.log('berisi informasi untuk developer');
console.log("berisi informasi untuk developer");
console.log(`berisi informasi ${info}`)

// Memberikan Informasi/ pesan
window.alert("Pesan : selamat kamu memenangkan hadiah")

// Memberikan input
const name = window.prompt("siapa nama anda?", "Evan Charles")

console.log(`nama saya adalah ${name}`)

// Konfirmasi
const namanyaBener = window.confirm(`bener nih namamu ${name} ?`)

// Untuk debug / pause the program
debugger;

 if (namanyaBener){
     console.log('bagus');
}

 else{
     console.log('ulangi isi namanya yah')
 }

 */

 /*

 let multipleString = `
 panjang sampai kebawah

 beneran loh
 `

 let multipleString2 ="
 kok gk bisa sih
 error
 "
 console.log(multipleString)

*/

/*

let nilaiLulus = 76
let minimNilaiKelulusan = 75
let isLulus = nilaiLulus > minimNilaiKelulusan;
let hasilnya = isLulus ? 'lulus' : 'DO'

// 'let hasilnya sama dengan konsep if else
 if(isLulus){
     hasilnya = 'lulus'
 }
 else {
     hasilnya = 'DO'
 }

console.log(`gue ${hasilnya}`)

*/


// Array (0,1,2,...)
bigCompany = ['google', 'facebook', 'apple']

// pemanggilannya human.name utk bean
let human = {
    name: 'bean',
    height: 200,
    weight: 50,
    live: 'hongkong',
    jobs: ['google', 'facebook', {
        name:'apple',
        location: 'US',
    }],

    pets: {
        name: 'blacky',
        height: 20,
        weight: 20,
    },

// Penggunaan This dikarenakan masih dalam 1 object yaitu Human
// Cara 1
    printNameAndDogName : function(){
        const myName = this.name
        const dogName = this.pets.name
        console.log(`my name is ${myName} & my dog is ${dogName}`)
    },

// Cara 2
    printJobs : () => {
        const job = human.jobs[0]
        console.log(`my job is ${job}`)
    },

    printJobs : (urutan) => {
        const job = human.jobs[urutan]
        console.log(`my job is ${job}`)
    }
}

// console.log(human.name)
// console.log(human.jobs[1])
// console.log(human.jobs[2].name)
// let petName = human.pets.name
// console.log(petName)


let building = {
    name : 'batam pos',
    floor : 21,
    printNameAndFloor : function(otherInfo){
        const name = this.name;
        const floor = this.floor;
        console.log(`${name} building have ${floor} floors and ${otherInfo}`)
    },

    // Cara penulisan 1
    printOther : (otherInfo) => {
        console.log(otherInfo)
    },

    // Cara penulisan 2
    printOther : otherInfo => console.log (otherInfo)
}



// JSON stringify membuat JSON/ Javascript Object ke String
let jsonString = JSON.stringify(building)
console.log(jsonString)
// Hasilnya =>   "{"name":"batam pos","floor" : 21}"
// yang diambil adalah value yang string , integer , booelan , & float
// dan akan meremove yang memiliki value function & undefined


// JSON.parse membuat JSON berbentuk string kembali ke asalnya / ke object
let jsonParse = JSON.parse(jsonString)
console.log(jsonParse)
// Hasilnya 
/*
{
    "name" : "batam pos",
    "floor" : 21
}
*/
