{
    sourceCurrency: "USD", // YES
    destCurrency: "MATIC", // YES
    dest: "matic:0xF079F9040D099513D69F282200C80337F43F5ea3", // YES
    country: "US", // YES
    referrerAccountId: "AC_BXLM6XH7EBD", 
    paymentMethod: "debit-card", // YES
    sourceAmount: "10", // YES
    amountIncludeFees: true, 
  }

  {
    debitCard: {
      number: "4111111111111111",  // YES (last 4 digit)
      year: "2023",
      month: "01",
      cvv: "555",
    },
    address: {
      street1: "1234 Test Ave",  // YES
      city: "Los Angeles",       // YES
      state: "CA",              // YES
      postalCode: "91420",       // YES
      country: "US",            // YES
    },
    reservationId: "",      
    trigger3ds: true,   
    amount: "10",           // YES
    sourceCurrency: "USD",  // YES : Repeated
    destCurrency: "MATIC",  // YES : Repeated
    dest: "matic:0xF079F9040D099513D69F282200C80337F43F5ea3",   // YES : Repeated
    referrerAccountId: "AC_BXLM6XH7EBD",  // YES : Repeated
    givenName: "Himanshu",  // YES 
    familyName: "Singh",    // YES 
    email: "himanshusingh@rapidinnovation.dev", // YES 
    phone: 18588255555,// YES 
    ipAddress: "1.1.1.1",// YES 
  };
  
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------
//----------------------------------------
// onRAMPING_DATA ::CARD
{
    address, //yes
    city, //yes
    state, //yes
    postalcode, //yes
    country, //yes
    
    firstName, //yes
    lastName,  //yes

    email, //yes
    phone,//yes
    sourceAmount //yes
    sourceCurrency, // yes
    destCurrency, //yes




    


dest , //yes

paymentMethod, //yes



debit_card_last4_digit , //yes





ipAddress, 






















// -------------------------
// -------------------------
// -------------------------

accountID, //yes
reservationID, //yes
walletOrderID, //yes
}    // responses
  accountID : accountID
  reservationID: response_reservation.reservation
  walletOrderID : response_create_order.id