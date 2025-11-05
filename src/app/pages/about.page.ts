import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="about-container">
      <h1>About Page</h1>
      <p>This is a statically generated page!</p>
      <p>This page was prerendered at build time using Static Site Generation (SSG).</p>
      <a href="/">← Back to Home</a>
    </div>
  `,
  styles: `
    .about-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 2rem;
      text-align: center;
    }

    h1 {
      margin-bottom: 1rem;
    }

    p {
      margin: 0.5rem 0;
    }

    a {
      margin-top: 2rem;
      color: #646cff;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  `,
})
export default class About {}

