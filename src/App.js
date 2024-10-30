import React, { useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { Link, Route,Routes } from 'react-router-dom';
import { Router,Switch } from 'react-router-dom';
const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>Price: ₹{product.price}</p>
          <p>Quantity Available: {product.quantity}</p>
          <button 
            onClick={() => addToCart(product)} 
            disabled={product.quantity === 0}
          >
            {product.quantity > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      ))}
    </div>
  );
};

const Cart = ({ cart, updateCartQuantity, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <p>{item.name} - ₹{item.price} x {item.quantityInCart}</p>
            <div className="quantity-controls">
              <button 
                onClick={() => updateCartQuantity(item.id, -1)} 
                disabled={item.quantityInCart <= 1}
              >
                -
              </button>
              <span>{item.quantityInCart}</span>
              <button 
                onClick={() => updateCartQuantity(item.id, 1)} 
                disabled={item.quantityInCart >= item.quantity}
              >
                +
              </button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
const App = () => {



const [products,setProducts]=useState([
  {j:0,
    r:1,
    id: 1,
    name: "Milk",
    category: "Apple",
    price: 75000,
    quantity: 50,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Aavin.jpg?alt=media&token=e36407ee-5d72-475d-bbd0-227e9c840022'
  },
  {j:0,
    r:1,
    id: 2,
    name: "Amul",
    category: "Samsung",
    price: 25000,
    quantity: 200,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Amul.jpg?alt=media&token=a2915944-c63d-4fd1-9313-b3fc45eb685b'
  },
  {j:0,
    r:1,
    id: 3,
    name: "cavin's curd",
    category: "Vivo",
    price: 15000,
    quantity: 150,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Cavins.jpg?alt=media&token=afc3c802-5beb-4351-9bd6-618319f54cf0'
  },
  {j:0,
    r:1,
    id: 4,
    name: "Daawat",
    category: "Apple",
    price: 130000,
    quantity: 150,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Daawat.jpg?alt=media&token=4d8c4ee5-4433-40a3-b7ac-b725535a4bb5'  },
  {j:0,
    r:1,
    id: 5,
    name: "Hatsun",
    category: "Dell",
    price: 85000,
    quantity: 300,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Hatsun.webp?alt=media&token=7d7bb1bd-ea15-4da5-960e-d9a9f2a2d56b'  },
  {j:0,
    r:2,
    id: 6,
    name: "Heritage",
    category: "Hp",
    price: 60000,
    quantity: 200,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Heritage.webp?alt=media&token=4de2b071-dd4c-4575-bafc-95954e0da00c'  },
  {j:0,
    r:2,
    id: 7,
    name: "India gate",
    category: "Footwear",
    price: 2000,
    quantity: 10,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Indian%20Gate.jpg?alt=media&token=04a3b400-06c6-49f3-b3f7-48f283d385bd'  },
  {j:0,
    r:2,
    id: 8,
    name: "India gate",
    category: "Footwear",
    price: 3000,
    quantity: 20,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Indiangate.jpg?alt=media&token=9e3bb182-7689-4663-9a1b-ad89c23203c0'  },
  {j:0,
    r:2,
    id: 9,
    name: "kohinoor",
    category: "Footwear",
    price: 500,
    quantity: 30,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Kohinoor.jpg?alt=media&token=95d73f9e-8ed0-4cd4-a0c8-27399118385f'  },
  {j:0,
    r:2,
    id: 10,
    name: "nestle",
    category: "Fruits",
    price: 80,
    quantity: 100,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Nestle.jpg?alt=media&token=f02c68d1-1637-4372-b26a-cff5a97eed4a'  },
  {j:0,
    r:3,
    id: 11,
    name: "nestle",
    category: "Fruits",
    price: 20,
    quantity: 100,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Nestle.jpg?alt=media&token=f02c68d1-1637-4372-b26a-cff5a97eed4a'  },
  {j:0,
    r:3,
    id: 12,
    name: "Adidas",
    category: "Fruits",
    price: 40,
    quantity: 120,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/adidas.jpg?alt=media&token=dd256c13-e339-4119-a94b-9d649600da3e'  },
  {j:0,
    r:3,
    id: 13,
    name: "iphone",
    category: "Vegetables",
    price: 50,
    quantity: 100,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/apple.jpeg?alt=media&token=103f5804-e1e2-4c37-bb43-6671a4804daa'  },
  {j:0,
    r:3,
    id: 14,
    name: "Apple",
    category: "Vegetables",
    price: 30,
    quantity: 110,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/apple.jpg?alt=media&token=d5778af5-05f5-4f10-a2e5-3d06fd09c71a'  },
  {j:0,
    r:3,
    id: 15,
    name: "Macbook",
    category: "Vegetables",
    price: 40,
    quantity: 100,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/apple_lap.jpeg?alt=media&token=89388cfe-3844-4174-8c60-434402bb0bb9'  },
  {j:0,
    r:4,
    id: 16,
    name: "Banana",
    category: "Brush",
    price: 20,
    quantity: 100,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/banana.jpg?alt=media&token=def7accb-7c71-42a3-b279-3781aa9ee479'
  },
  {j:0,
    r:4,
    id: 17,
    name: "Shoe",
    category: "Brush",
    price: 25,
    quantity: 100,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/bata.png?alt=media&token=f62876f9-ad78-47a2-a1da-fa8be8bc0aa8'
  },
  {j:0,
    r:4,
    id: 18,
    name: "closeup",
    category: "Hairoil",
    price: 250,
    quantity: 50,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/closeup.jpeg?alt=media&token=0287c67e-57c5-4886-b653-9312099841a5'
  },
  {j:0,
    r:4,
    id: 19,
    name: "colgate",
    category: "Hairoil",
    price: 200,
    quantity: 30,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/colgate.jpeg?alt=media&token=f862fd7a-1da0-4c15-ba6b-0b87f96136d8'
  },
  {j:0,
    r:4,
    id: 20,
    name: "colgate brush",
    category: "Hairoil",
    price: 350,
    quantity: 150,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/colgate.png?alt=media&token=186e7dc5-b245-4e7b-83a6-54beb478222b'
  },
  {j:0,
    r:5,
    id: 21,
    name: "Dell",
    category: "Toothpaste",
    price: 70,
    quantity: 150,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/dell.jpeg?alt=media&token=b76571ec-cb66-48f9-b6ae-87f4aec62178'
  },
  {j:0,
    r:5,
    id: 22,
    name: "Dairy milk",
    category: "Toothpaste",
    price: 80,
    quantity: 100,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/diarymilk.jpeg?alt=media&token=8acb654b-c06a-4a9d-a921-7f8c664def87'
  },
  {j:0,
    r:5,
    id: 23,
    name: "Fortune",
    category: "Toothpaste",
    price: 100,
    quantity: 70,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/fortune.jpeg?alt=media&token=8ab7bdfc-f380-4471-9043-22c3d4ebadc1'
  },
  {j:0,
    r:5,
    id: 24,
    name: "Fortune",
    category: "Biscuits",
    price: 10,
    quantity: 20,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/fortune.jpeg?alt=media&token=8ab7bdfc-f380-4471-9043-22c3d4ebadc1'
  },
  {j:0,
    r:5,
    id: 25,
    name: "gold winner",
    category: "Biscuits",
    price: 20,
    quantity: 30,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/goldwinner.jpeg?alt=media&token=23c90aa8-441f-4ae8-bb3b-cd2dc665a64c'
  },
  {j:0,
    r:6,
    id: 26,
    name: "HP laptop",
    category: "Biscuits",
    price: 30,
    quantity: 20,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/hp.jpeg?alt=media&token=d7975782-7e9d-4884-b58f-12451886c462'
  },
  {j:0,
    r:6,
    id: 27,
    name: "indulekha",
    category: "Cooking Oil",
    price: 100,
    quantity: 20,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/indulekha.jpeg?alt=media&token=396e3886-2e7d-491b-bf89-703ca0dace2a'
  },
  {j:0,
    r:6,
    id: 28,
    name: "kitkat",
    category: "Cooking Oil",
    price: 100,
    quantity: 25,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/kitkat.jpeg?alt=media&token=0f927701-2a46-40f8-a006-16b52177ca8f'
  },
  {j:0,
    r:6,
    id: 29,
    name: "marie gold",
    category: "Cooking Oil",
    price: 130,
    quantity: 20,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/marie_gold.jpeg?alt=media&token=72b93262-d8c2-4113-9421-d27478967f65'
  },
  {j:0,
    r:6,
    id: 30,
    name: "milk bikis",
    category: "Chocolates",
    price: 40,
    quantity: 50,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/milkbikies.jpeg?alt=media&token=53c3b9b0-5125-4e1f-a4ef-629911a09264'
  },
  {j:0,
    r:7,
    id: 31,
    name: "Munch",
    category: "Chocolates",
    price: 20,
    quantity: 80,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/munch.jpeg?alt=media&token=4359d46e-56cf-4135-9da5-0b2fa92d4586'
  },
  {j:0,
    r:7,
    id: 32,
    name: "Nike",
    category: "Chocolates",
    price: 20,
    quantity: 60,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/nike.jpg?alt=media&token=062363cb-08bf-4354-a38d-83508fb8933b'
  },
  {j:0,
    r:7,
    id: 33,
    name: "onion",
    category: "Rice",
    price: 250,
    quantity: 25,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/onion.jpg?alt=media&token=be76733f-c46b-4e5c-8367-eebc7b4565ff'
  },
  {j:0,
    r:7,
    id: 34,
    name: "orange",
    category: "Rice",
    price: 200,
    quantity: 20,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/orange.jpg?alt=media&token=4f3d8fe4-67c8-4ad6-88b9-e87f3df9cb52'
  },
  {j:0,
    r:7,
    id: 35,
    name: "oreo",
    category: "Rice",
    price: 300,
    quantity: 30,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/oreo.jpg?alt=media&token=712304fc-6c1f-4ca5-875f-e23e5df1e404'
  },
  {j:0,
    r:8,
    id: 36,
    name: "potato",
    category: "Curd",
    price: 30,
    quantity: 50,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/potato.jpg?alt=media&token=53781db7-403e-4e68-8ba5-b5891638ef0a'
  },
  {j:0,
    r:8,
    id: 37,
    name: "samsung",
    category: "Curd",
    price: 30,
    quantity: 60,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/samsung.jpg?alt=media&token=fcf8c30b-4032-4478-98cb-fc3495dfaf28'
  },
  { j:0,
    r:8,
    id: 38,
    name: "sensodyne brush",
    category: "Milk",
    price: 25,
    quantity: 75,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/sensodyne.jpeg?alt=media&token=06cf39d8-faaf-4e8a-af44-ea15d4bfd0da'
  }
])


const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (productId, quantity) => {
    const product = products.find((p) => p.id === productId);
    if (product && product.quantity >= quantity) {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === productId);
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }
        return [...prevCart, { id: productId, quantity }];
      });
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity - quantity } : p
        )
      );
      alert("successfully added,go and change quantity size to cart")
    } else {
      alert("Not enough stock available!");
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        setProducts((prevProducts) =>
          prevProducts.map((p) =>
            p.id === productId
              ? { ...p, quantity: p.quantity + existingItem.quantity }
              : p
          )
        );
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart;
    });
  };

  const updateCartQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        const difference = newQuantity - existingItem.quantity;
        if (difference > 0) {
          const product = products.find((p) => p.id === productId);
          if (product && product.quantity >= difference) {
            setProducts((prevProducts) =>
              prevProducts.map((p) =>
                p.id === productId
                  ? { ...p, quantity: p.quantity - difference }
                  : p
              )
            );
          } else {
            alert("Not enough stock available!");
            return prevCart;
          }
        } else if (difference < 0) {
          setProducts((prevProducts) =>
            prevProducts.map((p) =>
              p.id === productId
                ? { ...p, quantity: p.quantity + Math.abs(difference) }
                : p
            )
          );
        }
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        );
      }
      return prevCart;
    });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
   
      <div className="app">
        <nav>
          <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <h1 style={{textAlign:'center'}}>Supermarket products search</h1>

              <input
                type="text"
                placeholder="Search Products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
                style={{width:'30%',height:'50%'}}
              />

              <h2>Products</h2>
              <div className="product-list">
                {filteredProducts.map((product) => (
                  <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>Available Row: {product.r}</p>
                    <p>Available Quantity: {product.quantity}</p>
                    {product.quantity === 0 ? (
                      <span className="out-of-stock">Out of Stock</span>
                    ) : (
                      <button onClick={() => addToCart(product.id, 1)}>Add to Cart</button>
                    )}
                  </div>
                ))}
              </div>
            </>
          } />

          <Route path="/cart" element={
            <>
              <h1>Cart</h1>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ul className="cart-list">
                  {cart.map((item) => (
                    <li className="cart-item" key={item.id}>
                      <img src={products.find((p) => p.id === item.id)?.image} alt={products.find((p) => p.id === item.id)?.name} />
                      <span>
                        {products.find((p) => p.id === item.id)?.name} (Quantity:{" "}
                        {item.quantity})
                      </span>
                      <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                      <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>
                      <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          } />
        </Routes>
      </div>
    
  );
};

export default App;