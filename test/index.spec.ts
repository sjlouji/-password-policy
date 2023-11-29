import PasswordPolicy from "../lib";
describe('createPolicy', function () {
  it('should support empty and undefined policies', function () {
    const password = PasswordPolicy.apply({ contains: { lowerCase: 2, upperCase: 1, numbers: 2 } });
    console.log(password.validate('LOUJIas12'));
  });
});
