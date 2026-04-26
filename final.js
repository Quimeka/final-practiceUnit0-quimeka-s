//"Designed for Me"


//Example 1: Creating a User Profile
//SKILL USE: Values, Data Types, and Operations
//SKILL USE: Building Arrays

//Import the readline-sync package to allow user input
const readline = require('readline-sync');

//Array to store user information
let endUsers = [];


//Request Profile Information from User

//Ask the user to enter their first name and store it as a string
let firstName = readline.question("Enter your first name: "); 

//Ask the user to enter their last name and store it as a string
let lastName = readline.question("Enter your last name: "); 

//Ask the user to enter their sex and  store it as a string
let sex = readline.question("Enter your sex: "); 

//Ask the user to enter their age and convert it into a number
let age = Number(readline.question("Enter your age: ")); 

//Ask the user to enter their city/state and  store it as a string
let city = readline.question("Enter your city/state: "); 

//Ask the user to enter their height and  store it as a string
let height = readline.question("Enter your height: "); 

//Ask the user to enter their body type and  store it as a string
let bodyType = readline.question("Enter your body type (slim, average, athletic, curvy, prefer not to say): "); 

//Ask the user to enter their nationality and store it as a string
let nationality = readline.question("Enter your nationality: "); 

//Ask the user to enter their race/ethnicity and store it as a string
let race = readline.question("Enter your race/ethnicity: "); 

//Ask the user to enter their religion and store it as a string
let religion = readline.question("Enter your religion (or N/A): "); 

//Ask the user to enter their educational background and  store it as a string
let education = readline.question("Enter your educational background (or N/A): "); 

//Ask the user if they smoke and convert to a boolean
let isCigaretteSmoker = readline.question("Do you smoke cigarettes? (yes/no): ") === "yes"; 

//Ask the user if they drink alcohol and convert to a boolean
let isDrinker = readline.question("Do you drink alcohol? (yes/no): ") === "yes"; 

//Ask the user if they use drugs and convert to a boolean
let isDrugUser = readline.question("Do you use drugs? (yes/no): ") === "yes"; 

//Ask the user if they want children and store it as a string
let wantsChildren = readline.question("Do you want children? (yes/no/maybe): "); 

//Ask the user if they already have children and store it as a string
let hasChildren = readline.question("Do you have children? (yes/no): "); 

//Ask the user if they are open to dating someone with children
let openToChildren = readline.question("Are you open to dating someone with children? (yes/no): "); 

//Ask the user to enter their hobbies and store it as a string
let hobbies = readline.question("Enter your hobbies (separated by commas): "); 

//Ask the user for favorite music/movie type and store it as a string
let favorites = readline.question("Favorite music or movie genres: "); 

//Ask the user to describe themselves and store it as a string
let aboutMe = readline.question("Write a short 'About Me': "); 

//Define variable to contain all user input
let userDescription = `
Name: ${firstName} ${lastName}
Age: ${age}
Sex: ${sex}
City: ${city}

Height: ${height}
Body Type: ${bodyType}
Race/Ethnicity: ${race}
Nationality: ${nationality}

Religion: ${religion}
Education: ${education}

Smokes Cigarettes: ${isCigaretteSmoker}
Drinks Alcohol: ${isDrinker}
Uses Drugs: ${isDrugUser}

Wants Children: ${wantsChildren}
Has Children: ${hasChildren}
Open to Dating Someone With Children: ${openToChildren}

Hobbies: ${hobbies}
Favorite Genres: ${favorites}

About Me: ${aboutMe}`;

//Share the created profile with the end user
console.log(`Your profile has been created. You may update it later in your settings: + ${userDescription}`);

//Add user input into the array that will contain all dating app profiles
endUsers.push(userDescription);


//Example 2: Check Lifestyle preferences
//SKILL USE: Control Structures && Logic

//Ask the user preferences and convert to booleans
let cigaretteSmokerPreference = readline.question("Are you open to cigarette smokers (yes/no): ") === "yes";
let drinkerPreference = readline.question("Are you open to individuals who consume alcohol (yes/no): ") === "yes";
let drugPreference = readline.question("Are you open to drug users (yes/no): ") === "yes";


//Randomly generate lifestyle traits of fake profile
let prospectCigaretteInfo = Math.random() < 0.5;
let prospectAlcoholInfo = Math.random() < 0.5;
let prospectDrugInfo = Math.random() < 0.5;


//Create a new variable to store match results
let potentialMatch;

if (
    cigaretteSmokerPreference === prospectCigaretteInfo &&
    drinkerPreference === prospectAlcoholInfo &&
    drugPreference === prospectDrugInfo
) {
    potentialMatch = true;
    //commenting out. as it was used for testing purposes. Doesn't need to be visible to the user, should be done on the backend only. 
    //console.log("Potential Match Found!");

} else {
    potentialMatch = false;
    //commenting out. as it was used for testing purposes. Doesn't need to be visible to the user, should be done on the backend only. 
    //console.log("No Additional Prospect Found");
}


//Example 3: Adding additional dating app users to the endUser Array
//SKILL USE: Building Arrays

let user1 = `
Name: Alex Johnson
Age: 29
Sex: male
City: Chicago, Illinois

Height: 5'11"
Body Type: Athletic
Race/Ethnicity: White
Nationality: American

Religion: N/A
Education: Bachelor's Degree

Smokes Cigarettes: true
Drinks Alcohol: false
Uses Drugs: false

Wants Children: yes
Has Children: no
Open to Dating Someone With Children: yes

Hobbies: gym, hiking, movies
Favorite Genres: hip hop, action

About Me: Easygoing person who enjoys staying active and trying new things.`;

let user2 = `
Name: Maria Lopez
Age: 26
Sex: female
City: Los Angeles, California

Height: 5'5"
Body Type: Curvy
Race/Ethnicity: Hispanic
Nationality: American

Religion: Christian
Education: College Graduate

Smokes Cigarettes: false
Drinks Alcohol: false
Uses Drugs: false

Wants Children: yes
Has Children: no
Open to Dating Someone With Children: no

Hobbies: dancing, cooking, travel
Favorite Genres: latin, pop

About Me: Family-oriented and loves exploring new cultures and foods.`;

let user3 = `
Name: James Carter
Age: 34
Sex: male
City: New York, New York

Height: 6'2"
Body Type: Average
Race/Ethnicity: Black
Nationality: American

Religion: Muslim
Education: Master's Degree

Smokes Cigarettes: true
Drinks Alcohol: false
Uses Drugs: false

Wants Children: maybe
Has Children: yes
Open to Dating Someone With Children: yes

Hobbies: reading, basketball, coding
Favorite Genres: jazz, documentaries

About Me: Focused on career growth but open to meaningful relationships and hoping for a serious connection.`;

//Add new users to the array 
endUsers.push(user1,user2,user3);

//commenting out the endUser log b/c it's not needed. Used it for testing purposes only.
//console.log(endUsers);

//Example 4: Showing Profile to Individual to say Yes or No to other users.
//SKILL USE: Using Arrays, Working with Loops

//create new array to contain profiles of interest
let interestedArray = [];

//Start at index 1 to skip the current user (aka me)
for (let count = 1; count < endUsers.length; count++) {

    //Show each prospect profile
    console.log(endUsers[count]);

    //Ask if user is interested in this profile
    let interest = readline.question("Are you interested in this prospect? (yes/no): ");

    //If yes, store profile in interested list
    if (interest === "yes") {
        interestedArray.push(endUsers[count]);
    }
}

//Display final results

if (interestedArray.length !== 0){
    let feedback = `You're interested in the following user(s): ${interestedArray}`;
    //print users of interest back to the end user
    console.log(feedback);
} else{

        console.log(`We were unable to find you any match. We'll keep looking!`);
}

