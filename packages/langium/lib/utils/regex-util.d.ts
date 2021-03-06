/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/
export declare function getTerminalParts(regex: RegExp | string): Array<{
    start: string;
    end: string;
}>;
export declare function isMultilineComment(regex: RegExp | string): boolean;
export declare function escapeRegExp(value: string): string;
export declare function getCaseInsensitivePattern(keyword: string): string;
/**
 * Determines whether the given input has a partial match with the specified regex.
 * @param regex The regex to partially match against
 * @param input The input string
 * @returns Whether any match exists.
 */
export declare function partialMatches(regex: RegExp | string, input: string): boolean;
/**
 * Builds a partial regex from the input regex. A partial regex is able to match incomplete input strings. E.g.
 * a partial regex constructed from `/ab/` is able to match the string `a` without needing a following `b` character. However it won't match `b` alone.
 * @param regex The input regex to be converted.
 * @returns A partial regex constructed from the input regex.
 */
export declare function partialRegex(regex: RegExp | string): RegExp;
//# sourceMappingURL=regex-util.d.ts.map