import React from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Breadcrumb from '../sections/OrderDetails/Breadcrumb';
import Details from '../sections/OrderDetails/Details';
import Quickbar from '../layouts/Quickbar';

export default function OrderDetails()  {
    
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <div className="ms-content-wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <Details/>
                            </div>
                        </div>
                    </div>
                </main>
                <Quickbar />
            </div>
        );
    }