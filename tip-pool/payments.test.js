describe("payments testing", function() {
    it("create payment will create payment obj", function() {
        billAmtInput.value='';
        tipAmtInput.value='';
        expect(createCurPayment()).toEqual();
    })
    
    it("create payment will create payment obj", function() {
        billAmtInput.value=100;
        tipAmtInput.value=10;
        const result = {
        billAmt: '100',
        tipAmt: '10',
        tipPercent: 10
        }
        expect(createCurPayment()).toEqual(result);
        // tear down
        billAmtInput.value='';
        tipAmtInput.value='';
    })
})