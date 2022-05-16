/******************************************************************************
 * This file was generated by langium-cli 0.2.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/
import { AstNode, AstReflection, Reference } from '../../syntax-tree';
export interface AbstractElement extends AstNode {
    readonly $container: ParserRule | Alternatives | UnorderedGroup | Group | Assignment | CrossReference | TerminalRule | TerminalAlternatives | TerminalGroup | NegatedToken | UntilToken | CharacterRange;
    cardinality: '?' | '*' | '+';
}
export declare const AbstractElement = "AbstractElement";
export declare function isAbstractElement(item: unknown): item is AbstractElement;
export interface AbstractRule extends AstNode {
    readonly $container: Grammar;
    fragment: boolean;
    name: string;
    type: string;
}
export declare const AbstractRule = "AbstractRule";
export declare function isAbstractRule(item: unknown): item is AbstractRule;
export interface Condition extends AstNode {
    readonly $container: NamedArgument | Disjunction | Conjunction | Negation;
}
export declare const Condition = "Condition";
export declare function isCondition(item: unknown): item is Condition;
export interface Grammar extends AstNode {
    definesHiddenTokens: boolean;
    hiddenTokens: Array<Reference<AbstractRule>>;
    imports: Array<GrammarImport>;
    name: string;
    rules: Array<AbstractRule>;
    usedGrammars: Array<Reference<Grammar>>;
}
export declare const Grammar = "Grammar";
export declare function isGrammar(item: unknown): item is Grammar;
export interface GrammarImport extends AstNode {
    readonly $container: Grammar;
    path: string;
}
export declare const GrammarImport = "GrammarImport";
export declare function isGrammarImport(item: unknown): item is GrammarImport;
export interface NamedArgument extends AstNode {
    readonly $container: RuleCall;
    calledByName: boolean;
    parameter?: Reference<Parameter>;
    value: Condition;
}
export declare const NamedArgument = "NamedArgument";
export declare function isNamedArgument(item: unknown): item is NamedArgument;
export interface Parameter extends AstNode {
    readonly $container: ParserRule;
    name: string;
}
export declare const Parameter = "Parameter";
export declare function isParameter(item: unknown): item is Parameter;
export interface Action extends AbstractElement {
    feature: string;
    operator: '=' | '+=';
    type: string;
}
export declare const Action = "Action";
export declare function isAction(item: unknown): item is Action;
export interface Alternatives extends AbstractElement {
    elements: Array<AbstractElement>;
}
export declare const Alternatives = "Alternatives";
export declare function isAlternatives(item: unknown): item is Alternatives;
export interface Assignment extends AbstractElement {
    feature: string;
    firstSetPredicated: boolean;
    operator: '+=' | '=' | '?=';
    predicated: boolean;
    terminal: AbstractElement;
}
export declare const Assignment = "Assignment";
export declare function isAssignment(item: unknown): item is Assignment;
export interface CharacterRange extends AbstractElement {
    left: Keyword;
    right: Keyword;
}
export declare const CharacterRange = "CharacterRange";
export declare function isCharacterRange(item: unknown): item is CharacterRange;
export interface CrossReference extends AbstractElement {
    deprecatedSyntax: boolean;
    terminal: AbstractElement;
    type: Reference<ParserRule>;
}
export declare const CrossReference = "CrossReference";
export declare function isCrossReference(item: unknown): item is CrossReference;
export interface Group extends AbstractElement {
    elements: Array<AbstractElement>;
    firstSetPredicated: boolean;
    predicated: boolean;
}
export declare const Group = "Group";
export declare function isGroup(item: unknown): item is Group;
export interface Keyword extends AbstractElement {
    firstSetPredicated: boolean;
    predicated: boolean;
    value: string;
}
export declare const Keyword = "Keyword";
export declare function isKeyword(item: unknown): item is Keyword;
export interface NegatedToken extends AbstractElement {
    terminal: AbstractElement;
}
export declare const NegatedToken = "NegatedToken";
export declare function isNegatedToken(item: unknown): item is NegatedToken;
export interface RegexToken extends AbstractElement {
    regex: string;
}
export declare const RegexToken = "RegexToken";
export declare function isRegexToken(item: unknown): item is RegexToken;
export interface RuleCall extends AbstractElement {
    arguments: Array<NamedArgument>;
    firstSetPredicated: boolean;
    predicated: boolean;
    rule: Reference<AbstractRule>;
}
export declare const RuleCall = "RuleCall";
export declare function isRuleCall(item: unknown): item is RuleCall;
export interface TerminalAlternatives extends AbstractElement {
    elements: Array<AbstractElement>;
}
export declare const TerminalAlternatives = "TerminalAlternatives";
export declare function isTerminalAlternatives(item: unknown): item is TerminalAlternatives;
export interface TerminalGroup extends AbstractElement {
    elements: Array<AbstractElement>;
}
export declare const TerminalGroup = "TerminalGroup";
export declare function isTerminalGroup(item: unknown): item is TerminalGroup;
export interface TerminalRuleCall extends AbstractElement {
    rule: Reference<TerminalRule>;
}
export declare const TerminalRuleCall = "TerminalRuleCall";
export declare function isTerminalRuleCall(item: unknown): item is TerminalRuleCall;
export interface UnorderedGroup extends AbstractElement {
    elements: Array<AbstractElement>;
}
export declare const UnorderedGroup = "UnorderedGroup";
export declare function isUnorderedGroup(item: unknown): item is UnorderedGroup;
export interface UntilToken extends AbstractElement {
    terminal: AbstractElement;
}
export declare const UntilToken = "UntilToken";
export declare function isUntilToken(item: unknown): item is UntilToken;
export interface Wildcard extends AbstractElement {
}
export declare const Wildcard = "Wildcard";
export declare function isWildcard(item: unknown): item is Wildcard;
export interface ParserRule extends AbstractRule {
    alternatives: AbstractElement;
    definesHiddenTokens: boolean;
    entry: boolean;
    hiddenTokens: Array<Reference<AbstractRule>>;
    parameters: Array<Parameter>;
    wildcard: boolean;
}
export declare const ParserRule = "ParserRule";
export declare function isParserRule(item: unknown): item is ParserRule;
export interface TerminalRule extends AbstractRule {
    hidden: boolean;
    terminal: AbstractElement;
}
export declare const TerminalRule = "TerminalRule";
export declare function isTerminalRule(item: unknown): item is TerminalRule;
export interface Conjunction extends Condition {
    left: Condition;
    right: Condition;
}
export declare const Conjunction = "Conjunction";
export declare function isConjunction(item: unknown): item is Conjunction;
export interface Disjunction extends Condition {
    left: Condition;
    right: Condition;
}
export declare const Disjunction = "Disjunction";
export declare function isDisjunction(item: unknown): item is Disjunction;
export interface LiteralCondition extends Condition {
    true: boolean;
}
export declare const LiteralCondition = "LiteralCondition";
export declare function isLiteralCondition(item: unknown): item is LiteralCondition;
export interface Negation extends Condition {
    value: Condition;
}
export declare const Negation = "Negation";
export declare function isNegation(item: unknown): item is Negation;
export interface ParameterReference extends Condition {
    parameter: Reference<Parameter>;
}
export declare const ParameterReference = "ParameterReference";
export declare function isParameterReference(item: unknown): item is ParameterReference;
export declare type LangiumGrammarAstType = 'AbstractElement' | 'AbstractRule' | 'Condition' | 'Grammar' | 'GrammarImport' | 'NamedArgument' | 'Parameter' | 'Action' | 'Alternatives' | 'Assignment' | 'CharacterRange' | 'CrossReference' | 'Group' | 'Keyword' | 'NegatedToken' | 'RegexToken' | 'RuleCall' | 'TerminalAlternatives' | 'TerminalGroup' | 'TerminalRuleCall' | 'UnorderedGroup' | 'UntilToken' | 'Wildcard' | 'ParserRule' | 'TerminalRule' | 'Conjunction' | 'Disjunction' | 'LiteralCondition' | 'Negation' | 'ParameterReference';
export declare type LangiumGrammarAstReference = 'Grammar:hiddenTokens' | 'Grammar:usedGrammars' | 'NamedArgument:parameter' | 'CrossReference:type' | 'RuleCall:rule' | 'TerminalRuleCall:rule' | 'ParserRule:hiddenTokens' | 'ParameterReference:parameter';
export declare class LangiumGrammarAstReflection implements AstReflection {
    getAllTypes(): string[];
    isInstance(node: unknown, type: string): boolean;
    isSubtype(subtype: string, supertype: string): boolean;
    getReferenceType(referenceId: LangiumGrammarAstReference): string;
}
export declare const reflection: LangiumGrammarAstReflection;
//# sourceMappingURL=ast.d.ts.map