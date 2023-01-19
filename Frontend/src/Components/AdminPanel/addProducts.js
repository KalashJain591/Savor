import React from 'react';

const AddProducts = () => {

    const [formData, setformData] = React.useState({
        title: "",
        price: "",
        category: "",
        image: ""
    })

    const handleAdd = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })
       
    }
    return (
        <>
            <form onSubmit={handleAdd}>
                <h1>Add a Product</h1>
                <input onChange={handleAdd} name="title" placeholder="Enter a title" type="text" /> <br />
                <input onChange={handleAdd} name="category" placeholder="Enter a category" type="text" /> <br />
                <input onChange={handleAdd} name="price" placeholder="Enter a Price" type="text" /> <br />
                <input onChange={handleAdd} name="image" placeholder="Enter a image url" type="text" /> <br />
                <input value="ADD PRODUCT" type="submit" />
            </form>
        </>
    )
}

export default AddProducts;