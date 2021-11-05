let values = {}
beforeAll( () => {
  values.amount = 1000;
  values.years = 1;
  values.rate = 10;
})

it('should calculate the monthly rate correctly', function () {
  // const values = {
  //   amount: 1000,
  //   years: 1,
  //   rate: 10,
  // }
  expect(calculateMonthlyPayment(values)).toBeCloseTo(134.99, 1)
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(values)).toEqual(135.00);
});

afterAll( () => {
  values = {};
})
