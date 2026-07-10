import React from 'react';
import { Link } from 'react-router-dom';

const categoryImages = {
  kitchen: '/assets/images/banner/category/banner-s1-4.webp',
  toys: '/assets/images/banner/category/banner-s1-3.webp',
  decor: '/assets/images/banner/category/banner-s1-2.webp',
  accessories: '/assets/images/banner/category/banner-s1-5.webp',
};

const CategoryList = ({ categories }) => {
  const safeCategories = Array.isArray(categories) ? categories : [];
  return (
    <div className="section section-fluid section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          {safeCategories.map((category) => {
            const imageUrl = categoryImages[category.id] || '/assets/images/banner/category/banner-s1-1.webp';
            return (
              <div className="col-lg-3 col-sm-6 mb-4" key={category.id}>
                <div className="category-banner1">
                  <div className="inner">
                    <Link to={`/shop?category=${encodeURIComponent(category.name)}`} className="image">
                      <img src={imageUrl} alt={category.name} style={{ width: '100%', objectFit: 'cover' }} />
                    </Link>
                    <div className="content">
                      <h3 className="title">
                        <Link to={`/shop?category=${encodeURIComponent(category.name)}`}>{category.name}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
