import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { plantData } from '../data/plants';
import './plant-tile';
import './chat-space';

@customElement('main-app')
export class MainApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100vh;
      width: 100%;
    }

    .app-container {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .plants-container {
      flex: 2;
      padding: 1rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      grid-gap: 1.5rem;
      overflow-y: auto;
      background-color: #f8f9fa;
    }

    .chat-container {
      flex: 1;
      background-color: #ffffff;
      border-left: 1px solid #e0e0e0;
      box-shadow: -2px 0 10px rgba(0, 0, 0, 0.05);
      overflow-y: auto;
    }

    @media (max-width: 768px) {
      .app-container {
        flex-direction: column;
      }

      .plants-container {
        flex: 1;
        height: 60vh;
      }

      .chat-container {
        flex: 1;
        height: 40vh;
        border-left: none;
        border-top: 1px solid #e0e0e0;
      }
    }
  `;

  render() {
    return html`
      <div class="app-container">
        <div class="plants-container">
          ${plantData.map(plant => html`
            <plant-tile .plant=${plant}></plant-tile>
          `)}
        </div>
        <div class="chat-container">
          <chat-space></chat-space>
        </div>
      </div>
    `;
  }
}
