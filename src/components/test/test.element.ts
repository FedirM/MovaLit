import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { getTailwindProcessor } from "../../shared/tailwind.element";

import classStyle from './test.element.scss?inline';



@customElement('test-element')
export class TestElement extends LitElement {

    static styles = [ getTailwindProcessor(), unsafeCSS(classStyle) ];

    @property({type: Boolean})
    hasLoaded = false;

    constructor() {
        super();
        setTimeout(() => {
            this.hasLoaded = true;
        }, 2000);
    }

    getArticle() {
        const article = html`
            <article class="forecast">
                <h1>MOVA CLUB project</h1>
                <article class="day-forecast">
                    <h2>03 March 2018</h2>
                    <p>Project MOVA.CLUB started....</p>
                </article>
                <article class="day-forecast">
                    <h2>04 March 2018</h2>
                    <p>Planned first projects</p>
                </article>
                <article class="day-forecast">
                    <h2>05 March 2018</h2>
                    <p>Rest =)</p>
                </article>
            </article>
        `;

        const skeleton = html`
            <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    <svg class="w-12 h-12 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                </div>
                <div class="w-full">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span class="sr-only">Loading...</span>
            </div>
        `;

        return this.hasLoaded ? article : skeleton;
    }


    render() {
        return this.getArticle();
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'test-element': TestElement
    }
}