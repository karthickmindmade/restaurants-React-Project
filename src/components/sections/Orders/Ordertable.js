import React, { useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import actions from "../../../redux/Order/actions";
import Breadcrumb from "./Breadcrumb";
import Favorder from "./Favorder";
import { useHistory } from "react-router-dom";


export default function Ordertable(){
    const dispatch = useDispatch();
   
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: actions.GET_ORDER_LIST })
    }, [])
    const orders=useSelector(
        state=>state.OrderReducer
    )
    console.log(orders.Order_list);
    function ViewOrderDetails(order) {
        history.push('/Admin-OrderDetails', order)
    }
   return (
       <>
            
            <div className="col-12">
                <Breadcrumb/>
                <Favorder/>
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6> Order List</h6>
                    </div>
                    <div className="ms-panel-body">
                        <div className="table-responsive">
                            
                            <table className="table table-hover thead-primary">
                                <thead>
                                    <tr>
                                        <th scope="col">Order ID</th>
                                        <th scope="col">Cake Name</th>
                                        <th scope="col">Customer Name</th>
                                        <th scope="col">Ordered Date</th>
                                        <th scope="col">Delivery Date</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Order Status</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                {orders.Order_list.map((order)=>
                                    <tr onClick={()=>ViewOrderDetails(order)}>
                                        <th scope="row">{order._id}</th>
                                        <td>{order.Title}</td>
                                        <td> {order.UserName}</td>
                                        <td> {order.Created_On}</td>
                                        <td>{order.DeliveryDate}</td>
                                        <td>{order.Price}</td>
                                        <td><span className={order.Status}>{order.Status}</span></td>
                                    </tr>
                                   )}
                                </tbody>
                            </table> 
                        </div>
                    </div>
                </div>
            </div>
            
           
            
        </>
        );
    
}