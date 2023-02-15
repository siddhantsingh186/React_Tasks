import React from 'react'
import Card from 'react-bootstrap/Card'

function DisplayCard ({product: {title, description, thumbnail, brand, category, price, rating}}){
    return(
        <Card className="product" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Card.Text>
                Brand - {brand}
            </Card.Text>
            <Card.Text>
                Category - {category}
            </Card.Text>
            <Card.Text>
                Price - {price}
            </Card.Text>
            <Card.Text>
                Rating - {rating}
            </Card.Text>
        </Card.Body>
    </Card>
    );
}

export default DisplayCard;