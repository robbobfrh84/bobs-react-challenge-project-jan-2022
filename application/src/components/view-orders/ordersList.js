import React from 'react';

const OrdersList = (props) => {
    const { orders } = props;
    if (!props || !props.orders || !props.orders.length) return (
        <div className="empty-orders">
            <h2>There are no orders to display</h2>
        </div>
    );

    const formatDate = (hour, minute, second) => {
        const hh = format24Hour(hour);
        const mm = zeroPadDigit(minute);
        const ss = zeroPadDigit(second);
        return hh + ":" + mm + ":" + ss;
    }
    const zeroPadDigit = (n) => n > 9 ? n : `0${n}`;
    const format24Hour = (n) => n > 12 ? zeroPadDigit(n - 12) : zeroPadDigit(n);

    return orders.map(order => {
        const createdDate = new Date(order.createdAt);
        return (
            <div className="row view-order-container" key={order._id}>
                <div className="col-md-4 view-order-left-col p-3">
                    <h2>{order.order_item}</h2>
                    <p>Ordered by: {order.ordered_by || ''}</p>
                </div>
                <div className="col-md-4 d-flex view-order-middle-col">
                    <p>Order placed at {formatDate(createdDate.getHours(),createdDate.getMinutes(),createdDate.getSeconds())}</p>
                    <p>Quantity: {order.quantity}</p>
                </div>
                <div className="col-md-4 view-order-right-col">
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        );
    });
}

export default OrdersList;
