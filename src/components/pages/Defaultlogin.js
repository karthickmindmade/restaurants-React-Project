import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Content from '../sections/Defaultlogin/Content';

export default function Defaultlogin(){
  
        return (
            <div className="ms-body ms-primary-theme ms-logged-out">
                {/* <Sidenavigation /> */}
                <main className="body-content">
                    {/* <Topnavigation /> */}
                    <Content/>
                </main>
            </div>
        );
    }


