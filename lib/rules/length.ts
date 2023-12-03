import {LengthConstraintType} from '../type';
import {isEmpty} from "../util/object";

function minLengthValidation (password: string, min: number) {
  return password?.length <= min;
}

function maxLengthValidation (password: string, min: number) {
  return password?.length >= min;
}

function validateRule(ruleOptions: LengthConstraintType) {
  if (isEmpty(ruleOptions)) {
    throw new Error('Length can not accepts empty options');
  }
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
  validateRule,
  check
}
