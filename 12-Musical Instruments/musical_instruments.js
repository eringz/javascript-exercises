//Create a Note class. A note should have the following functionality:
class Note
{
    /*
        Each Note should have a name list ("do", "re", "mi", "fa", "sol", "la", "ti")
        Each Note should have a name (ex. "re")
        Each Note should have a pitch (min 1, max 7)
    */
     constructor(name, pitch){
        this.name_list = ['do', 're', 'mi', 'fa', 'so', 'la', 'ti'];
        this.name = name;
        this.pitch_range = {min: 1, max: 7};
        this.pitch = pitch;

    }
    
    //Each Note should have a show method (log the note's information to the console)
    show(){
        console.log(this.name +'('+this.pitch+')');
        console.log(this.pitch_range.max);
    }
}


//Create an Instrument class. An instrument should have the following functionality:
class Instrument
{
    //The Instrument must have collection to store the Note instances (ex. record variable).
    constructor(){
        this.record = [];
    }

    //The Instrument should be able to add one Note instance in the last part of record. Example: addNote("mi", "4")
    addNote(note){
        this.record.push(note.name + '('+note.pitch+')');
    }

    //The Instrument should be able to remove last note in the record by removeLastNote()
    removeLastNote(){
        this.record.pop();
    }

    /*
        The Instrument should let user to change specific note in the record. 
        For example, instrumentA.changeNote(2, "re", 5) should change the second to "re" with pitch 5.
    */
    changeNote(index, name, pitch){
        this.record[index - 1] = name + '('+pitch+')'

    }

    //The Instrument should be able to shuffle the recorded notes using shuffleRecord().
    shuffleRecord(){
        let size = this.record.length,current, remaining;
        while(size){
            remaining = Math.floor(Math.random() * size--);

            current = this.record[size];
            this.record[size] = this.record[remaining];
            this.record[remaining] = current;
        }
        
    }

    /*
        The Instrument should be able to auto-compose and record it. 
        Any existing record values should be reset before auto-compose. 
        The number of generated notes depends on the user's want. 
        (In other words, the record should create x number of instances of class Note using autoCompose(num))
    */
    autoCompose(num){
        let note = new Note();
        for(let i = 0; i < num; i++){
            let auto_note = note.name_list[Math.floor(Math.random() * note.name_list.length)];
            let auto_pitch = Math.floor(Math.random() * note.pitch_range.max) ; 
            this.record.push(auto_note + '('+auto_pitch+')');
        }
    }

    //The Instrument should be able to log the recorded notes.
    log(){
        console.log(this.record);
    }

}

/*
    Create Piano, Guitar classes. Do the following functionality for each:

    Can have attributes such as brand, model, color.
    (Optional) Can play each note one at a time with real sound.
    Feel free to explore this OOP assignment. Make sure you comment your spent hours on this.

*/
class Piano extends Instrument
{
    constructor(brand,model,color){
        super();
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
}

class Guitar extends Instrument
{
    constructor(brand,model,color){
        super();
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
}


// let note1 = new Note("do", 1);
// let note2 = new Note("re", 2);
// let note3 = new Note("mi", 3);
// let note4 = new Note("fa", 4);
// let note5 = new Note("so", 5);
// let note6 = new Note("la", 6);

// note1.show();
// let instrument = new Instrument();

// instrument.addNote(note1);
// console.log(instrument.record);

// instrument.addNote(note2);
// console.log(instrument.record);

// instrument.addNote(note3);
// console.log(instrument.record);

// instrument.addNote(note4);
// console.log(instrument.record);

// instrument.addNote(note5);
// console.log(instrument.record);

// instrument.addNote(note6);
// console.log(instrument.record);

// // instrument.changeNote(2,'la', 8);
// // console.log(instrument.record);

// instrument.shuffleRecord()
// console.log("shuffled",instrument.record);

// instrument.autoCompose(10);
// instrument.log();


// let piano = new Piano('Brand New','Digital 88 Keys Grand Piano', 'black');
// piano.autoCompose(5);
// piano.log();

let guitar = new Guitar('Epiphone','EAPCANCH1 PRO-1', 'red');
guitar.autoCompose(60);
guitar.log()

