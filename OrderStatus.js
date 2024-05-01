//Sample program for Managing Object State with 'useState' for an Order component

import react,{ useState } from "react";

//Creating a functional component named 'OrderStatus' that utilizes the `useState` hook to manage and update an object state.
function OrderStatus(){

    //Declaring and using useState hook to initialize a state variable called 'order'
    const [order, setOrder] = useState({
        id: 'ORD123',
        status: 'Processing',
        customer: 'John Doe',
        items: 3
        });

        //Temp variable to hold Order status change value
        let orderStatusTemp = 'Processing';

        //function to capture and assign selected Status change value to orderStatusTemp
        function updateStatusChange(e){
            orderStatusTemp = e.target.value;
        }

        //function to update status stage
        function handleStatusChange(){
            setOrder({...order, status: orderStatusTemp});
        }

    return(
        <div>
            <h1>Example updating Order Status using 'useStage' hook:</h1>
            <h1>ID:{order.id}</h1>
            <h1>status:{order.status}</h1>
            <h1>customer:{order.customer}</h1>
            <h1>items:{order.items}</h1>
            <select onChange={updateStatusChange}>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
            </select>
            <br></br>
            <button onClick={handleStatusChange}>Update Status</button>
        </div>
    )

}

export default OrderStatus;