import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  randomNum?: number;
}

@Component({
  selector: 'app-shuffle-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="shuffle-container">
      <h1>Random Product</h1>
      
      @if (loading) {
        <p>Loading product...</p>
      } @else if (product) {
        <div class="product-card">
          <img [src]="product.image" [alt]="product.title" class="product-image" />
          <h2>{{ product.title }}</h2>
          <div class="product-details">
            <p><strong>Category:</strong> {{ product.category }}</p>
            <p><strong>Price:</strong> {{ formatPrice(product.price) }}</p>
            <p><strong>Description:</strong> {{ product.description }}</p>
            <p><strong>Rating:</strong> {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
            <p><strong>ID:</strong> {{ product.id }}</p>
            <p><strong>Random Number:</strong> {{ product.randomNum }}</p>
          </div>
        </div>
        <button (click)="refreshProduct()" class="refresh-btn">Refresh Product</button>
      } @else if (error) {
        <p class="error">Error loading product: {{ error }}</p>
      }
      
      <a href="/" class="back-link">← Back to Home</a>
    </div>
  `,
  styles: `
    .shuffle-container {
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

    .product-card {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 2rem;
      margin: 2rem 0;
      max-width: 600px;
      width: 100%;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .product-image {
      max-width: 200px;
      max-height: 200px;
      object-fit: contain;
      margin-bottom: 1.5rem;
      border-radius: 8px;
    }

    .product-card h2 {
      margin-top: 0;
      margin-bottom: 1.5rem;
      color: #646cff;
    }

    .product-details {
      text-align: left;
    }

    .product-details p {
      margin: 0.75rem 0;
      font-size: 1rem;
    }

    .refresh-btn {
      background: #646cff;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      margin: 1rem 0;
      transition: background 0.3s;
    }

    .refresh-btn:hover {
      background: #535bf2;
    }

    .error {
      color: #ff6b6b;
      margin: 1rem 0;
    }

    .back-link {
      margin-top: 2rem;
      color: #646cff;
      text-decoration: none;
    }

    .back-link:hover {
      text-decoration: underline;
    }
  `,
})
export default class ShuffleProducts implements OnInit {
  private http = inject(HttpClient);
  
  product: Product | null = null;
  loading = true;
  error: string | null = null;

  ngOnInit() {
    this.fetchProduct();
  }

  fetchProduct() {
    this.loading = true;
    this.error = null;
    
    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe({
      next: (products) => {
        // Select a random product from the array
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];
        
        // Add random number to the product
        this.product = {
          ...randomProduct,
          randomNum: Math.floor(Math.random() * 1000000),
        };
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message || 'Failed to fetch product';
        this.loading = false;
      },
    });
  }

  refreshProduct() {
    this.fetchProduct();
  }

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }
}

