import { useState } from "react";
import Pizza from "./Component/pizza";
import Header from "./Component/header";
import Menu from "./Component/menu";
import Footer from "./Component/footer";
import "./app.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
