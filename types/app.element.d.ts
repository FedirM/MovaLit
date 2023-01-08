import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class AppElement extends LitElement {
    static styles: import("lit").CSSResult[];
    homeRef: import("lit-html/directives/ref").Ref<HTMLElement>;
    aboutRef: import("lit-html/directives/ref").Ref<HTMLElement>;
    readerRef: import("lit-html/directives/ref").Ref<HTMLElement>;
    name: string;
    count: number;
    constructor();
    firstUpdated(): void;
    _onUrlChanged(): void;
    _clickMenuItem(e: Event): void;
    _getMenuItemClasses(path: string): string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-element': AppElement;
    }
}
