import React from 'react';
import './Products.css'
import Card from 'react-bootstrap/Card';
import { productData } from './productData';
function ProductList () {
    
  return (
    <div>
      <h1>Fake Store Products</h1>
        <div className="products">
            {productData['products'].map(({id, images, title, brand, category, description, price, rating}) => {
                return (
                    <Card style={{ width: '18rem' }} key = {id}>
                        <Card.Img variant="top" src={images[0]} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                Brand - {brand}
                            </Card.Text>
                            <Card.Text>
                                Category - {category}
                            </Card.Text>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Card.Text>
                                {price}
                            </Card.Text>
                            <Card.Text>
                                {rating}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>   
    </div>
  );
}
export default ProductList;
