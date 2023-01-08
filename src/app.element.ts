import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { Router } from '@vaadin/router';
import { router } from './index';
import { getTailwindProcessor } from './shared/tailwind.element';

import classStyle from './app.element.scss';

console.log('STYLES: ', classStyle);
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('app-element')
export class AppElement extends LitElement {
  static styles = [ getTailwindProcessor(), unsafeCSS(classStyle) ];

  homeRef = createRef<HTMLElement>();
  aboutRef = createRef<HTMLElement>();
  readerRef = createRef<HTMLElement>();
  
  @property()
  name = 'World';
  
  @property({type: Number})
  count = 0;

  constructor() {
    super();
    const observeUrlChange = () => {
      let oldHref = document.location.href;
      let body = document.querySelector("body")!;
      const observer = new MutationObserver(mutations => {
          mutations.forEach(() => {
            if (oldHref !== document.location.href) {
              oldHref = document.location.href;
              this._onUrlChanged();
            }
          });
        });
        observer.observe(body, { childList: true, subtree: true });
      };
      
      window.onload = observeUrlChange;
  }

  firstUpdated() {
    console.log('First update. Current PATHNAME: ', location.pathname);
    const re = new RegExp(/\/home/);
    if(!re.test(location.pathname)) Router.go('/home');
  }

  _onUrlChanged() {
    console.log('URL changed: ', location.pathname);
    this.requestUpdate();
  }

  _clickMenuItem(e: Event) {
    const path = (e.target as Element).getAttribute('path')!;
    const route = router.urlForPath(path);
    console.log('Go to: ', route);
    Router.go(route);
  }

  _getMenuItemClasses(path: string): string {
    let classList = "text-gray-900 dark:text-white hover:underline select-none ";

    if( path === location.pathname ) {
      classList += "underline";
    }

    return classList;
  }

  override render() {
    console.log('Render.....  path: ', location.pathname);
    return html`
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
            <div class="flex items-center">
                <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                    <li>
                        <div @click="${this._clickMenuItem}" ${ref(this.homeRef)} path="/home" class="${this._getMenuItemClasses("/home")}">Home</div>
                    </li>
                    <li>
                        <div @click="${this._clickMenuItem}" ${ref(this.aboutRef)} path="/about" class="${this._getMenuItemClasses("/about")}">About</div>
                    </li>
                    <li>
                        <div @click="${this._clickMenuItem}" ${ref(this.readerRef)} path="/reader" class="${this._getMenuItemClasses("/reader")}">Reader</div>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
      <slot></slot>
    `;
  }
}

declare global {
    interface HTMLElementTagNameMap {
      'app-element': AppElement
    }
}