const Cart = ({ selectcourse,totalcreditcourse,reaminingcreditcourse,totalprice}) => {
  let count = 1;
  
  return (
    <div className=" ml-4 ">
      <div className="card lg:w-96  md:mx-auto   bg-base-100 shadow-xl">
        <div className="card-body md:w-full ">
          <h2 className="card-title text-[#2F80ED]">Credit Hour Remaining: { reaminingcreditcourse } hrs</h2>
          <hr />
          <h1 className="text-2xl font-bold">Course Name</h1>
          <div className="h-[150px]">
          {selectcourse.map((cartAdd) => (
            <div key={cartAdd.id}  >
              <span>
                {count++} {cartAdd.title}
              </span>
            </div>
          ))}
          </div>
          <hr />
          <h2 className="card-title text-gray-400">Total Credit Hour : {totalcreditcourse} </h2>
          <hr />
          <h2 className="card-title text-gray-500">Total Price : {totalprice} USD </h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
