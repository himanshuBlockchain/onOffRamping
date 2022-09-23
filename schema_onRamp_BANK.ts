// SAMPLE DATAS
const data1 = {
    blockchains: ["MATIC"],  
    immediate: false,
    fields: {
      residenceAddress: {
        street1: "Werner-Heisenberg-Allee 25",
        street2: "berlin",
        city: "San Francisco",
        state: "CA",
        postalCode: "94108",
        country: "US",
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
    country: "US", //
    paymentMethodType: "INTERNATIONAL_TRANSFER", //
    currency: "USD", //
    beneficiaryType: "INDIVIDUAL",
    chargeablePM: true,
    firstNameOnAccount: "Himanshu", //
    lastNameOnAccount: "Singh", //
    accountNumber: "0", //
    routingNumber: "0",
    accountType: "SAVINGS",
    paymentType: "LOCAL_BANK_WIRE",
    beneficiaryAddress: "112 Brannan St", //
    beneficiaryCity: "San Francisco",
    beneficiaryState: "CA",
    beneficiaryPostal: "94108",
    beneficiaryPhoneNumber: "+14102239203",
    beneficiaryDobDay: 15,
    beneficiaryDobMonth: 12,
    beneficiaryDobYear: 1989,
    beneficiaryAddress2: "   ",
  };
  const data3 = {
    autoConfirm: true,
    source: "paymentmethod:PA_27E9DN23LBD",
    sourceCurrency: "USD",
    sourceAmount: "11",
    dest: "matic:0xdB5F73e72B60B791127A3610f24137aC250bA4dC",
    destCurrency: "MATIC",
    notifyUrl: "https://requestinspector.com/inspect/01gc97dgf10ebfmztcb6bd4bae",
    amountIncludesFees: true,
  };
  

  userID :     response_create_user.id,
  paymentMethod : response_create_payment_method.srn
  transferId : response_create_transfer.id

// onRAMPING_DATA :: BANK
//----------------------------------------
//----------------------------------------
  {
    
    address,//yes
    city,//yes
    state,//yes
    postalCode,//yes
    country,//yes




    firstName, //yes
    lastName, //yes

    email, //yes
    cellphone, //yes

    sourcecurrency, //yes
    sourceAmount,  //yes
    destCurrency, //yes

    legalName, //done
    dateOfBirth, //done
  


   
    dest, //yes 
    notifyUrl, //yes


    accountNumber, //yes
    routingNumber, //yes


    accountType,
    paymentMethodType,
    paymentType,
    beneficiaryType,
    

















    -------------------------
    // -------------------------
    // -------------------------
        // responses
    userID, //yes
    paymentMethod, //yes
    transferID //yes

  }

