const ServiceCard = ({ item }) => {
	return (
		<div className="card bg-base-100 shadow-xl flex justify-center  hover:-translate-y-3 duration-300">
			<figure className="">
				<img src={item.imgUrl} alt="Shoes" className="rounded-xl h-56 w-auto" />
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{item.title}</h2>
				<p>{item.texts}</p>
				<div className="card-actions">
					<button className="btn my-btn ease-in-out duration-300">
						Read More
					</button>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
