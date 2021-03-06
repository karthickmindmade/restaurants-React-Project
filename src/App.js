import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Preloader from './components/layouts/Preloader';
// import Dashboard from './components/pages/Dashboard';
import Accordions from './components/pages/Accordions';
import Addproduct from './components/vendor/pages/Addproduct';
import Alerts from './components/pages/Alerts';
import Animations from './components/pages/Animations';
import Badges from './components/pages/Badges';
import Basictables from './components/pages/Basictables';
import Breadcrumbs from './components/pages/Breadcrumbs';
import Buttons from './components/pages/Buttons';
import Cards from './components/pages/Cards';
import Chartjs from './components/pages/Chartjs';
import Chat from './components/pages/Chat';
import Cropper from './components/pages/Cropper';
import Customerlist from './components/pages/Customerlist';
import Customerreview from './components/pages/Customerreview';
import Datatables from './components/pages/Datatables';
import Draggables from './components/pages/Draggables';
import Email from './components/pages/Email';
import Flaticons from './components/pages/Flaticons';
import Fontawesome from './components/pages/Fontawesome';
import Formelements from './components/pages/Formelements';
import Formlayouts from './components/pages/Formlayouts';
import Formvalidation from './components/pages/Formvalidation';
import Formwizard from './components/pages/Formwizard';
import Googlemaps from './components/pages/Googlemaps';
import Invoicedetail from './components/pages/Invoicedetail';
import Invoicelist from './components/pages/Invoicelist';
import Materialize from './components/pages/Materialize';
import Menucatalogue from './components/pages/Menucatalogue';
import Menugrid from './components/pages/Menugrid';
import AdminProductlist from './components/pages/AdminProductlist';
import Modals from './components/pages/Modals';
import Googlechart from './components/pages/Googlechart';
import Orders from './components/pages/Orders';
import Pagination from './components/pages/Pagination';
import Preloaders from './components/pages/Preloaders';
import Productdetail from './components/pages/Productdetail';
import Progressbars from './components/pages/Progressbars';
import Rangeslider from './components/pages/Rangeslider';
import Rating from './components/pages/Rating';
import Restaurantlist from './components/pages/Restaurantlist';
import Sales from './components/pages/Sales';
import Sliders from './components/pages/Sliders';
import Socialactivity from './components/pages/Socialactivity';
import Sweetalerts from './components/pages/Sweetalerts';
import Tabs from './components/pages/Tabs';
import Toast from './components/pages/Toast';
import Todolist from './components/pages/Todolist';
import Tour from './components/pages/Tour';
import Typography from './components/pages/Typography';
import Vectormaps from './components/pages/Vectormaps';
import Widgets from './components/pages/Widgets';
import Clientmanagement from './components/pages/Clientmanagement';
import Comingsoon from './components/pages/Comingsoon';
import Defaultregister from './components/pages/Defaultregister';
import Error from './components/pages/Error';
import Faq from './components/pages/Faq';
import Invoice from './components/pages/Invoice';
import Lockscreen from './components/pages/Lockscreen';
import Modallogin from './components/pages/Modallogin';
import Modalregister from './components/pages/Modalregister';
import Portfolio from './components/pages/Portfolio';
import Stockmanagement from './components/pages/Stockmanagement';
import Webanalytics from './components/pages/Webanalytics';
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';
import VendorMenulist from './components/vendor/pages/VendorMenulist';
import VendorProductdetail from './components/vendor/pages/VendorProductdetail';
import Vendorprofile from './components/vendor/pages/vendorprofile';
import AddVendor from './components/pages/AddVendor';
import AdminVendorList from './components/pages/AdminVendorList';
import AdminProfile from './components/pages/adminProfile';
import AdminProductdetail from './components/pages/AdminProductdetail'
import actions from "../src/redux/Auth/actions";
import ScrollToTop from './components/common/scroll-to-top';
import { store } from './redux/store';
import OrderDetails from './components/pages/OrderDetails';
import AdminVendorListDetail from './components/pages/AdminVendorListDetail';




const Defaultlogin = lazy(()=> import('./components/pages/Defaultlogin'));
const Dashboard = lazy(()=> import('./components/pages/Dashboard'));
const VendorDashboard = lazy(()=> import('./components/vendor/pages/vendorDashboard'));

if(localStorage.getItem('token')){

  store.dispatch({ 
      type : actions.VERIFY_TOKEN, 
      payload : localStorage.getItem('token') 
  });
  store.dispatch({ 
      type: actions.UPDATE_AUTH_DETAILS, 
      payload: { isAuthenticated: true }
  });

};

function App() {

  return (
    <Router >
       <Suspense fallback={<Preloader />}>
      <Switch>
      <ScrollToTop history={useHistory()}>
        <PublicRoute exact path="/" component={Defaultlogin} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/accordions" component={Accordions} />
        <PrivateRoute exact path="/alerts" component={Alerts} />
        <PrivateRoute exact path="/animations" component={Animations} />
        <PrivateRoute exact path="/badges" component={Badges} />
        <PrivateRoute exact path="/basic-tables" component={Basictables} />
        <PrivateRoute exact path="/breadcrumbs" component={Breadcrumbs} />
        <PrivateRoute exact path="/buttons" component={Buttons} />
        <PrivateRoute exact path="/cards" component={Cards} />
        <PrivateRoute exact path="/chartjs" component={Chartjs} />
        <PrivateRoute exact path="/chat" component={Chat} />
        <PrivateRoute exact path="/cropper" component={Cropper} />
        <PrivateRoute exact path="/customer-list" component={Customerlist} />
        <PrivateRoute exact path="/customer-review" component={Customerreview} />
        <PrivateRoute exact path="/data-tables" component={Datatables} />
        <PrivateRoute exact path="/draggables" component={Draggables} />
        <PrivateRoute exact path="/email" component={Email} />
        <PrivateRoute exact path="/flaticons" component={Flaticons} />
        <PrivateRoute exact path="/fontawesome" component={Fontawesome} />
        <PrivateRoute exact path="/form-elements" component={Formelements} />
        <PrivateRoute exact path="/form-layouts" component={Formlayouts} />
        <PrivateRoute exact path="/form-validation" component={Formvalidation} />
        <PrivateRoute exact path="/form-wizard" component={Formwizard} />
        <PrivateRoute exact path="/google-maps" component={Googlemaps} />
        <PrivateRoute exact path="/invoice-detail" component={Invoicedetail} />
        <PrivateRoute exact path="/invoice-list" component={Invoicelist} />
        <PrivateRoute exact path="/materialize" component={Materialize} />
        <PrivateRoute exact path="/menu-catalogue" component={Menucatalogue} />
        <PrivateRoute exact path="/menu-grid" component={Menugrid} />
        <PrivateRoute exact path="/modals" component={Modals} />
        <PrivateRoute exact path="/google-chart" component={Googlechart} />
        <PrivateRoute exact path="/orders" component={Orders} />
        <PrivateRoute exact path="/pagination" component={Pagination} />
        <PrivateRoute exact path="/preloaders" component={Preloaders} />
        <PrivateRoute exact path="/product-detail" component={Productdetail} />
        <PrivateRoute exact path="/progress-bars" component={Progressbars} />
        <PrivateRoute exact path="/range-slider" component={Rangeslider} />
        <PrivateRoute exact path="/rating" component={Rating} />
        <PrivateRoute exact path="/restaurant-list" component={Restaurantlist} />
        <PrivateRoute exact path="/sales" component={Sales} />
        <PrivateRoute exact path="/sliders" component={Sliders} />
        <PrivateRoute exact path="/social-activity" component={Socialactivity} />
        <PrivateRoute exact path="/sweet-alerts" component={Sweetalerts} />
        <PrivateRoute exact path="/tabs" component={Tabs} />
        <PrivateRoute exact path="/toast" component={Toast} />
        <PrivateRoute exact exacte path="/todo-list" component={Todolist} />
        <PrivateRoute exact path="/tour" component={Tour} />
        <PrivateRoute exact path="/typography" component={Typography} />
        <PrivateRoute exact path="/vector-maps" component={Vectormaps} />
        <PrivateRoute exact path="/widgets" component={Widgets} />
        <PrivateRoute exact path="/client-management" component={Clientmanagement} />
        <PrivateRoute exact path="/coming-soon" component={Comingsoon} />
        <PrivateRoute exact path="/default-register" component={Defaultregister} />
        <PrivateRoute exact path="/error" component={Error} />
        <PrivateRoute exact path="/faq" component={Faq} />
        <PrivateRoute exact path="/invoice" component={Invoice} />
        <PrivateRoute exact path="/lock-screen" component={Lockscreen} />
        <PrivateRoute exact path="/modal-login" component={Modallogin} />
        <PrivateRoute exact path="/modal-register" component={Modalregister} />
        <PrivateRoute exact path="/portfolio" component={Portfolio} />
        <PrivateRoute exact path="/stock-management" component={Stockmanagement} />
        <Route exact path="/admin-profile" component={AdminProfile} />

        <PrivateRoute exact path="/web-analytics" component={Webanalytics} />
        <Route exact path="/add-vendor" component={AddVendor} />
        <Route exact path='/admin-vendor-List' component={AdminVendorList} />
        <Route exact path="/admin-product-details" component={AdminProductdetail} />
        <Route exact path="/admin-product-list" component={AdminProductlist} />
        
        <PrivateRoute exact path="/vendor-profile" component={Vendorprofile} />
        <Route exact path="/Vendor-menu-list" component={VendorMenulist} />
        <Route exact path="/Vendor-Productdetail" component={VendorProductdetail} />
        <PrivateRoute exact path="/vendordashboard" component={VendorDashboard} />
        <Route exact path="/add-product" component={Addproduct} />
        <PrivateRoute exact path="/Admin-OrderDetails" component={OrderDetails} />
        <PrivateRoute exact path='/admin-vendor-list-detail' component={AdminVendorListDetail}/>

      </ScrollToTop>
      </Switch>
      </Suspense>
    </Router>
  );
}

export default App;