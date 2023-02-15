import React from 'react';
import './Products.css'
import GetProductList from '../APIcalls/GetProductList';
import { useState } from 'react';
import SearchProducts from '../SearchFilter/SearchProducts';
import DisplayCard from '../DisplayComponent/DisplayComponent';
function ProductList () {
    const {loading, productsList} = GetProductList();
    const [search, setSearch] = useState("");
    if(!productsList){
        alert("No products found");
        return null;
    }

    if (loading) {
        return <div className="loader"></div>
    }

    return (
        <div>
        <h1>Fake Store Products</h1>
        <SearchProducts setSearch={setSearch}/>
            <div className="products">
                {productsList['products'].map((product, index) => {
                    if(product.title.toLowerCase().includes(search)){
                        return <DisplayCard product = {product} key={index}/>
                    }
                    return null;
                })}
            </div>   
        </div>
    );
}
export default ProductList;
