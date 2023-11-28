import { RuleType } from './password-policy.types';
import rulesMap from './rules';

export default class PasswordPolicy {
  private _rules: RuleType = {};

  static apply(rules: RuleType) {
    PasswordPolicy.prototype._rules = rules
    return PasswordPolicy;
  }

  static getRules() {
    if (!PasswordPolicy.prototype._rules) {
      throw new Error('Invalid Input!');
    }
    return PasswordPolicy.prototype._rules;
  }

  static validate(password: string) {
    const result: any = [];
    const ruleList: RuleType= this.getRules();
    const rules: string[] = Object.keys(ruleList);
    for (let i: number = 0; i < rules?.length; i += 1) {
      const fn = rulesMap[rules[i]];
      result.push(...fn(password, ruleList[rules[i]]));
    }
    return result;
  }
}
