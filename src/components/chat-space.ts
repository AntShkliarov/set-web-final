import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('chat-space')
export class ChatSpace extends LitElement {
  @state()
  private messages = [
    { sender: 'system', text: 'Welcome to InFarming Plant Chat!' },
    { sender: 'system', text: 'Ask questions about your plants or get growing advice.' }
  ];
  
  @state()
  private inputValue = '';
  static styles = css`
  :host {
    display: block;
    height: 100%;
  }

  .chat-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .chat-header {
    padding-bottom: 1rem;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 1rem;
  }

  .chat-title {
    font-size: 1.25rem;
    font-weight: 500;
    color: #2e7d32;
    margin: 0;
  }

  .chat-messages {
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1rem;
    padding-right: 0.5rem;
  }

  .message {
    padding: 0.75rem 1rem;
    border-radius: 1rem;
    max-width: 80%;
    word-break: break-word;
  }

  .system-message {
    align-self: center;
    background-color: #e8f5e9;
    color: #2e7d32;
    border: 1px solid #c8e6c9;
    font-style: italic;
  }

  .user-message {
    align-self: flex-end;
    background-color: #e3f2fd;
    color: #0d47a1;
  }

  .bot-message {
    align-self: flex-start;
    background-color: #f5f5f5;
    color: #333;
  }

  .chat-input-container {
    display: flex;
    gap: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid #e0e0e0;
  }

  .chat-input {
    flex-grow: 1;
    padding: 0.75rem 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 2rem;
    font-family: inherit;
    font-size: 1rem;
    outline: none;
  }

  .chat-input:focus {
    border-color: #2e7d32;
    box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.2);
  }

  .send-button {
    background-color: #2e7d32;
    color: white;
    border: none;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .send-button:hover {
    background-color: #388e3c;
  }

  .send-button:disabled {
    background-color: #c8e6c9;
    cursor: not-allowed;
  }
`;

  private handleInput(e: InputEvent) {
    const input = e.target as HTMLInputElement;
    this.inputValue = input.value;
  }

  private handleSend() {
    if (this.inputValue.trim()) {
      this.messages = [
        ...this.messages,
        { sender: 'user', text: this.inputValue },
        { sender: 'bot', text: 'This is a placeholder response. Chat functionality will be fully implemented in future updates.' }
      ];
      this.inputValue = '';
      
      // Scroll to bottom after messages update
      setTimeout(() => {
        const messageContainer = this.shadowRoot?.querySelector('.chat-messages');
        if (messageContainer) {
          messageContainer.scrollTop = messageContainer.scrollHeight;
        }
      }, 0);
    }
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.handleSend();
    }
  }

  render() {
    return html`
      <div class="chat-container">
        <div class="chat-header">
          <h2 class="chat-title">Plant Assistant</h2>
        </div>
        <div class="chat-messages">
          ${this.messages.map(message => html`
            <div class="message ${message.sender}-message">
              ${message.text}
            </div>
          `)}
        </div>
        <div class="chat-input-container">
          <input 
            type="text" 
            class="chat-input" 
            placeholder="Ask about your plants..." 
            .value=${this.inputValue}
            @input=${this.handleInput}
            @keydown=${this.handleKeyDown}
          >
          <button 
            class="send-button" 
            ?disabled=${!this.inputValue.trim()}
            @click=${this.handleSend}
          >→</button>
        </div>
      </div>
    `;
  }
}
