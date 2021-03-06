import React from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Ordertable from '../sections/Orders/Ordertable';
import Quickbar from '../layouts/Quickbar';

export default function Orders()  {
    
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <div className="ms-content-wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                
                                <Ordertable/>
                            </div>
                        </div>
                    </div>
                </main>
                <Quickbar />
            </div>
        );
    }