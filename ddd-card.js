/**
 * Copyright 2025 mbisch11
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCard extends DDDSuper((LitElement)) {

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.name = "";
    this.image = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      name: { type: String },
      image: { type : String }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
      }
      ::slotted(span){
        font-size: 10px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <img class="image" src='${this.image}'>
  <hr class="divider">
  <h3 class="header">${this.name}</h3>
  <p class="description"></p>
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);