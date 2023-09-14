import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import { useEffect } from "react";

function App() {
  const [carddata, setCarddata] = useState([]);
  const [selectcourse, setSelectcourse] = useState([]);
  
  useEffect(() => {
    fetch('./course.json')
      .then(res => res.json())
    .then(data => setCarddata(data))
  }, [])
const handleCart=(course)=>{
  const isSelected = selectcourse.find((courselected) => courselected.id == course.id);
  if (isSelected) {
    return alert('aready Select');
  }
  setSelectcourse([...selectcourse,course])
}

  return (
    <>
      <div className="flex justify-center">
        <Header></Header>
      </div>
      <div className="flex justify-between p-10">
        <Card carddata={carddata} handleCart={handleCart}></Card>
        <Cart selectcourse={selectcourse} ></Cart>
      </div>
    </>
  );
}

export default App;
