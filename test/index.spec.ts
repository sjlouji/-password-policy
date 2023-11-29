import PasswordPolicy from "../lib";
describe('createPolicy', function () {
  it('should support empty and undefined policies', function () {
    const password = PasswordPolicy.apply({ exclude: { words: ['password', 'louji'] } });
    console.log(password.validate('@10louji'));
  });
});
