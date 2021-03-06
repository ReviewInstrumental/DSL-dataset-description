/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/
import { CancellationToken, FoldingRange, FoldingRangeParams } from 'vscode-languageserver';
import { LangiumServices } from '../services';
import { AstNode, CstNode } from '../syntax-tree';
import { MaybePromise } from '../utils/promise-util';
import { LangiumDocument } from '../workspace/documents';
export interface FoldingRangeProvider {
    /**
     * Handle a folding range request.
     *
     * @throws `OperationCancelled` if cancellation is detected during execution
     * @throws `ResponseError` if an error is detected that should be sent as response to the client
     */
    getFoldingRanges(document: LangiumDocument, params: FoldingRangeParams, cancelToken?: CancellationToken): MaybePromise<FoldingRange[]>;
}
export declare type FoldingRangeAcceptor = (foldingRange: FoldingRange) => void;
export declare class DefaultFoldingRangeProvider implements FoldingRangeProvider {
    protected readonly commentNames: string[];
    constructor(services: LangiumServices);
    getFoldingRanges(document: LangiumDocument): MaybePromise<FoldingRange[]>;
    protected collectFolding(document: LangiumDocument, acceptor: FoldingRangeAcceptor): void;
    /**
     * Template method to determine whether the specified `AstNode` should be handled by the folding range provider.
     * Returns true by default for all nodes. Returning false only ignores the specified node and not its content.
     * To ignore the content of a node use `shouldProcessContent`.
     */
    protected shouldProcess(node: AstNode): boolean;
    /**
     * Template method to determine whether the content/children of the specified `AstNode` should be handled by the folding range provider.
     * Returns true by default for all nodes. Returning false ignores _all_ content of this node, even transitive ones.
     * For more precise control over foldings use the `shouldProcess` method.
     */
    protected shouldProcessContent(node: AstNode): boolean;
    protected collectObjectFolding(document: LangiumDocument, node: AstNode, acceptor: FoldingRangeAcceptor): void;
    protected collectCommentFolding(document: LangiumDocument, node: AstNode, acceptor: FoldingRangeAcceptor): void;
    protected toFoldingRange(document: LangiumDocument, node: CstNode, kind?: string): FoldingRange | undefined;
    /**
     * Template method to determine whether the folding range for this cst node should include its last line.
     * Returns false by default for ast nodes which end in braces and for comments.
     */
    protected includeLastFoldingLine(node: CstNode, kind?: string): boolean;
}
//# sourceMappingURL=folding-range-provider.d.ts.map