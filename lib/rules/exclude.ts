import {ExcludeConstraintType} from "../type";
import {isEmpty} from "../util/object";

export default function check(password: string, rule: ExcludeConstraintType) {
  const result: any = [];
  if (rule?.uniCode) {
    const asciiRegex = /^[\x00-\x7F]+$/;
    const value = password?.match(asciiRegex) || [];
    if (value?.length) {
      result.push({
        code: 'uniCode',
        message: `Password must not have at UniCode`
      });
    }
  }
  if (rule?.space) {
    const spaceRegex = /\s/;
    const value = password?.match(spaceRegex) || [];
    if (value?.length) {
      result.push({
        code: 'space',
        message: `Password must not have at Space`
      });
    }
  }
  if (rule?.sequenceCharacters) {
    const number = typeof rule?.sequenceCharacters === 'number' ? rule?.sequenceCharacters : 3;
    const regexString = `(.)\\1{${number - 1},}`;
    const value = password?.match(regexString) || [];
    if (value?.length) {
      result.push({
        code: 'repeatingCharacters',
        message: `Password must not have ${number} repeating characters`
      });
    }
  }
  if (rule?.words?.length && rule.words?.some(word => password?.toLowerCase().includes(word.toLowerCase()))) {
    result.push({
      code: 'repeatingCharacters',
      message: `Password can not contain excluded words`
    });
  }
  return result;
}

function validateRule(ruleOptions: ExcludeConstraintType) {
  if (isEmpty(ruleOptions)) {
    throw new Error('Exclude can not accepts empty options');
  }
}

export {
  check,
  validateRule,
};
