import { Blocks, WrapConverter } from './../utils/blocks';
import { CaseMap, Case } from './../models/case';

export const CASES: CaseMap = {
  [Case.LowerCamelCase]: {
    title: 'Lower camel case',
    convert: WrapConverter((text: Blocks) => {
      return text.map((v, index) => [v[0][!index ? 'toLowerCase' : 'toUpperCase'](), v.slice(1).toLowerCase()].join('')).join('')
    }),
  },
  [Case.UpperCamelCase]: {
    title: 'UpperCamelCase',
    convert: WrapConverter((text: Blocks) => text.map(v => [v[0].toUpperCase(), v.slice(1).toLowerCase()].join('')).join('')),
  },
  [Case.SnakeCase]: {
    title: 'SnakeCase',
    convert: WrapConverter((text: Blocks) => text.join('_').toLowerCase()),
  },
  [Case.CapitalSnakeCase]: {
    title: 'CapitalSnakeCase',
    convert: v => CASES[Case.SnakeCase].convert(v).toUpperCase(),
  },
};

export const AvailableCases = (Object.keys(CASES) as any as Case[])