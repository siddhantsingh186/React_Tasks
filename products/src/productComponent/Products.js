import React from 'react';
import './Products.css'
import GetProductList from '../APIcalls/GetProductList';
import { useState } from 'react';
import SearchProducts from '../SearchFilter/SearchProducts';
import DisplayCard from '../DisplayComponent/DisplayComponent';
function ProductList () {
    const {loading, productsList} = GetProductList();
    const [filteredProducts, setFilteredProducts] = useState([]);
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
        <SearchProducts products = {productsList} setFilteredProducts={setFilteredProducts} />
            <div className="products">
                {filteredProducts.length > 0 ? (filteredProducts.map(({id, thumbnail, title, brand, description, category, price, rating}) => (
                    <DisplayCard 
                        key={id} 
                        id={id} 
                        thumbnail={thumbnail} 
                        title={title} 
                        brand={brand} 
                        description={description} 
                        category={category} 
                        price={price} 
                        rating={rating} />
                ))) : (productsList['products'].map(({id, thumbnail, title, brand, description, category, price, rating}) => (
                    <DisplayCard 
                        key={id} 
                        id={id} 
                        thumbnail={thumbnail} 
                        title={title} 
                        brand={brand} 
                        description={description} 
                        category={category} 
                        price={price} 
                        rating={rating} />
                )))}
            </div>   
        </div>
    );
}
export default ProductList;
