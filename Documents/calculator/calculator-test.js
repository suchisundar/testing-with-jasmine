describe('Loan Calculator', function () {

  it('should calculate the monthly rate correctly', function() {
    const values = {
      amount: 15000,
      years: 10,
      rate: 6.2
    };
    expect(parseFloat(calculateMonthlyPayment(values))).toBeCloseTo(168.04, 2);
  });

  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 12000,
      years: 5,
      rate: 4.3
    };
    expect(parseFloat(calculateMonthlyPayment(values))).toBeCloseTo(222.63, 2);
  });

  it("should handle terribly high interest rates", function() {
    const values = {
      amount: 15000,
      years: 5,
      rate: 99
    };
    expect(parseFloat(calculateMonthlyPayment(values))).toBeCloseTo(1248.23, 2);
  });

  it('should handle zero values', function() {
    const values = { amount: 0, years: 0, rate: 0 };
    expect(calculateMonthlyPayment(values)).toBe('NaN');
  });
  

  it('should handle large loan amounts', function() {
    const values = { amount: 800000, years: 30, rate: 6 };
    expect(parseFloat(calculateMonthlyPayment(values))).toBeCloseTo(4796.4);
  });

});
