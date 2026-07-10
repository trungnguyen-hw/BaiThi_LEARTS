import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ElementsButtons = () => {
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
                        <h1 className="title">Buttons</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">Elements</a></li>
                            <li className="breadcrumb-item active">Buttons</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title">Default Buttons</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            
            <div className="row align-items-center learts-mb-n20">

                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-primary">primary</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-primary2">primary2</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-primary3">primary3</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-secondary">secondary</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-success">success</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-danger">danger</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-info">info</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-warning">warning</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-light">light</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-dark">dark</a></div>

            </div>

        </div>
    </div>
    

    
    <div className="section section-padding pt-0">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title">Outline Buttons</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            
            <div className="row align-items-center learts-mb-n20">

                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-outline-primary">primary</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-outline-primary2">primary2</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-outline-primary3">primary3</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-outline-secondary">secondary</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-outline-success">success</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-outline-danger">danger</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-outline-info">info</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-outline-warning">warning</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-outline-light">light</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-outline-dark">dark</a></div>

            </div>

        </div>
    </div>
    

    
    <div className="section section-padding pt-0">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title">Buttons Sizes</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            
            <div className="row align-items-center learts-mb-n20">

                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-sm btn-primary">small</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-md btn-primary">medium</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-primary">default</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-lg btn-primary">large</a></div>
                <div className="col-auto learts-mb-20"><a href="#" className="btn btn-xl btn-primary">extra large</a></div>

            </div>

        </div>
    </div>
    

    
    </>
  );
};

export default ElementsButtons;
