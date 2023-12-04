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

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "30px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza, index) => (
            <Pizza pizzaObject={pizza} key={index} />
          ))}
        </ul>
      )}
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const OpenHour = 12;
  const CloseHour = 22;
  const isOpened = hour >= OpenHour && hour <= CloseHour;
  return (
    <footer className="footer">
      <div className="order">
        {new Date().toLocaleTimeString()}
        {isOpened && <p>We're cruntly opend.</p>}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function Pizza({ pizzaObject }) {
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt="focaccia" />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>10</span>
      </div>
    </li>
  );
}

export default App;
