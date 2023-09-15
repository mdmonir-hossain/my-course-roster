import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // State
  const [carddata, setCarddata] = useState([]);
  const [selectcourse, setSelectcourse] = useState([]);
  const [totalcreditcourse, setTotalcreditcourse] = useState(0);
  const [reaminingcreditcourse, setReaminingcreditcourse] = useState(20);
  const [totalprice, setTotalprice] = useState(0);

  // side efect 
  useEffect(() => {
    //fetch json data
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setCarddata(data));
  }, []);

  // multi select  condition
  const handleCart = (course) => {
    const isSelected = selectcourse.find(
      (courselected) => courselected.id == course.id
    );
    //initial value
    let totalcredit = course.credit;
    let totalPriceCourse = course.price;

    // if Condition true
    if (isSelected) {
      return toast("Already Selected");
    } else {
      selectcourse.forEach((total) => {
        totalcredit = totalcredit + total.credit;
      });

      // total price calculation 
      selectcourse.forEach((totalPrice) => {
        totalPriceCourse = totalPriceCourse + totalPrice.price;
      });
    }
// total credit condition if greater than 20 hrs
    if (totalcredit > 20) {
      return toast("Credit can not be greater than 20 hrs");
    }
    // remaining credit calculation
    const reaminingcredit = 20 - totalcredit;

    // set Total Price,Remaining Credit,Total Credit,Select course
    setTotalprice(totalPriceCourse);
    setReaminingcreditcourse(reaminingcredit);
    setTotalcreditcourse(totalcredit);
    setSelectcourse([...selectcourse, course]);
  };

  return (
    <>
      <div className="flex justify-center">
        <Header></Header>
        <ToastContainer />
      </div>
      <div className="flex flex-wrap-reverse lg:flex-nowrap justify-between p-10">
        <Card carddata={carddata} handleCart={handleCart}></Card>
        <Cart
          selectcourse={selectcourse}
          totalcreditcourse={totalcreditcourse}
          reaminingcreditcourse={reaminingcreditcourse}
          totalprice={totalprice}
        ></Cart>
      </div>
    </>
  );
}

export default App;
