type trainTripClass = 'firstClass'|'secondClass';

interface trainOptions {
    class: trainTripClass
    fromDate: Date;
    toDate: Date;
    from: string;  
    to: string;
}

class trainTrip{
    private train: trainOptions;
    
    constructor(options: trainOptions){
         this.train = options
    }

    changeFromDate(newDate: trainOptions['fromDate']){
        this.train.fromDate = newDate;
        return this;
    }
    changeToDate(newDate: trainOptions['toDate']){
        this.train.toDate = newDate;
        return this;
    }
    changeFrom(newFrom: trainOptions['from']){
        this.train.from = newFrom;
        return this;
    }
    changeTo(newTo: trainOptions['to']){
        this.train.to = newTo;
        return this;
    }
    changeClass(newClass: trainOptions['class']){
        this.train.class = newClass;
        return this;
    }
}

const trip = new trainTrip({
    from: 'capeTown',
    to:'George',
    fromDate: new Date(),
    toDate: new Date(30/10/2022),
    class: 'firstClass'
})

trip.changeClass("secondClass").changeFrom('bellvile').changeTo('Woster')

console.log({trip})


// tsc filename.ts
// node filename.ts  works to run the code