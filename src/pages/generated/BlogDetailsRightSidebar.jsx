import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogDetailsRightSidebar = () => {
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

                <div className="col-xl-9 col-lg-8 col-12 learts-mb-50">
                    <div className="single-blog">
                        <div className="image">
                            <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/s870/blog-1.webp" alt="Blog Image" /></Link>
                        </div>
                        <div className="content">
                            <ul className="category">
                                <li><a href="#">Decor</a></li>
                                <li><a href="#">Kitchen</a></li>
                            </ul>
                            <h2 className="title">Start a Kickass Online Blog</h2>
                            <ul className="meta">
                                <li><i className="far fa-user"></i> By <a href="#">Owen Christ</a></li>
                                <li><i className="far fa-calendar"></i><a href="#">January 22, 2020</a></li>
                                <li><i className="far fa-comment"></i><a href="#">4 Comments</a></li>
                                <li><i className="far fa-eye"></i> 201 views</li>
                            </ul>
                            <div className="desc">
                                <p>It was designer Steven Miller—no slouch in the taste department—who first showed me the work of Jenny Hacker, a San Francisco-based textile artist. It was a blanket—black on black—with two different textiles fused together, one side organic cotton and the other, felted wool.</p>
                                <blockquote>
                                    <p>A triumph of&nbsp;texture and form, and&nbsp;dramatic, organic, sophisticated, sensual, it was one of the most beguiling pieces of functional art&nbsp;I’ve seen of late.</p>
                                </blockquote>
                                <p>Doing a little background research for the interview was no mean feat. At a time when so many tread the same art-meets-craft sales circuits and tend their Instagram feeds with greater passion than their craft, this woman was mysterious. A minimalist website was all there was. Even better. A trip out to the deliciously un-hip Excelsior District in San Francisco was a good start.</p>
                                <p>So was poking around the garage-turned-workshop: a vat of something brewing in the corner, a few bottles holding another experiment (homemade dyes from flowers in the yard), tatami mats on the floor, vintage Knoll chairs, a drool-worthy assortment of books on fashion, Japanese anime figurines… Oh, and an old letterpress nestled beneath a work table.</p>
                            </div>
                        </div>
                        <div className="blog-footer row g-0 justify-content-between align-items-center">
                            <div className="col-auto">
                                <ul className="tags">
                                    <li className="icon"><i className="fas fa-tags"></i></li>
                                    <li><a href="#">design</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">learts</a></li>
                                </ul>
                            </div>
                            <div className="col-auto">
                                <div className="post-share">
                                    Share this post
                                    <span className="toggle"><i className="fas fa-share-alt"></i></span>
                                    <ul className="social-list">
                                        <li className="hintT-top" data-hint="Facebook"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="hintT-top" data-hint="Twitter"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li className="hintT-top" data-hint="Pinterest"><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                        <li className="hintT-top" data-hint="Google Plus"><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li className="hintT-top" data-hint="Email"><a href="#"><i className="far fa-envelope-open"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-author">
                        <div className="thumbnail">
                            <img src="/assets/images/comment/comment-1.webp" alt="" />
                            <div className="social">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="content">
                            <a href="#" className="name">Owen Christ</a>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboruLorem ipsum dolor sit amet datat non proident</p>
                        </div>
                    </div>
                    <div className="related-blog">
                        <div className="block-title pb-0 border-bottom-0">
                            <h2 className="title">Related Blog</h2>
                        </div>
                        <div className="row learts-mb-n40">
                            <div className="col-md-6 col-12 learts-mb-40">
                                <div className="blog">
                                    <div className="image">
                                        <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/s370/blog-2.webp" alt="Blog Image" /></Link>
                                    </div>
                                    <div className="content">
                                        <ul className="meta">
                                            <li><i className="far fa-calendar"></i><a href="#">January 22, 2020</a></li>
                                            <li><i className="far fa-eye"></i> 158 views</li>
                                        </ul>
                                        <h5 className="title mb-0"><Link to="/blog-details-right-sidebar">Tile Tray with Brass Handles</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 learts-mb-40">
                                <div className="blog">
                                    <div className="image">
                                        <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/s370/blog-3.webp" alt="Blog Image" /></Link>
                                    </div>
                                    <div className="content">
                                        <ul className="meta">
                                            <li><i className="far fa-calendar"></i><a href="#">January 22, 2020</a></li>
                                            <li><i className="far fa-eye"></i> 119 views</li>
                                        </ul>
                                        <h5 className="title mb-0"><Link to="/blog-details-right-sidebar">Dining Table Chairs Makeover</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Comments-wrapper">
                        <div className="block-title pb-0 border-bottom-0">
                            <h2 className="title">Comments <span className="text-muted">(4)</span></h2>
                        </div>
                        <ul className="comment-list">
                            <li>
                                <div className="comment">
                                    <div className="thumbnail">
                                        <img src="/assets/images/comment/comment-2.webp" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="name">Scott James</h4>
                                        <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                        <div className="actions">
                                            <span className="date">April 22, 2020 at 2:10 am</span>
                                            <a className="reply-link" href="#">Reply</a>
                                        </div>
                                    </div>
                                </div>
                                <ul className="child-comment">
                                    <li>
                                        <div className="comment">
                                            <div className="thumbnail">
                                                <img src="/assets/images/comment/comment-3.webp" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="name">Edna Watson</h4>
                                                <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                                <div className="actions">
                                                    <span className="date">April 22, 2020 at 2:10 am</span>
                                                    <a className="reply-link" href="#">Reply</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="comment">
                                    <div className="thumbnail">
                                        <img src="/assets/images/comment/comment-4.webp" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="name">Gerhard</h4>
                                        <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                        <div className="actions">
                                            <span className="date">April 22, 2020 at 2:10 am</span>
                                            <a className="reply-link" href="#">Reply</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="comment">
                                    <div className="thumbnail">
                                        <img src="/assets/images/comment/comment-1.webp" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="name">Owen Christ</h4>
                                        <p>Thank you very much!</p>
                                        <div className="actions">
                                            <span className="date">April 22, 2020 at 2:10 am</span>
                                            <a className="reply-link" href="#">Reply</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="block-title pb-0 border-bottom-0">
                            <h2 className="title">Leave your thought here</h2>
                        </div>
                        <div className="comment-form">
                            <form action="#">
                                <div className="row learts-mb-n20">
                                    <div className="col-md-6 col-12 learts-mb-20">
                                        <input type="text" placeholder="Your name (*)" />
                                    </div>
                                    <div className="col-md-6 col-12 learts-mb-20">
                                        <input type="text" placeholder="Mail (*)" />
                                    </div>
                                    <div className="col-12 learts-mb-20">
                                        <textarea placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-12 text-center learts-mb-20 learts-mt-20">
                                        <button className="btn btn-dark btn-outline-hover-dark">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-12 learts-mb-10">
                    
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

export default BlogDetailsRightSidebar;
