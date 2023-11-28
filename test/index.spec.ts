import PasswordPolicy from "../lib";
describe('createPolicy', function () {
  it('should support empty and undefined policies', function () {
    const password = PasswordPolicy.apply({ length: { min: 5 } });
    console.log(password.validate('1'));
  });
});
