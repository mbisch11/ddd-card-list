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
    this.href = "";
    this.description = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      name: { type: String },
      image: { type : String },
      href: { type : String },
      description: { type : String }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: inline-block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper:hover{
        box-shadow: 5px 5px 5px darkgrey;
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        height: 525px;
        max-width: 415px;
        border-radius: 12px;
        background-color: white;
        display: flex;
        flex-direction: column;
      }
      .image {
        object-fit: cover; 
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        width: 100%;
        height: 150px;
        border-bottom: 12px solid navy;
      }
      .content {
        padding-left: var(--ddd-spacing-4);
        padding-right: var(--ddd-spacing-4);
        padding-top: var(--ddd-spacing-4);
        padding-bottom: var(--ddd-spacing-5);
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }
      .header {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-m));
        font-size: 24px;
        font-weight: 700;
        color: navy;
        margin: 0px;
      }
      .description-container {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        margin-top: var(--ddd-spacing-2);
        margin-bottom: var(--ddd-spacing-4);
      }
      .description {
        flex-grow: 1;
        color: black;
        margin: 0;
        padding: 0;
      }
      .explore {
        padding: var(--ddd-spacing-3);
        background-color: navy;
        color: white;
        font-size: 16px;
        width: 100%;
        margin-top: auto;
        border: 2px;
        transition: background-color 0.3s ease;
        border-radius: 4px;
      }
      .explore:hover{
        background-color: #080a4d;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <img class="image" src='${this.image}'>
  <div class="content">
    <h2 class="header">${this.name}</h2>
    <div class="description-container">
      <slot class="description"></slot>
    </div>
    <a href="${this.href}" target="_blank"><button class="explore">Explore ></button></a>
  </div> 
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