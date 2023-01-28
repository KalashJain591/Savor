import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const MyVerticallyCenteredModal = (props) => {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [getData, setGetData] = useState({
        images: "",
        name: "",
        description: "",
        price: 0,
        stock: "",
        category: "",
        feature: "",
        rating: "",
        reviews: ""
    })
    const callapi = async () => {
        
        await axios.get(`/product/${props._id}`)
            .then((res) => {
                console.log("hello", res.data);
                setDataSource(res.data);
                const productData = {
                    images:res.data.images,
                    name:res.data.name,
                    description:res.data.description,
                    price:res.data.price,
                    stock:res.data.stock,
                    category:res.data.category,
                    feature:res.data.feature,
                    rating:res.data.rating,
                    reviews:res.data.reviews
                }
                setGetData(productData);
            })
    }

    useEffect(() => {
        setLoading(true);
        callapi();
        // console.log(props)
        // getInventory().then((res) => {
        //   setDataSource(res.products);
        // });
        setLoading(false);
    }, []);
    // useEffect(() => {
    //     console.log("GD", props);
    // }, [getData]);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {getData.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MyVerticallyCenteredModal

