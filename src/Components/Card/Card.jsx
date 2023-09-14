const Card = ({ carddata }) => {
  console.log(carddata);
  return (
    <div className="w-[75%] grid grid-cols-3 gap-4">
      {carddata.map((Courseinfo) => (
        <div key={Courseinfo.id} className="cart">
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img src={Courseinfo.cover} alt="Cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{Courseinfo.title}</h2>
              <p>{Courseinfo.details}</p>
            </div>
            <div className="flex justify-between p-3">
              <span>$ Price:{Courseinfo.price}</span>
              <span> Credit:{Courseinfo.credit}</span>
            </div>
            <button className="btn btn-primary p-4">Select</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
