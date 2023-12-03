import {validate} from "../lib";
describe('createPolicy', function () {
  it('should support empty and undefined policies', function () {
    const password = validate('hello world', 'basic');
    console.log(password)
  });
});
