import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Content from '../sections/Defaultlogin/Content';
import Homecontent from '../sections/Dashboard/Homecontent';

import Quickbar from '../layouts/Quickbar';
export default function Defaultlogin() {
    // const [user] = useAuthState(auth);
    return (
        // user ?
            // <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
            //     <Sidenavigation />
            //     <main className="body-content">
            //         <Topnavigation />
            //         <Homecontent />
            //     </main>
            //     <Quickbar />
            // </div> :
            <div className="ms-body ms-primary-theme ms-logged-out">
                {/* <Sidenavigation /> */}
                <main className="body-content">
                    {/* <Topnavigation /> */}
                    <Content />
                </main>
            </div>




    );
}


