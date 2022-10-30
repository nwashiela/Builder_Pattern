"use strict";
class trainTrip {
    constructor(options) {
        this.train = options;
    }
    changeFromDate(newDate) {
        this.train.fromDate = newDate;
        return this;
    }
    changeToDate(newDate) {
        this.train.toDate = newDate;
        return this;
    }
    changeFrom(newFrom) {
        this.train.from = newFrom;
        return this;
    }
    changeTo(newTo) {
        this.train.to = newTo;
        return this;
    }
    changeClass(newClass) {
        this.train.class = newClass;
        return this;
    }
}
const trip = new trainTrip({
    from: 'capeTown',
    to: 'George',
    fromDate: new Date(),
    toDate: new Date(30 / 10 / 2022),
    class: 'firstClass'
});
trip.changeClass("secondClass").changeFrom('bellvile').changeTo('Woster');
console.log({ trip });
