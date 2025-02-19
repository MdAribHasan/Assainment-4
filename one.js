const amount = "foo"
function calculateVAT(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      return "Invalid";
    }
    const vatAmount = amount * (7.5/100);
    return vatAmount;
  }



  const vatHobe = calculateVAT(amount)
  console.log('Laga joy bangla vat :',vatHobe);









 
function  validContact( contact ) {
  
}
