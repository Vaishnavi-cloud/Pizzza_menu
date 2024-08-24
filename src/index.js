import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//never nest the function definition inside the other function!

//In jsx we can't use class but className.
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  //const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  const style = {};

  return (
    /* <h1 style={style} className="header">
      Fast React Piza Co.
    </h1>*/
    <header className="header">
      <h1 style={style}>Fast React pizza Co.</h1>
    </header>
  );
}

//this is how we combine small component pizza into the big component menu then to the other component lik eheader ,footer ,menu into other big component called app
function Menu() {
  const pizzas = pizzaData;

  //const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    //Main reason of reason of using ternary and short circuit here is that if may not be that convinent at times.
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Our menu has different varieties of pizza and different stuff and
            toppins lets join with us and explore them all{" "}
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>we are working on the menu come back later :) </p>
      )}
    </main>
  );
}
// {
//   /* //can put the below li here as well so we may not need prop just we call call by pizza obj

//           // but the good practice is to place the jsx in other component
//           //       <li className="pizza">
//           //   <img src={pizza.photoName} alt={pizza.name} />
//           //   <div>
//           //     <h3>{pizzza.name}</h3>
//           //     <p>{pizza.ingredients}</p>
//           //     <span>{pizza.price + 3}</span>
//           //   </div>
//           // </li>
//         */
// }

// {
//   /* <Pizza
//         name="Pizza Prosciutto"
//         ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
//         photoName="pizzas/prosciutto.jpg"
//         //price="10"
//         price={10}
//       />
//       <Pizza
//         name="Pizza Fungi"
//         ingredients="tomato,mushroom"
//         price={12}
//         photoName="pizzas/funghi.jpg"
//       /> */
// }

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut) return null;
  return (
    //after implementing map for list we acn go by calling the elements through props by props.pizzaObj if pizzaobj is entioned above or else just go for calling
    // <li className="pizza">
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}</span>
      </div>
    </li>
    // <div className="pizza">
    //   <img src={props.photoName} alt={props.name} />
    //   <div>
    //     <h3>{props.name}</h3>
    //     <p>{props.ingredients}</p>
    //     <span>{props.price + 3}</span>
    //   </div>
    // </div>
  );
}
function Footer(props) {
  console.log(props);
  const hour = new Date().getHours();
  const openhr = 12;
  const closehr = 24;
  const isOpen = hour >= openhr && hour <= closehr;
  console.log(isOpen);

  /* if (hour >= openhr && hour <= closehr) {
    alert("We are currently open");
  } else {
    alert("Sorry we are closed");
  }*/
  //return React.createElement("footer", null, "currently using");
  // if (!isOpen) {
  //   return <p>CLOSED</p>;
  // }
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closehr={closehr} openhr={openhr} />
      ) : (
        <p>
          We are happy to welcome you between {openhr}:00 and {closehr}:00 :)
        </p>
      )}
      {/* {new Date().toLocaleTimeString()}.we'r currrenly open */}
    </footer>
  );
  // how to combine js in html
}

function Order({ closehr, openhr }) {
  return (
    <div className="order">
      <p>
        We r open until from {openhr}:00 till {closehr}:00
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//before nvm18
//ReactDom.render() was used.
