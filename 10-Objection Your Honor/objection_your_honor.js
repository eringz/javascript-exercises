//CREATE A PARENT PERSON
class Person
{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

//CREATE AN INSTANCE PROSECUTOR FROM PERSON 
class Prosecutor extends Person
{
    constructor(name,age){
        super(name,age);
    }

    /*
        METHOD THAT SPECIFY THE FOLLOWING:

        SETTING THE CASE OF DEFENDANT FROM A CASE CLASS
        RETURNING A RELEASE DATE FOR GUILTY
        SET THE AGE LIMIT FROM EACH CASE TO DETERMINE THE VERDICTION OF A DEFENDANT IN TRIAL

    */
    prosecute(defendant, trial_case){
        defendant.case = trial_case.title;  
        this.release_date = trial_case.computeReleaseDate();
        this.convict_age = trial_case.ageLimit;
        return this;      
    }
}

//CREATE AN INSTANCE DEFENDANT FROM PERSON
class Defendant extends Person
{
    constructor(name, age){
        super(name, age);
        this.case = "";
    }
}

//CREATE A CLASS CASE WITH DEFAULT TITLE, IMPRISONMENT TERM AND AGELIMIT
class Case
{
    constructor(title, years, months, days, minAge, maxAge){
        this.title = title;
        this.imprisonmentTerm = {months, days, years,};
        this.ageLimit = {minAge, maxAge};
    }

    //COMPUTE THE RELEASE DATE (DATE TODAY + IMPRISONMENT TERM) OF DEFENDANT WHEN GUILTY
    computeReleaseDate(){
        
        //DETERMINE THE DATE OF RELEASE
        const today = new Date();
        let release_date = new Date(
            today.getFullYear() + this.imprisonmentTerm.years,
            today.getMonth() + this.imprisonmentTerm.months,
            today.getDate() + this.imprisonmentTerm.days
        );

        //RETURNING CALCULATION OF RELEASE DATE TO ITS CORRESPONDING FORMAT
        return release_date.toLocaleString('en-US',{
            month: 'long',
            day: 'numeric',
            year: 'numeric' 
        });
    }
}

//CREATING A CLASS REGARDING WHAT ARE NEEDED IN TRIAL COURT
class TrialCourt
{

    //INITIATE TRIAL
    static initiateTrial(defendant, prosecutor){
        if(defendant.age < prosecutor.convict_age.minAge || defendant.age > prosecutor.convict_age.maxAge){
            console.log(
                "Name:", defendant.name,"\n"+
                "Age:", defendant.age, "\n"+
                "Case Title:", defendant.case, "\n"+
                "Filed by:", prosecutor.name, "\n"+
                "Verdict: " + this.verdict(defendant),"\n"
            );
        }else{
            console.log(
                "Name:", defendant.name,"\n"+
                "Age:", defendant.age, "\n"+
                "Case Title:", defendant.case, "\n"+
                "Filed by:", prosecutor.name, "\n"+
                "Verdict: " + this.verdict(defendant),"\n"+
                "Release date: "+ prosecutor.release_date, "\n"
            );
        }
    }

    //DETERMINE IF THE DEFENDANT IS GUILTY OR NOT
    static verdict(defendant){
        if(defendant.age < 18 || defendant.age > 75){
            return "NOT GUILTY";
        }
        return "GUILTY";
    }
}

//FIRST TRIAL UNDERAGED DEFENDANT
let case1  = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
let prosecutor = new Prosecutor ("John", 30);
let defendant1 = new Defendant ("Girlie", 5);
prosecutor.prosecute(defendant1, case1);
TrialCourt.initiateTrial(defendant1, prosecutor);

//SECOND TRIAL 
let defendant2 = new Defendant("Onel", 25);
prosecutor.prosecute(defendant2, case1);
TrialCourt.initiateTrial(defendant2, prosecutor);






