export interface ICaseMeta {
	title: string;
	convert(text: string): string;
}

export enum Case {
	LowerCamelCase, 	// testForCasing
	UpperCamelCase, 	// TestForCasing
	SnakeCase, 			  // test_for_casing
	CapitalSnakeCase 	// TEST_FOR_CASING
}

export type CaseMap = { [k in Case]: ICaseMeta };