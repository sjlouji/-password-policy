export type LengthConstraintType = {
  min?: number;
  max?: number;
}

export type RuleType = {
  [key: string]: LengthConstraintType;
};
