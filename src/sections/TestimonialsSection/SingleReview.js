const SingleReview = ({ review }) => {
  return (
    <div>
      <div className="card w-auto shadow-2xl bg-base-100 p-7 hover:-translate-y-5 duration-300 border  border-green-400 mx-5">
        <div className="texts">
            <p className="p-7 text-xl text-zinc-600">{review.texts}</p>
        </div>
        <figure>
          <div className="avatar online mt-5 ">
            <div className="w-24 rounded-full ring ring-green-600 ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
          </div>
        </figure>
        <div className="card-body flex items-center">
          <h2 className="card-title">{review.name}</h2>
          <p className="text-sm text-gray-500">{review.about}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
