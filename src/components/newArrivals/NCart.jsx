import Ndata from "./Ndata";

export default function Cart() {
  return (
    <>
      <div className="content grid product">
        {Ndata.map((item, index) => {
          return (
            <div className="box" key={index}>
              <div className="img">
                <img
                  src={item.cover}
                  alt={item.name}
                  width={165}
                  height={165}
                />
              </div>
              <h4>{item.name}</h4>
              <span>
                {item.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
