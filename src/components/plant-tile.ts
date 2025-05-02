import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { IPlant } from '../types/plant';

@customElement('plant-tile')
export class PlantTile extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .plant-tile {
      height: 320px;
      perspective: 1000px;
      cursor: pointer;
    }

    .tile-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      border-radius: 8px;
      overflow: hidden;
    }

    .flipped .tile-inner {
      transform: rotateY(180deg);
    }

    .tile-front, .tile-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      background-color: white;
    }

    .tile-back {
      transform: rotateY(180deg);
      padding: 1rem;
      overflow-y: auto;
    }

    .plant-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      background-color: #f0f0f0;
    }

    .plant-image.placeholder {
      object-fit: contain;
      padding: 1rem;
      background-color: #e8f5e9;
    }

    .plant-info {
      padding: 1rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .plant-name {
      margin: 0 0 0.5rem;
      font-size: 1.25rem;
    }

    .environment-tags {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    .tag {
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .tag-indoor {
      background-color: #e3f2fd;
      color: #1976d2;
    }

    .tag-outdoor {
      background-color: #e8f5e9;
      color: #388e3c;
    }

    .instructions-title {
      font-size: 1rem;
      margin: 1rem 0 0.5rem;
      font-weight: 500;
    }
  `;

  @property({ type: Object })
  plant!: IPlant;

  @state()
  private flipped = false;

  @state()
  private imageError = false;

  private placeholderImagePath = '/src/assets/images/plant-placeholder.svg';

  private toggleFlip() {
    this.flipped = !this.flipped;
  }

  private handleImageError() {
    this.imageError = true;
  }

  render() {
    return html`
      <div class="plant-tile ${this.flipped ? 'flipped' : ''}" @click=${this.toggleFlip}>
        <div class="tile-inner">
          <div class="tile-front">
            <img 
              class="plant-image ${this.imageError ? 'placeholder' : ''}" 
              src="${this.imageError ? this.placeholderImagePath : this.plant.imageUrl}" 
              alt="${this.plant.name}"
              @error=${this.handleImageError}
            >
            <div class="plant-info">
              <h3 class="plant-name">${this.plant.name}</h3>
              <div class="environment-tags">
                ${this.plant.environment.indoor ? html`<span class="tag tag-indoor">Indoor</span>` : ''}
                ${this.plant.environment.outdoor ? html`<span class="tag tag-outdoor">Outdoor</span>` : ''}
              </div>
            </div>
          </div>
          <div class="tile-back">
            <h3 class="plant-name">${this.plant.name}</h3>
            <p>${this.plant.description}</p>
            <h4 class="instructions-title">How to Grow:</h4>
            <p>${this.plant.growingInstructions}</p>
          </div>
        </div>
      </div>
    `;
  }
}
