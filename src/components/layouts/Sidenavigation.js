import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

import logo from '../../assets/img/costic/costic-logo-216x62.png';
import Dropdown from '../common/dropdown';

export default function Sidenavigation() {

    function removeoverlay() {
        $('.ms-body').toggleClass('ms-aside-left-open');
        $('#ms-side-nav').toggleClass('ms-aside-open');
        $(".ms-aside-overlay.ms-overlay-left").toggleClass('d-block');
    }
    // function setActiveMenuItem() {
    //     $('.ms-main-aside .menu-item>a').on('click', function () {
    //         $(this).removeAttr('href');
    //         var element = $(this).parent('li');
    //         if (element.hasClass('active')) {
    //             element.removeClass('active');
    //             element.find('li').removeClass('active');
    //             element.find('.collapse').slideUp();
    //         } else {
    //             element.addClass('active');
    //             element.children('.collapse').slideDown();
    //             element.siblings('li').children('.collapse').slideUp();
    //             element.siblings('li').removeClass('active');
    //             element.siblings('li').find('li').removeClass('active');
    //             element.siblings('li').find('.collapse').slideUp();
    //         }
    //     });
    // }
    // setActiveMenuItem();
    return (
        <div>
            <div className="ms-aside-overlay ms-overlay-left ms-toggler" onClick={removeoverlay}></div>
            <div className="ms-aside-overlay ms-overlay-right ms-toggler"></div>
            <Scrollbar id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left">
                {/* Logo */}
                <div className="logo-sn ms-d-block-lg">
                    <Link className="pl-0 ml-0 text-center" to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                {/* Navigation */}
                <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
                    {/* Dashboard */}
                    <li className="menu-item">
                        <Link to="/Dashboard" > <span><i className="material-icons fs-16" >dashboard</i>Dashboard </span>
                        </Link>
                    </li>
                    {/* /Dashboard */}
                    {/* product */}
                    <Dropdown
                        head={<Link to="#" className="has-chevron"> <span><i className="fa fa-archive fs-16" />Menus </span>
                        </Link>}
                        body={
                            <ul id="product" className='active' aria-labelledby="product" data-parent="#side-nav-accordion">
                                <li> <Link to="/menu-catalogue" >Menu Catalogue</Link>
                                </li>
                                <li> <Link to="/menu-list" >Menu List</Link>
                                </li>
                                <li> <Link to="/menu-grid" >Menu Grid</Link>
                                </li>
                                <li> <Link to="/add-product" >Add Product</Link>
                                </li >
                                <li> <Link to="/product-detail" >Product Detail</Link>
                                </li >
                            </ul >
                        }
                    />
                    {/* product end */}
                    {/* orders */}
                    <li className="menu-item">
                        <Link to="/orders"> <span><i className="fas fa-clipboard-list fs-16" />Orders</span>
                        </Link>
                    </li >
                    {/* orders end */}
                    {/* restaurants */}
                    <li className="menu-item">
                        <Link to="/restaurant-list"> <span><i className="fa fa-tasks fs-16" />Restaurants List</span>
                        </Link>
                    </li >
                    {/* restaurants end */}
                    {/* Invoice */}
                    <Dropdown
                        head={<Link to="#" className="has-chevron"> <span><i className="fas fa-file-invoice fs-16" />Invoice </span>
                        </Link>}
                        body={
                            <ul id="invoice" className='active' aria-labelledby="invoice" data-parent="#side-nav-accordion">
                                <li> <Link to="/invoice-detail" >Invoice Detail</Link>
                                </li>
                                <li> <Link to="/invoice-list" >Invoice List</Link>
                                </li>
                            </ul >
                        }
                    />
                    {/* Invoice end */}
                    {/* customers*/}
                    <Dropdown
                        head={<Link to="#" className="has-chevron"> <span><i className="fas fa-user-friends fs-16" />Customers </span>
                        </Link>}
                        body={
                            <ul id="customer" className="active" aria-labelledby="customer" data-parent="#side-nav-accordion">
                                <li> <Link to="/customer-review" >Customers Review</Link>
                                </li>
                                <li> <Link to="/customer-list" >Customers List</Link>
                                </li>
                                <li> <Link to="/social-activity" >Social Activity</Link>
                                </li >
                            </ul >
                        }
                    />
                    {/* Customers  end */}
                    {/* sales */}
                    <li className="menu-item">
                        <Link to="/sales" > <span><i className="fa fa-briefcase fs-16" />Sales</span>
                        </Link>
                    </li >
                    {/* sales end  */}
                </ul >
            </Scrollbar >
        </div >
    );
}
