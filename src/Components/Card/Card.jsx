import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";

const Card = ({ carddata,handleCart }) => {
  return (
    <div className="lg: w-[75%] grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
      {carddata.map((Courseinfo) => (
        <div key={Courseinfo.id} className="cart">
          <div className="card card-compact  bg-base-100 shadow-xl p-2 ">
            <figure>
              <img src={Courseinfo.cover} alt="Cover" />
            </figure>
            <div className="card-body">
              <h2 className="text-xl h-10 font-bold mb-2">{Courseinfo.title}</h2>
              <p>{Courseinfo.details}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 p-2">
                <FiDollarSign />
                <span>Price:{Courseinfo.price}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <BsBook />
                <span>Credit:{Courseinfo.credit} hr</span>
              </div>
            </div>
            <button onClick={() => handleCart(Courseinfo)} className="btn bg-[#2F80ED] text-white hover:text-black p-4">Select</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
