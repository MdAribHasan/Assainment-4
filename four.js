const person1 = { name: "Rahul", gender: "male", age: 28 }
const person2 ={ name: "Joya", gender: "female", age: 21 }

function  validProposal( person1 , person2 ){
    if (typeof person1 !== 'object' || typeof person2 !== 'object') {
        return "Invalid";
      }

    const genderCheck = person1.gender !== person2.gender;

    const ageCheck = Math.abs(person1.age - person2.age) <= 7;
    if(genderCheck && ageCheck){
        return true
    }
    return false
}
const marrige = validProposal( person1 , person2 )
console.log(marrige);