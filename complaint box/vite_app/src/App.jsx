// import React, { useState } from "react";
// import "./App.css";
// import "./video231.mp4"

// const products = [
//   { id: 1, name: "Summer Dress", category: "Casual Wear", price: 200  , image: "https://m.media-amazon.com/images/I/814TU2aLEUL._AC_UY1100_.jpg" },
//   { id: 2, name: "Office Blazer", category: "Formal Wear", price: 550, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WHDqp2RcvNG82PbYXC9Qd-JvdiZ1TxC5mA&s" },
//   { id: 3, name: "Traditional Kurta", category: "Ethnic Wear", price: 344, image: "https://img.faballey.com/images/Product/RTN00078Z/d3.jpg" },
//   { id: 4, name: "Running Shoes", category: "Active Wear", price: 443, image: "https://5.imimg.com/data5/ECOM/Default/2024/7/436910652/LD/TG/WK/65771136/sports-casual-shoes-for-men-ordermefirst-8314-500x500.webp" },
//   { id: 5, name: "Maxi Dress", category: "Casual Wear", price: 422, image: "https://www.libas.in/cdn/shop/files/37200_67f5971f-5f98-48e4-a88e-a815752b7a3f.jpg?v=1725603528&width=1080" },
//   { id: 6, name: "Formal Suit", category: "Formal Wear", price: 644, image: "https://cottinfab.com/cdn/shop/files/DSS1273B_1.jpg?v=1706979906" },
//   { id: 7, name: "Lehenga", category: "Ethnic Wear", price: 956, image: "https://img.faballey.com/images/Product/XLH02830Z/d3.jpg" },
//   { id: 8, name: "Yoga Pants", category: "Active Wear", price: 264, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Vsfm2JiFGqTTEsz-pprUdCg0rujCxHaWkg&s" },
//   { id: 9, name: "Casual T-Shirt", category: "Casual Wear", price: 176, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yZT6Y5y9CHGfBpT2Vzfs0IB2KaluAilwbQ&s" },
//   { id: 10, name: "Evening Gown", category: "Formal Wear", price: 864, image: "https://m.media-amazon.com/images/I/611m-E8RmzL._AC_UY1100_.jpg" },
// ];



// const Homepage = () => {
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div className="homepage">

// {/* <video autoPlay loop muted className="background-video">
// <source src="/video231.mp4" type="video231.mp4" /> */}
//       {/* Header and Banner */}
//       <header className="banner">
   
//         <h1>Welcome to Fashion Haven</h1>
//         <p>Your one-stop destination for stunning outfits and accessories.</p>
//         <div className="discounts">
//           <span>Exclusive Deals: Up to 50% OFF on Selected Items!</span>
//         </div>
//       </header>

//       {/* Product Listings */}
//       <div className="products">
//         {products.map((product) => (
//           <div key={product.id} className="product">
//             <img src={product.image} alt={product.name} className="product-image" />
//             <h3>{product.name}</h3>
//             <p>Price: ${product.price.toFixed(2)}</p>
//             <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; instagram.</p>
//         <p>&copy; facebook.</p>
//         <p>&copy; email: fashion@132gmail.com.</p>
//         <p>&copy; contact number: xxxxxxxxxxx.</p>
//         <p>&copy; Address:sfgsdkfbs,kaksjbfks.df.</p>
//         <p>&copy; Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, neque..</p>
//         <p>&copy; Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium autem, eius recusandae cupiditate tempore exercitationem explicabo sunt. Maxime, blanditiis!.</p>
//         <p>&copy; 2024 Fashion Haven. Designed to bring style and comfort to your wardrobe.</p>
//       </footer>
//     </div>
//   );
// };

// export default Homepage;


// import React, { useState } from "react";
// import "./App.css";
// import "./QASection.css";

// const products = [
//   { id: 1, name: "Summer Dress", category: "Casual Wear", price: 200, image: "https://m.media-amazon.com/images/I/814TU2aLEUL._AC_UY1100_.jpg" },
//   { id: 2, name: "Office Blazer", category: "Formal Wear", price: 550, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WHDqp2RcvNG82PbYXC9Qd-JvdiZ1TxC5mA&s" },
//   { id: 3, name: "Traditional Kurta", category: "Ethnic Wear", price: 344, image: "https://img.faballey.com/images/Product/RTN00078Z/d3.jpg" },
//   { id: 4, name: "Running Shoes", category: "Active Wear", price: 443, image: "https://5.imimg.com/data5/ECOM/Default/2024/7/436910652/LD/TG/WK/65771136/sports-casual-shoes-for-men-ordermefirst-8314-500x500.webp" },
//   { id: 5, name: "Maxi Dress", category: "Casual Wear", price: 422, image: "https://www.libas.in/cdn/shop/files/37200_67f5971f-5f98-48e4-a88e-a815752b7a3f.jpg?v=1725603528&width=1080" },
//   { id: 6, name: "Formal Suit", category: "Formal Wear", price: 644, image: "https://cottinfab.com/cdn/shop/files/DSS1273B_1.jpg?v=1706979906" },
//   { id: 7, name: "Lehenga", category: "Ethnic Wear", price: 956, image: "https://img.faballey.com/images/Product/XLH02830Z/d3.jpg" },
//   { id: 8, name: "Yoga Pants", category: "Active Wear", price: 264, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Vsfm2JiFGqTTEsz-pprUdCg0rujCxHaWkg&s" },
//   { id: 9, name: "Casual T-Shirt", category: "Casual Wear", price: 176, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yZT6Y5y9CHGfBpT2Vzfs0IB2KaluAilwbQ&s" },
//   { id: 10, name: "Evening Gown", category: "Formal Wear", price: 864, image: "https://m.media-amazon.com/images/I/611m-E8RmzL._AC_UY1100_.jpg" },
// ];

// const FAQS = [
//   {
//     question: "What is the return policy for dresses?",
//     answer: "You can return dresses within 30 days of purchase, provided they are unused and in original packaging.",
//   },
//   {
//     question: "Do you offer custom tailoring services?",
//     answer: "Yes, we offer custom tailoring for select dresses. Please contact our customer service for more details.",
//   },
//   {
//     question: "What are the washing instructions for ethnic wear?",
//     answer: "We recommend dry cleaning for all ethnic wear to maintain their fabric quality and embellishments.",
//   },
//   {
//     question: "How can I know my dress size?",
//     answer: "You can check our detailed size chart available on each product page to find the perfect fit.",
//   },
//   {
//     question: "What is the average delivery time for orders?",
//     answer: "Delivery typically takes 3-7 business days, depending on your location.",
//   },
// ];

// const QASection = () => {
//   const [selectedQuestion, setSelectedQuestion] = useState(null);

//   const toggleQuestion = (index) => {
//     setSelectedQuestion(selectedQuestion === index ? null : index);
//   };

//   return (
//     <div className="qa-section">
//       <h2>Frequently Asked Questions</h2>
//       <div className="qa-list">
//         {FAQS.map((faq, index) => (
//           <div key={index} className="qa-item">
//             <div
//               className={`qa-question ${selectedQuestion === index ? "active" : ""}`}
//               onClick={() => toggleQuestion(index)}
//             >
//               {faq.question}
//             </div>
//             {selectedQuestion === index && <div className="qa-answer">{faq.answer}</div>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Homepage = () => {
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div className="homepage">
//       {/* Header and Banner */}
//       <header className="banner">
//         <h1>Welcome to Fashion Haven</h1>
//         <p>Your one-stop destination for stunning outfits and accessories.</p>
//         <div className="discounts">
//           <span>Exclusive Deals: Up to 50% OFF on Selected Items!</span>
//         </div>
//       </header>

//       {/* Product Listings */}
//       <div className="products">
//         {products.map((product) => (
//           <div key={product.id} className="product">
//             <img src={product.image} alt={product.name} className="product-image" />
//             <h3>{product.name}</h3>
//             <p>Price: ${product.price.toFixed(2)}</p>
//             <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Q&A Section */}
//       <QASection />

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2024 Fashion Haven. Designed to bring style and comfort to your wardrobe.</p>
//       </footer>
//     </div>
//   );
// };

// export default Homepage;




import React, { useState } from "react";
import "./App.css";
import "./QASection.css";

const products = [
  { id: 1, name: "Summer Dress", category: "Casual Wear", price: 200, image: "https://m.media-amazon.com/images/I/814TU2aLEUL._AC_UY1100_.jpg" },
  { id: 2, name: "Office Blazer", category: "Formal Wear", price: 550, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WHDqp2RcvNG82PbYXC9Qd-JvdiZ1TxC5mA&s" },
  { id: 3, name: "Traditional Kurta", category: "Ethnic Wear", price: 344, image: "https://img.faballey.com/images/Product/RTN00078Z/d3.jpg" },
  { id: 4, name: "Running Shoes", category: "Active Wear", price: 443, image: "https://5.imimg.com/data5/ECOM/Default/2024/7/436910652/LD/TG/WK/65771136/sports-casual-shoes-for-men-ordermefirst-8314-500x500.webp" },
  { id: 5, name: "Maxi Dress", category: "Casual Wear", price: 422, image: "https://www.libas.in/cdn/shop/files/37200_67f5971f-5f98-48e4-a88e-a815752b7a3f.jpg?v=1725603528&width=1080" },
  { id: 6, name: "Formal Suit", category: "Formal Wear", price: 644, image: "https://cottinfab.com/cdn/shop/files/DSS1273B_1.jpg?v=1706979906" },
  { id: 7, name: "Lehenga", category: "Ethnic Wear", price: 956, image: "https://img.faballey.com/images/Product/XLH02830Z/d3.jpg" },
  { id: 8, name: "Yoga Pants", category: "Active Wear", price: 264, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Vsfm2JiFGqTTEsz-pprUdCg0rujCxHaWkg&s" },
  { id: 9, name: "Casual T-Shirt", category: "Casual Wear", price: 176, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yZT6Y5y9CHGfBpT2Vzfs0IB2KaluAilwbQ&s" },
  { id: 10, name: "Evening Gown", category: "Formal Wear", price: 864, image: "https://m.media-amazon.com/images/I/611m-E8RmzL._AC_UY1100_.jpg" },
];

const FAQS = [
  {
    question: "What is the return policy for dresses?",
    answer: "You can return dresses within 30 days of purchase, provided they are unused and in original packaging.",
  },
  {
    question: "Do you offer custom tailoring services?",
    answer: "Yes, we offer custom tailoring for select dresses. Please contact our customer service for more details.",
  },
  {
    question: "What are the washing instructions for ethnic wear?",
    answer: "We recommend dry cleaning for all ethnic wear to maintain their fabric quality and embellishments.",
  },
  {
    question: "How can I know my dress size?",
    answer: "You can check our detailed size chart available on each product page to find the perfect fit.",
  },
  {
    question: "What is the average delivery time for orders?",
    answer: "Delivery typically takes 3-7 business days, depending on your location.",
  },
];

const QASection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className="qa-section">
      <h2>Frequently Asked Questions</h2>
      <div className="qa-list">
        {FAQS.map((faq, index) => (
          <div key={index} className="qa-item">
            <div
              className={`qa-question ${selectedQuestion === index ? "active" : ""}`}
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
            </div>
            {selectedQuestion === index && <div className="qa-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

const Homepage = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="homepage">
     
      <nav className="navbar">
        <div className="nav-links">
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <button className="login-button">Login</button>
        </div>
      </nav>

      <header className="banner">
        <h1>Welcome to Fashion Heaven</h1>
        <p>Your one-stop destination for stunning outfits and accessories.</p>
        <div className="discounts">
          <span>Exclusive Deals: Up to 50% OFF on Selected Items!</span>
        </div>
      </header>

      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

    
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <QASection />

  
      <footer className="footer">
      <p>&copy; instagram.</p>
        <p>&copy; facebook.</p>
        <p>&copy; email: fashion@132gmail.com.</p>
         <p>&copy; contact number: xxxxxxxxxxx.</p>
        <p>&copy; Address:sfgsdkfbs,kaksjbfks.df.</p>
       <p>&copy; Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, neque..</p>
        <p>&copy; Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium autem, eius recusandae cupiditate tempore exercitationem explicabo sunt. Maxime, blanditiis!.</p>
        <p>&copy; 2024 Fashion Haven. Designed to bring style and comfort to your wardrobe.</p>
      </footer>
    </div>
  );
};

export default Homepage;

