import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="col-12 text-center p-5">
        <h4>No products found matching your criteria.</h4>
      </div>
    );
  }

  return (
    <div className="products row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
      {products.map((product) => (
        <div className="col" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
