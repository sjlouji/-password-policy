import PasswordPolicy from "./password-policy";

const basic = PasswordPolicy.apply({
  length: { min: 6 }
});

const enhanced = PasswordPolicy.apply({
  length: { min: 8 },
  contains: {
    lowerCase: true,
    upperCase: true,
    numbers: true,
    specialCharacters: true,
  }
});

const advanced = PasswordPolicy.apply({
  length: { min: 8 },
  contains: {
    lowerCase: 3,
    upperCase: 3,
    numbers: 3,
    specialCharacters: 3,
  }
});

const guardian = PasswordPolicy.apply({
  length: { min: 8 },
  contains: {
    lowerCase: 3,
    upperCase: 3,
    numbers: 3,
    specialCharacters: 3,
  },
  exclude: {
    uniCode: true,
    space: true,
    repeatingCharacters: 3
  }
});

const policiesByName: any = {
  basic: basic,
  enhanced: enhanced,
  advanced: advanced,
  guardian: guardian
};


export default function validate(password: string, policyName: string = policiesByName.advanced) {
  const policy = policiesByName[policyName];
  return policy.validate(password);
}
