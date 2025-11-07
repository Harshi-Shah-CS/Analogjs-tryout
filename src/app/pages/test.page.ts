import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h1>Test Page</h1>
      <p>If you see this content, the rewrite is working!</p>
      <p>URL should show: /products</p>
      <p>Content from: /test</p>
      <a href="/">Back to Home</a>
    </div>
  `,
  styles: `
    div {
      text-align: center;
      padding: 2rem;
    }
    
    h1 {
      color: #646cff;
    }
  `,
})
export default class Test {}

