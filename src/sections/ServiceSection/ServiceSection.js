import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  const cardText = [
    {
      id: 1,
      title: "Digital marketing",
      imgUrl: " https://i.ibb.co/DGp47r4/digital-Marketing.png",
      texts: " hi we are providing you the best sevice for digital marketing.. stay with us."
    },
    {
      id: 2,
      title: "Social Media Management",
      imgUrl: "https://i.ibb.co/pwMk2K8/digital-marketing-2-jpg-optimal.jpg",
      texts: " hi we are providing you the best sevice for digital marketing.. stay with us."
    },
    {
      id: 3,
      title: "Market Research",
      imgUrl: " https://i.ibb.co/zxnS614/Market-research.png",
      texts: " hi we are providing you the best sevice for digital marketing.. stay with us."
    },
    {
      id: 3,
      title: "E-commerce image Processing",
      imgUrl: "https://i.ibb.co/bdGBSHM/E-commerce-image-Processing.jpg",
      texts: " hi we are providing you the best sevice for digital marketing.. stay with us."
    },
    {
      id: 4,
      title: "E-commerce marketing",
      imgUrl: "https://i.ibb.co/PwV1CgY/E-commerce-marketing-strategies.png",
      texts: " hi we are providing you the best sevice for digital marketing.. stay with us."
    },
    {
      id: 5,
      title: "Web Application Development",
      imgUrl: "https://i.ibb.co/G75mFZm/Web-Application-Development.jpg",
      texts: " hi we are providing you the best sevice for digital marketing.. stay with us."
    },
  ]
  return (
    <section id="services" className="py-16">
      <div className="container">
        <div className="text-center space-y-1 mb-6 my-7">
          <h2 className="">Service Triooz TMM Privided</h2>
          <p>
            We are not selling service, we are sell result. Top line Raw
            Marketing, Banding, Story telling like "Nike" & DM Result
          </p>
        </div>
        <div className="flex gap-5 flex-col md:flex-row px-2 md:px-0 my-7">
          <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 basis-3/4">
            {cardText?.map((item) => (
              <ServiceCard key={item.id}
                 item = {item}
              />
            ))}
          </div>
          <div className="basis-1/4 my-bg p-4  font-light text-white rounded">
            <blockquote className="">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              possimus impedit debitis cumque cum ad at, commodi tenetur ratione
              culpa sint similique fugit ut? Sint odit neque ab veritatis! Quasi
              reprehenderit repudiandae aperiam illo consequatur vero, sit
              adipisci earum expedita deserunt ab voluptatibus magnam quas,
              corrupti assumenda obcaecati. Rerum, voluptatibus. lore
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              possimus impedit debitis cumque cum ad at, commodi tenetur ratione
              culpa sint similique fugit ut? Sint odit neque ab veritatis! Quasi
              reprehenderit repudiandae aperiam illo consequatur vero, sit
              adipisci earum expedita deserunt ab voluptatibus magnam quas,
              corrupti assumenda obcaecati. Rerum, voluptatibus. lore
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              possimus impedit debitis cumque cum ad at, commodi tenetur ratione
              culpa sint similique fugit ut? Sint odit neque ab veritatis! Quasi
              reprehenderit repudiandae aperiam illo consequatur vero, sit
              adipisci earum expedita deserunt ab voluptatibus magnam quas,
              corrupti assumenda obcaecati. Rerum, voluptatibus. lore "
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
