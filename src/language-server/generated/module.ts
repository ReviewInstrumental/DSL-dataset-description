/******************************************************************************
 * This file was generated by langium-cli 0.2.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { LangiumGeneratedServices, LangiumGeneratedSharedServices, LangiumSharedServices, LangiumServices, LanguageMetaData, Module, IParserConfig } from 'langium';
import { datasetDescriptorAstReflection } from './ast';
import { DatasetDescriptorGrammar } from './grammar';

export const DatasetDescriptorLanguageMetaData: LanguageMetaData = {
    languageId: 'datasetdescriptor',
    fileExtensions: ['.datadesc'],
    caseInsensitive: false
};

export const parserConfig: IParserConfig = {
    recoveryEnabled: true,
    nodeLocationTracking: 'full',
    maxLookahead: 3,
};

export const datasetDescriptorGeneratedSharedModule: Module<LangiumSharedServices, LangiumGeneratedSharedServices> = {
    AstReflection: () => new datasetDescriptorAstReflection()
};

export const DatasetDescriptorGeneratedModule: Module<LangiumServices, LangiumGeneratedServices> = {
    Grammar: () => DatasetDescriptorGrammar(),
    LanguageMetaData: () => DatasetDescriptorLanguageMetaData,
    parser: {
        ParserConfig: () => parserConfig
    }
};