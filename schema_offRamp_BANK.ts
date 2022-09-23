const data1 = {
    blockchains: ["MATIC"], 
    immediate: false,
    fields: {
      residenceAddress: {
        street1: "Werner-Heisenberg-Allee 25",
        street2: "berlin",
        city: "berlin",
        state: "MU",
        postalCode: "80939",
        country: "DE",
      },
      firstName: "Himanshu",
      lastName: "Sinigh",
      legalName: "Himanshu Singh",
      dateOfBirth: "1964-12-08",
      email: "vertigo.himanshu@gmail.com",
      cellphoneNumber: "+4930986365012",
    },
  };
  const data2 = {
    country: "US",
    paymentMethodType: "INTERNATIONAL_TRANSFER",
    currency: "USD",
    beneficiaryType: "INDIVIDUAL",
    chargeablePM: false,
    firstNameOnAccount: "Himanshu",
    lastNameOnAccount: "Singh",
    accountNumber: "0",
    routingNumber: "0",
    accountType: "CHECKING",
    paymentType: "LOCAL_BANK_TRANSFER",
    beneficiaryAddress: "112 Brannan St",
    beneficiaryCity: "San Francisco",
    beneficiaryState: "CA",
    beneficiaryPostal: "94108",
    beneficiaryPhoneNumber: "+14102239203",
    beneficiaryDobDay: 15,
    beneficiaryDobMonth: 12,
    beneficiaryDobYear: 1989,
  };
  
  
  const data3 = {
    muteMessages: false,
    blockchain: "MATIC",
    notifyUrl: "https://requestinspector.com/inspect/01gc97dgf10ebfmztcb6bd4bae",
  };
  

  userID : response_create_user.id,
  paymentMethod :       response_create_payment_method.id,


  // offRAMPING_DATA ::CARD
//----------------------------------------
//----------------------------------------

  {
    address,//yes
    city,//yes
    state,//yes
    postalCode,//yes
    country,//yes




    firstName,  //yes
    lastName, //yes

    email, //yes
    cellphone, //yes

    sourcecurrency, //yes
    sourceAmount, //yes
    destCurrency, //yes


    
    dateOfBirth, //done
    legalName, 
   

  
    notifyUrl, 
    recipientAddress //yes


    accountNumber,//yes
    routingNumber,//yes
    accountType,//yes


































    // responses-------------------------
// -------------------------
// -------------------------

    userID,//yes
    paymentMethod,//yes
    transferID//yes

  }

