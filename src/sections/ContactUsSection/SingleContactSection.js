
const SingleContactSection = ({ item }) => {
  return (
    <div>
      <div className="card h-52  flex justify-center  shadow-xl  border border-green-400 bg-white">
        <div className="icon  mask mask-hexagon text-white text-5xl mx-auto my-bg p-5 ">{item.icon}</div>
        <div className=" h-16 mx-auto items-center">
          <h2 className="card-title text-sm justify-center">{item.name}</h2>
          <p className="text-sm text-center">{item.address}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleContactSection;
