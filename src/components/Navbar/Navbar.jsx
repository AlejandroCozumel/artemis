// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FiMenu } from "react-icons/fi";
// import { FaShoppingCart } from "react-icons/fa";
// // import logoNav from "../assets/images/daliaLogo.png"
// import "./navbar.scss";

// const Navbar = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-center">
//           <div className="nav-header">
//             <Link to="/">
//               <img src={logoNav} alt="Dalia logo" />
//             </Link>
//             <button className="nav-btn" onClick={() => setShow(!show)}>
//               <FiMenu />
//             </button>
//           </div>
//           <div className={show ? "nav-links show-links" : "nav-links"}>
//             <Link
//               to="/"
//               className="nav-link"
//               activeClassName="active-link"
//               onClick={() => setShow(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/dalia-circle"
//               className="nav-link"
//               activeClassName="active-link"
//               onClick={() => setShow(false)}
//             >
//               Membresía
//             </Link>
//             <Link
//               to="/dalia-media"
//               className="nav-link"
//               activeClassName="active-link"
//               onClick={() => setShow(false)}
//             >
//               News+Media
//             </Link>
//             <a
//               className="nav-link"
//               href="https://academy.daliaempower.com/"
//               rel="noreferrer"
//             >
//               Academy
//             </a>
//             <Link
//               to="/method"
//               className="nav-link"
//               activeClassName="active-link"
//               onClick={() => setShow(false)}
//             >
//               Metodología
//             </Link>
//             <Link
//               to="/company"
//               className="nav-link"
//               activeClassName="active-link"
//               onClick={() => setShow(false)}
//             >
//               Empresa
//             </Link>
//             <Link
//               to="/about-us"
//               className="nav-link"
//               activeClassName="active-link"
//               onClick={() => setShow(false)}
//             >
//               Por qué Dalia
//             </Link>
//             <Link
//               to="/contacto"
//               className="nav-link"
//               activeClassName="active-link"
//               onClick={() => setShow(false)}
//             >
//               Contacto
//             </Link>
//           </div>
//           <div
//             className={show ? "nav-links show-links" : "nav-link contact-link"}
//           >
//             <a
//               className="cart-text"
//               href="https://academy.daliaempower.com/es/register"
//               rel="noreferrer"
//               onClick={() => setShow(false)}
//             >
//               Registro
//             </a>
//             <a
//               className="cart-icon"
//               href="https://academy.daliaempower.com/es/checkout/cart"
//               rel="noreferrer"
//               onClick={() => setShow(false)}
//             >
//               <FaShoppingCart />
//             </a>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
