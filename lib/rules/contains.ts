import {ContainsConstraintType} from "../password-policy.types";

export default function check(password: string, rule: ContainsConstraintType) {
  const result: any = [];
  if (rule?.upperCase) {
    const number = typeof rule?.upperCase === 'number' ? rule?.upperCase : 1;
    const value = password?.match(/[A-Z]/g) || [];
    if (!(value?.length >= number)) {
      result.push({
        code: 'numbers',
        message: `Password must have at least ${number} upper cases`
      });
    }
  }
  if (rule?.lowerCase) {
    const number = typeof rule?.lowerCase === 'number' ? rule?.lowerCase : 1;
    const value = password?.match(/[a-z]/g) || [];
    if (!(value?.length >= number)) {
      result.push({
        code: 'numbers',
        message: `Password must have at least ${number} lower cases`
      });
    }
  }
  if (rule?.numbers) {
    const number = typeof rule?.numbers === 'number' ? rule?.numbers : 1;
    const value = password?.match(/[0-9]/g) || [];
    if (!(value?.length >= number)) {
      result.push({
        code: 'numbers',
        message: `Password must have at least ${number} numbers`
      });
    }
  }
  if (rule?.specialCharacters) {
    const number = typeof rule?.specialCharacters === 'number' ? rule?.specialCharacters : 1;
    const value = password?.match(/[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g) || [];
    if (!(value?.length >= number)) {
      result.push({
        code: 'specialCharacters',
        message: `Password must have at least ${number} special characters`
      });
    }
  }
  return result;
}

export {
  check,
}
