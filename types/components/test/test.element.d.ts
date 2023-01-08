import { LitElement } from "lit";
export declare class TestElement extends LitElement {
    static styles: import("lit").CSSResult[];
    hasLoaded: boolean;
    constructor();
    getArticle(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'test-element': TestElement;
    }
}
