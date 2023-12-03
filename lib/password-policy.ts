import { Rules, RuleType } from './type';
import rulesMap from './rules';

export default class PasswordPolicy {
  private _rules: RuleType = {};

  static apply(rules: RuleType) {
    PasswordPolicy.prototype._rules = rules;
    const ruleList: Rules[] = Object.keys(rules) as Rules[];

    ruleList.reduce((_acc: any, _itr: Rules) => {
      const fn = rulesMap[_itr];
      fn.validateRule(rules[_itr]);
      return _acc;
    }, []);

    return PasswordPolicy;
  }

  static getRules() {
    if (!PasswordPolicy.prototype._rules) {
      throw new Error('Invalid Input!');
    }
    return PasswordPolicy.prototype._rules;
  }

  static validate(password: string) {
    const ruleList: RuleType = this.getRules();
    const rules: Rules[] = Object.keys(ruleList) as Rules[];

    return rules.reduce((_acc: any, _itr: Rules) => {
      const fn = rulesMap[_itr];
      _acc.push(...fn.check(password, ruleList[_itr]));
      return _acc;
    }, []);
  }
}
