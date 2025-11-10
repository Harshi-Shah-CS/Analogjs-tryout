import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <div>
      <h1>Products Page</h1>
      <p>This is the ORIGINAL products page content.</p>
      <p>You should NOT see this if rewrite works!</p>
      <a href="/">Back to Home</a>
    </div>
  `,
  styles: `
    div {
      text-align: center;
      padding: 2rem;
    }
    
    h1 {
      color: #ff6b6b;
    }
  `,
})
export default class Products {}
