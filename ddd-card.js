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
    this.image = "https://psu-gatsby-files-prod.s3.amazonaws.com/s3fs-public/styles/16_9_1000w/public/picture-24286-1416511085.jpg?h=1f82f633&itok=b2xWVSQg";
    this.href = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      name: { type: String },
      image: { type : String },
      href: { type : String }
      //description: { type : String }
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
        margin: var(--ddd-spacing-3);
        padding: 0;
      }
      .wrapper {
        margin: 0 auto;
        height: 100%;
        min-height: 490px;
        width: 310px;
        border-radius: var(--ddd-spacing-3);
        background-color: white;
        display: flex;
        flex-direction: column;
        word-wrap: break-word;
        box-sizing: border-box;
        box-shadow: 0px 4px 8px 0px #00032120;
      }
      .image {
        object-fit: cover; 
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        width: 100%;
        height: auto;
        max-height: 205px;
        aspect-ratio: 3/2;
        border-bottom: 12px solid var(--ddd-theme-default-nittanyNavy);
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
        color: var(--ddd-theme-default-nittanyNavy);
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
        font-family: Arial, Tahoma, sans-serif;
        line-height: var(--ddd-lh-150);
        font-size: 18px;
      }
      .explore {
        padding: var(--ddd-spacing-3);
        background-color: var(--ddd-theme-default-beaverBlue);
        color: white;
        font-size: 16px;
        width: 100%;
        margin-top: auto;
        border: 2px;
        transition: background-color 0.3s ease;
        border-radius: 4px;
      }
      .explore:hover{
        background-color: var(--ddd-theme-default-nittanyNavy);
      }
      @media (max-width: 768px) {
        .wrapper {
          min-height: 350px;
          max-width: 350px;
        }
        .header {
          font-size: 20px;
        }
        .image {
          height: 150px;
        }
      }
      @media (max-width: 480px) {
        .wrapper {
          max-width: 100%;
          min-height: 300px;
        }
        .explore {
          font-size: 14px;
        }
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