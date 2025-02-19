const person1 = "Mizan"
const person2 ={ name: "mitu", gender: "male", age: 32 }
function  validProposal( person1 , person2 ){
    if (typeof person1 !== 'object' || typeof person2 !== 'object') {
        return "Invalid";
      }
    if(person1.gender !== person2.gender && Math.abs(person1.age - person2.age) <= 7){
        return true
    }
    return false
}
const marrige = validProposal( person1 , person2 )
console.log(marrige);