import {LitElement, html} from 'lit';
import { customElement } from "lit/decorators.js";

@customElement('home-element')
export class HomeElement extends LitElement {
    render() {
        return html`
            <h3>Home element</h3>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'home-element': HomeElement
    }
}