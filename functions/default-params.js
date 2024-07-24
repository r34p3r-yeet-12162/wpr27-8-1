/* function GetUser(username) {
    if(typeof username === 'undefined')
    {
        username = 'Guest'
    }
    console.log(`The name of the user is ${username}`);
}

GetUser('Joe'); */

// The value Guest is a default value if none if provided
/* function GetUser(username = 'Guest') {
   
    console.log(`The name of the user is ${username}`);
}

GetUser(); */

// default parameters are written righmost
function GetUser(name, surname, middlename = "") {
  console.log(
    `The name of the user is ${name} ${surname}. Middlename: ${middlename}`
  );
}

GetUser("John", "Doe", "");
