class Airport {
    airportCode;
    constructor(name, planes = [], airportCode) {
        this.name = name;
        this.planes = planes
        this.airportCode = airportCode;
    }
    getPlanes() {
        return this.planes;
    }
    addPlanes(plane) {
        this.planes.push(plane);
    }
}


module.exports = Airport;