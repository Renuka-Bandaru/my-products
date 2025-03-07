import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './myProducts.css';

function MyProducts() {
    // created state for various product details
    const [product, setProduct] = useState([])
    const [displayProduct, setDisplayProduct] = useState(false);
    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [item, setItem] = useState([]);

    // fetching product data using fake api

    const getProducts = async () => {
        const newItem = await axios.get("https://fakestoreapi.com/products")
        console.log("newItem", newItem.data)
        setItem(newItem.data)


    }


    // useEffect for mounting phase

    useEffect(() => {
        getProducts()

    }, []);


    // product detailes updated 

    function getId(event) {
        setTitle(event.target.value)
    }

    function getTitle(event) {
        setTitle(event.target.value)
    }

    function getPrice(event) {
        setPrice(event.target.value)
    }

    function getDescription(event) {
        setDescription(event.target.value)
    }

    function getCategory(event) {
        setCategory(event.target.value)
    }

    function getImage(event) {
        setImage(event.target.value)
    }

    // creating a product by using post method and fake api

    async function createProducts() {

        const url = await axios.post("https://fakestoreapi.com/products",
            {
                "id": id,
                "title": title,
                "price": price,
                "description": description,
                "category": category,
                "image": image
            }
        )

        const productList = url.data
        console.log("productList", productList)

        setProduct([...item, productList])
        console.log("updated-list", [...item, productList])

        console.log("item", item)
        setDisplayProduct(true)



    }


    return (
        <div>

            <h1>Create Product</h1>

            <div>
                <label>Id</label>
                <input className='m-3 ' type="text" placeholder='id' onChange={getId} />
            </div>

            <div>
                <label>Title</label>
                <input className='m-3 ' type="text" placeholder='Title' onChange={getTitle} />
            </div>

            <div>
                <label>Price</label>
                <input className='m-3 ' type="text" placeholder='price' onChange={getPrice} />
            </div>

            <div>
                <label>Description</label>
                <input className='m-3 ' type="text" placeholder='description' onChange={getDescription} />
            </div>

            <div>
                <label>category</label>
                <input className='m-3 ' type="text" placeholder='category' onChange={getCategory} />
            </div>

            <div>
                <label>Image</label>
                <input className='m-3 ' type="text" placeholder='image' onChange={getImage} />
            </div>
            <div>
                <button onClick={createProducts}>CreateProduct</button>
            </div>

{/* // here iterating the products using map function */}

            <div className='container'>
                <div className='row'>
                    {product.map(ele => {
                        return (
                            <div className='col-6'>
                                <div className={displayProduct ? "display" : "hide"}>
                                    <div class="card" style={{ width: "18rem" }}>
                                        <img src={ele.image} class="card-img-top" alt="image" />
                                        <div class="card-body">
                                            <h5 class="card-title">{ele.title}</h5>
                                            <p class="card-text">{ele.description}</p>
                                            <p class="card-text">{ele.category}</p>
                                            <p class="card-text">{ele.price}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        )

                    })}
                </div>
            </div>
        </div>
    )

}

export default MyProducts;
