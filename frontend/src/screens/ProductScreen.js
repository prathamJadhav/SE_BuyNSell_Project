import React, {useState, useEffect} from 'react'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import axios from 'axios'



const ProductScreen = ({match}) => {

    const [product, setProduct] = useState({})

    useEffect(()=>{
      const  fetchProduct = async()=>{
          
        const {data} = await axios.get(`/api/products/${match.params.id}`)  

        setProduct(data)
      }

      fetchProduct()
    },[])

    return (
        <>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            
            </Col>
            <Col  md={3}>
                <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    Description : {product.description}
                </ListGroup.Item>
                <ListGroup.Item>
                    Address : {product.Address}
                </ListGroup.Item>

                <ListGroup.Item>
                    Product list Here
                </ListGroup.Item>

                </ListGroup>
               
            </Col>
            <Col md={2}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                <strong>
                                    {product.chk}
                                </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                      

                    </ListGroup>
                </Card>
            
            </Col>
        </Row>
           
        </>
    )
}

export default ProductScreen
