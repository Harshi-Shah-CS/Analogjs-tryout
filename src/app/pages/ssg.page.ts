import { Component } from '@angular/core';

@Component({
  selector: 'app-ssg',
  template: `
    <div class="ssg-container">
      <h1>gemini3.png</h1>
      <img src="/images/gemini3.png" alt="gemini3.png" />
      <a href="/">← Back to Home</a>
    </div>
  `,
  styles: `
    .ssg-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 2rem;
      text-align: center;
    }

    h1 {
      margin-bottom: 2rem;
    }

    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 2rem;
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
export default class SSG {}

