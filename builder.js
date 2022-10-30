var trainTrip = /** @class */ (function () {
    function trainTrip(options) {
        this.train = options;
    }
    trainTrip.prototype.changeFromDate = function (newDate) {
        this.train.fromDate = newDate;
        return this;
    };
    trainTrip.prototype.changeToDate = function (newDate) {
        this.train.toDate = newDate;
        return this;
    };
    trainTrip.prototype.changeFrom = function (newFrom) {
        this.train.from = newFrom;
        return this;
    };
    trainTrip.prototype.changeTo = function (newTo) {
        this.train.to = newTo;
        return this;
    };
    trainTrip.prototype.changeClass = function (newClass) {
        this.train["class"] = newClass;
        return this;
    };
    return trainTrip;
}());
var trip = new trainTrip({
    from: 'capeTown',
    to: 'George',
    fromDate: new Date(),
    toDate: new Date(30 / 10 / 2022),
    "class": 'firstClass'
});
trip.changeClass("secondClass").changeFrom('bellvile').changeTo('Woster');
console.log({ trip: trip });
