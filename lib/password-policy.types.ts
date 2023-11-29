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

export type ExcludeConstraintType = {
  space?: boolean;
  uniCode?: boolean;
  repeatingCharacters?: boolean | number;
  sequenceCharacters?: boolean | number;
  words?: string [];
}

export type Rules = 'length' | 'contains' | 'exclude';

export type RuleType = {
  [key in Rules]?: LengthConstraintType | ContainsConstraintType | ExcludeConstraintType;
};
