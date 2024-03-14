const Airport = require("../../classes/Airport")

const port = new Airport("American airlines", [], "JFK")

describe("the airplane company", () => {

    test("it has a company", () => {
        expect(port.name).toBe("American airlines")
    })

    test("it has a plane code", () => {
        expect(port.airportCode).toBe("JFK")
    })

    test("has no planes", () => {
        expect(port.planes).toEqual([])
    })

    test("add planes", () => {
        port.addPlanes("Canadian Airlines")
        expect(port.planes).toEqual(["Canadian Airlines"])
    })
})