import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import { useEffect } from "react";

function App() {
  const [carddata, setCarddata] = useState([]);
  
  useEffect(() => {
    fetch('./course.json')
      .then(res => res.json())
    .then(data => setCarddata(data))
  }, [])

  return (
    <>
      <div className="flex justify-center">
        <Header></Header>
      </div>
      <div className="flex justify-between p-10">
        <Card carddata={carddata}></Card>
        <Cart></Cart>
      </div>
    </>
  );
}

export default App;
