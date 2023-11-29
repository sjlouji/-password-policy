export type LengthConstraintType = {
  min?: number;
  max?: number;
}

export type ContainsConstraintType = {
  lowerCase?: boolean | number;
  upperCase?: boolean | number;
  numbers?: boolean | number;
  specialCharacters?: boolean | number;
}

export type Rules = 'length' | 'contains';

export type RuleType = {
  [key in Rules]?: LengthConstraintType | ContainsConstraintType;
};
