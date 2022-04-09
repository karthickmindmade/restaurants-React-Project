import React, { useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import actions from "../../../redux/Order/actions";
import Details from "../OrderDetails/Details";
import Breadcrumb from "./Breadcrumb";
import Favorder from "./Favorder";


export default function Ordertable(){
    const dispatch = useDispatch();
    var [rowClicked,setRowClicked]=useState(false);
    var [singleOrder,setSingleOrder]=useState("");

    useEffect(() => {
        dispatch({ type: actions.GET_ORDER_LIST })
    }, [])
    const orders=useSelector(
        state=>state.OrderReducer
    )
    console.log(orders.Order_list);
    const handleRowClick=(a)=>{
        setRowClicked(true);
        setSingleOrder(a);
    }
   return (
       <>
            {rowClicked === false ?
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
                                {orders.Order_list.map((a)=>
                                    <tr onClick={()=>handleRowClick(a)}>
                                        <th scope="row">{a._id}</th>
                                        <td>{a.Title}</td>
                                        <td> {a.UserName}</td>
                                        <td> {a.Created_On}</td>
                                        <td>{a.DeliveryDate}</td>
                                        <td>{a.Price}</td>
                                        <td><span className={a.Status}>{a.Status}</span></td>
                                    </tr>
                                   )}
                                </tbody>
                            </table> 
                        </div>
                    </div>
                </div>
            </div>
            :
            <Details closeDetails={()=>setRowClicked(false)} singleOrder={singleOrder}/>
           
            }
        </>
        );
    
}