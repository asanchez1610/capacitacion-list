import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles, } from '@cells-components/cells-lit-helpers/cells-lit-helpers.js';
import styles from './capacitacion-list-styles.js';
/**
This component ...

Example:

```html
<capacitacion-list></capacitacion-list>
```

##styling-doc

@customElement capacitacion-list
@polymer
@LitElement
@demo demo/index.html
*/
export class CapacitacionList extends LitElement {
  static get is() {
    return 'capacitacion-list';
  }

  // Declare properties
  static get properties() {
    return {
      data: {
        type: Array
      }
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.data = [];
    this.addEventListener('load-data',(e)=>{
      this.setData(e.detail);
    });
  }

  setData(data) {
    this.data = data;
    this.requestUpdate();
  }

  static get shadyStyles() {
    return `
      ${styles.cssText}
      ${getComponentSharedStyles('capacitacion-list-shared-styles').cssText}
    `;
  }

  // Define a template
  render() {
    return html`
      <style>${this.constructor.shadyStyles}</style>
      <slot></slot>
      <table>
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Dni</th>
              <th>Telefono</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            ${this.data.map(
              (item) =>
                html`
                  <tr>
                    <td>${item.nombres}</td>
                    <td>${item.apellidos}Apellidos</td>
                    <td>${item.dni}Dni</td>
                    <td>${item.telefono}Telefono</td>
                    <td>${item.email}Email</td>
                </tr>
                `
            )}
          </tbody>
        </table>
    `;
  }
}

// Register the element with the browser
customElements.define(CapacitacionList.is, CapacitacionList);
