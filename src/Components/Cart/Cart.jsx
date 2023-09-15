const Cart = ({ selectcourse,totalcreditcourse,reaminingcreditcourse,totalprice}) => {
  let count = 1;
  
  return (
    <div className=" ml-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-[#2F80ED]">Credit Hour Remaining: { reaminingcreditcourse } hrs</h2>
          <hr />
          <h1 className="text-2xl font-bold">Course Name</h1>
          {selectcourse.map((cartAdd) => (
            <div key={cartAdd.id} >
              <span>
                {count++} {cartAdd.title}
              </span>
            </div>
          ))}
          <hr />
          <h2 className="card-title text-gray-400">Total Credit Hour :{totalcreditcourse} </h2>
          <hr />
          <h2 className="card-title text-gray-500">Total Price :{totalprice} </h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
