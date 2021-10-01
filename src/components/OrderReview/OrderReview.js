import React from 'react';
import useProducts from '../../hooks/usePd';

const OrderReview = () => {
    const [products,setProducts ] = useProducts();

    return (
        <div>
            <h1>{products.length} </h1>
            <h2>This is Order Review</h2>
        </div>
    );
};

export default OrderReview;