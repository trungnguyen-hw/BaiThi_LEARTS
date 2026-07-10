import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import { blogs } from '../data/blogs';

const Blog = () => {
  return (
    <>
      <Breadcrumb title="Blog" currentText="Blog" />

      <div className="section section-padding border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-12">
              <div className="row learts-mb-n50">
                {blogs.map((blog) => (
                  <div className="col-12 learts-mb-50 border-bottom pb-5" key={blog.id}>
                    <div className="blog-item">
                      {/* Image */}
                      <div className="image mb-4">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="img-fluid border"
                          style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
                        />
                      </div>
                      
                      {/* Meta */}
                      <div className="meta mb-2 text-secondary" style={{ fontSize: '13px' }}>
                        <span className="me-3"><i className="far fa-calendar-alt me-1"></i> {blog.date}</span>
                        <span className="me-3"><i className="far fa-user me-1"></i> by {blog.author}</span>
                        <span><i className="far fa-comments me-1"></i> {blog.commentsCount} Comments</span>
                      </div>

                      {/* Title */}
                      <h3 className="title mb-3" style={{ fontFamily: 'Marcellus, sans-serif' }}>
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="excerpt text-secondary mb-4">{blog.excerpt}</p>

                      {/* Read More button */}
                      <button
                        className="btn btn-outline-dark px-4 py-2"
                        style={{ borderRadius: '0', fontSize: '13px', textTransform: 'uppercase', fontWeight: 'bold' }}
                        onClick={() => alert(`Reading post: "${blog.title}"\n\n${blog.content}`)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
