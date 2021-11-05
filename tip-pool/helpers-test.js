describe("testing helper functions", function () {
    it("convert bill and tip to tip percent", function() {
        expect(calculateTipPercent(100, 10)).toEqual(10);
    })
})

