const contact = true

function  validContact( contact ) {
    if(typeof contact !== 'string'){
        return "invalid"
    }
     if( contact.length === 11 && contact.startsWith("01") && !contact.includes(' ')){
        return true;
    }
        return false;
    }


const valid = validContact(contact)
console.log(valid);
