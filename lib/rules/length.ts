import {LengthConstraintType} from '../password-policy.types';

function minLengthValidation (password: string, min: number) {
  return password?.length <= min;
}

function maxLengthValidation (password: string, min: number) {
  return password?.length >= min;
}

export default function check(password: string, rules: LengthConstraintType) {
  const result = [];
  if (rules?.min && minLengthValidation(password, rules?.min)) {
    result.push({
      code: 'minValidation',
      message: `Password must have more than ${rules?.min} characters`
    });
  }
  if (rules?.max && maxLengthValidation(password, rules?.max)) {
    result.push({
      code: 'minValidation',
      message: `Password should not have more than ${rules?.max} characters`
    });
  }
  return result;
}

export {
  check,
}
