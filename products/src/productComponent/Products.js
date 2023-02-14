import React from 'react';
import './Products.css'
import Card from 'react-bootstrap/Card';
import { productData } from './productData';
function Getproducts () {
    
  return (
    <div>
      <h1>Fake Store Products</h1>
        <div className="products">
            {productData['products'].map((product) => {
                return (
                    <Card style={{ width: '18rem' }} key = {product.id}>
                        <Card.Img variant="top" src={product.images[0]} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                Brand - {product.brand}
                            </Card.Text>
                            <Card.Text>
                                Category - {product.category}
                            </Card.Text>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Card.Text>
                                {product.price}
                            </Card.Text>
                            <Card.Text>
                                {product.rating}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>   
    </div>
  );
}
export default Getproducts;
