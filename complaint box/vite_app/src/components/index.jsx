import React, { useState } from 'react';
import './index.css';

const index = () => {
  const [filters, setFilters] = useState({
    size: 'All',
    color: 'All',
    priceRange: 'All',
  });

  const products = [
    { id: 1, name: 'Casual Dress', category: 'Casual Wear', size: 'M', color: 'Red', price: 30 },
    { id: 2, name: 'Formal Suit', category: 'Formal Wear', size: 'L', color: 'Black', price: 100 },
    { id: 3, name: 'Ethnic Saree', category: 'Ethnic Wear', size: 'S', color: 'Blue', price: 50 },
    { id: 4, name: 'Party Gown', category: 'Formal Wear', size: 'M', color: 'Pink', price: 80 },
  ];

  const categories = ['All', 'Casual Wear', 'Formal Wear', 'Ethnic Wear'];
  const sizes = ['All', 'S', 'M', 'L', 'XL'];
  const colors = ['All', 'Red', 'Black', 'Blue', 'Pink'];
  const priceRanges = ['All', 'Under $50', '$50-$100', 'Over $100'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filteredProducts = products.filter((product) => {
    const matchesSize = filters.size === 'All' || product.size === filters.size;
    const matchesColor = filters.color === 'All' || product.color === filters.color;
    const matchesPrice =
      filters.priceRange === 'All' ||
      (filters.priceRange === 'Under $50' && product.price < 50) ||
      (filters.priceRange === '$50-$100' && product.price >= 50 && product.price <= 100) ||
      (filters.priceRange === 'Over $100' && product.price > 100);
    return matchesSize && matchesColor && matchesPrice;
  });

  return (
    <div className="product-page">
      <h1>Product Categories</h1>

      <section className="filters">
        <h2>Filter Options</h2>
        <div className="filter-group">
          <label htmlFor="category">Category:</label>
          <select name="category" id="category" onChange={handleFilterChange}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="size">Size:</label>
          <select name="size" id="size" onChange={handleFilterChange}>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="color">Color:</label>
          <select name="color" id="color" onChange={handleFilterChange}>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="priceRange">Price Range:</label>
          <select name="priceRange" id="priceRange" onChange={handleFilterChange}>
            {priceRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="products">
        <h2>Products</h2>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default index;

