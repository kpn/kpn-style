import { LitElement, html } from 'lit-element';

class KpnButton extends LitElement {

  static get properties() {
    return {
      foo: { type: String }
    };
  }

  /**
   * Implement `render` to define a template for your element.
   */
  render(){
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`
      <p>${this.foo}</p>
    `;
  }
}

customElements.define('kpn-button', KpnButton);

export default KpnButton;
