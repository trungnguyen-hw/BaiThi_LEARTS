import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogMasonryLeftSidebar = () => {
  useEffect(() => {
    // Re-initialize jQuery plugins for this page if available
    if (window.initJQueryPlugins) {
      window.initJQueryPlugins();
    }
  }, []);

  return (
    <>
      

    
    <div className="page-title-section section" data-bg-image="/assets/images/bg/page-title-1.webp">
        <div className="container">
            <div className="row">
                <div className="col">

                    <div className="page-title">
                        <h1 className="title">Blog</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Blog</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            <div className="row learts-mb-n50">

                <div className="col-xl-9 col-lg-8 col-12 order-lg-2 learts-mb-50">
                    <div className="row isotope-grid learts-mb-n40">

                        <div className="col-1 grid-sizer"></div>

                        <div className="grid-item col-md-6 col-12 learts-mb-40">
                            <div className="blog">
                                <div className="image">
                                    <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/s420/blog-1.webp" alt="Blog Image" /></Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li><i className="far fa-calendar"></i><a href="#">January 22, 2020</a></li>
                                        <li><i className="far fa-eye"></i> 201 views</li>
                                    </ul>
                                    <h5 className="title"><Link to="/blog-details-right-sidebar">Start a Kickass Online Blog</Link></h5>
                                    <div className="desc">
                                        <p>Working on writing our first book has been one of the most amazing projects. It seems like it will be forever until I get to show you what we’ve been…</p>
                                    </div>
                                    <Link to="/blog-details-right-sidebar" className="link">Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item col-md-6 col-12 learts-mb-40">
                            <div className="blog">
                                <div className="image">
                                    <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/s420/blog-2.webp" alt="Blog Image" /></Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li><i className="far fa-calendar"></i><a href="#">January 22, 2020</a></li>
                                        <li><i className="far fa-eye"></i> 158 views</li>
                                    </ul>
                                    <h5 className="title"><Link to="/blog-details-right-sidebar">Tile Tray with Brass Handles</Link></h5>
                                    <div className="desc">
                                        <p>Happy New Year All! I am back after the holiday break and so excited for all the home projects I have planned in 2020. So when they asked me to come…</p>
                                    </div>
                                    <Link to="/blog-details-right-sidebar" className="link">Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item col-md-6 col-12 learts-mb-40">
                            <div className="blog">
                                <div className="image">
                                    <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/s420/blog-3.webp" alt="Blog Image" /></Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li><i className="far fa-calendar"></i><a href="#">January 22, 2020</a></li>
                                        <li><i className="far fa-eye"></i> 119 views</li>
                                    </ul>
                                    <h5 className="title"><Link to="/blog-details-right-sidebar">Dining Table Chairs Makeover</Link></h5>
                                    <div className="desc">
                                        <p>I did not know exactly the shape I was looking for, but knew that I wanted to paint them with this SUPER pretty Krylon® Italian Olive color. I stopped at…</p>
                                    </div>
                                    <Link to="/blog-details-right-sidebar" className="link">Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item col-md-6 col-12 learts-mb-40">
                            <div className="blog">
                                <div className="image">
                                    <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/s420/blog-4.webp" alt="Blog Image" /></Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li><i className="far fa-calendar"></i><a href="#">January 22, 2020</a></li>
                                        <li><i className="far fa-eye"></i> 83 views</li>
                                    </ul>
                                    <h5 className="title"><Link to="/blog-details-right-sidebar">Faux Map Drawer Dresser</Link></h5>
                                    <div className="desc">
                                        <p>I gave you all a peek at my guest room makeover yesterday and promised I would share all the details on my DIY Map Dresser, so here we go! I initially had…</p>
                                    </div>
                                    <Link to="/blog-details-right-sidebar" className="link">Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item col-md-6 col-12 learts-mb-40">
                            <div className="blog">
                                <div className="image">
                                    <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/s420/blog-5.webp" alt="Blog Image" /></Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li><i className="far fa-calendar"></i><a href="#">January 22, 2020</a></li>
                                        <li><i className="far fa-eye"></i> 83 views</li>
                                    </ul>
                                    <h5 className="title"><Link to="/blog-details-right-sidebar">Printable Season Postcards 2019</Link></h5>
                                    <div className="desc">
                                        <p>The print is an 8×10. You can print it at your house or at a local print place like Costco or FedEx Office. I recommend printing on card stock. Please…</p>
                                    </div>
                                    <Link to="/blog-details-right-sidebar" className="link">Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item col-md-6 col-12 learts-mb-40">
                            <div className="blog">
                                <div className="image">
                                    <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/s420/blog-6.webp" alt="Blog Image" /></Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li><i className="far fa-calendar"></i><a href="#">January 22, 2020</a></li>
                                        <li><i className="far fa-eye"></i> 83 views</li>
                                    </ul>
                                    <h5 className="title"><Link to="/blog-details-right-sidebar">Make a State Necklace</Link></h5>
                                    <div className="desc">
                                        <p>In attempt to make my own state shaped necklace, I did a little researching last night and found a great tutorial on the blog, V Juliet. I had everything I needed so…</p>
                                    </div>
                                    <Link to="/blog-details-right-sidebar" className="link">Read More</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row learts-mt-50">
                        <div className="col text-center">
                            <a href="#" className="btn btn-dark btn-outline-hover-dark">Load More</a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-12 order-lg-1 learts-mb-10">
                    
                    <div className="single-widget learts-mb-40">
                        <div className="widget-search">
                            <form action="#">
                                <input type="text" placeholder="Search products...." />
                                <button><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    

                    
                    <div className="single-widget learts-mb-40">
                        <h3 className="widget-title product-filter-widget-title">Recent Post</h3>
                        <ul className="widget-blogs">
                            <li className="widget-blog">
                                <div className="thumbnail">
                                    <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/widget/widget-1.webp" alt="Widget Blog Post" /></Link>
                                </div>
                                <div className="content">
                                    <h6 className="title"><Link to="/blog-details-right-sidebar">Start a Kickass Online Blog</Link></h6>
                                    <span className="date">January 22, 2020</span>
                                </div>
                            </li>
                            <li className="widget-blog">
                                <div className="thumbnail">
                                    <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/widget/widget-2.webp" alt="Widget Blog Post" /></Link>
                                </div>
                                <div className="content">
                                    <h6 className="title"><Link to="/blog-details-right-sidebar">Tile Tray with Brass Handles</Link></h6>
                                    <span className="date">January 22, 2020</span>
                                </div>
                            </li>
                            <li className="widget-blog">
                                <div className="thumbnail">
                                    <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/widget/widget-3.webp" alt="Widget Blog Post" /></Link>
                                </div>
                                <div className="content">
                                    <h6 className="title"><Link to="/blog-details-right-sidebar">Dining Table Chairs Makeover</Link></h6>
                                    <span className="date">January 22, 2020</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    

                    
                    <div className="single-widget learts-mb-40">
                        <div className="widget-banner">
                            <img src="/assets/images/banner/widget-banner.webp" alt="" />
                        </div>
                    </div>
                    

                    
                    <div className="single-widget learts-mb-40">
                        <h3 className="widget-title product-filter-widget-title">Categories</h3>
                        <ul className="widget-list">
                            <li><a href="#">Gift ideas</a> <span className="count">11</span></li>
                            <li><a href="#">Feature</a> <span className="count">2</span></li>
                            <li><a href="#">Kitchen</a> <span className="count">11</span></li>
                        </ul>
                    </div>
                    

                    
                    <div className="single-widget learts-mb-40">
                        <h3 className="widget-title product-filter-widget-title">Product Tags</h3>
                        <div className="widget-tags">
                            <a href="#">design</a>
                            <a href="#">fashion</a>
                            <a href="#">learts</a>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>

    </div>
    

    
    </>
  );
};

export default BlogMasonryLeftSidebar;
