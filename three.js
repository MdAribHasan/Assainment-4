const marks =90
function  willSuccess( marks ) {
    if (!Array.isArray(marks)) {
        return "Invalid";
      }
    const pass = []
    const fail = []
    for ( const mark of marks){
        if(mark >= 50){
            pass.push(mark)
        }
        else{
            fail.push(mark)
        }
    }
    if(pass.length <= fail.length){
        return false
    }
    return true
   

}
const passFail = willSuccess( marks )
console.log(passFail)