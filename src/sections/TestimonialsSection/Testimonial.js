import SingleReview from "./SingleReview";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "ASHRAFUL QU10",
      img: "https://media.licdn.com/dms/image/D5603AQEq-sJ5aaDdow/profile-displayphoto-shrink_200_200/0/1684658600336?e=1690416000&v=beta&t=Cek6EdDbjePL9u2oNr328O7eNotBWlBH1c8vTk5SVFc",
      texts:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat distinctio laudantium commodi fuga dolorem ipsam tempore voluptate ratione sed officia!",
      about: "Founder And CEO",
    },
    {
      id: 2,
      name: "Khandaker Sajjad Hossen",
      img: "https://i.ibb.co/K0hXPkZ/Profile-Pic.jpg",
      texts:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat distinctio laudantium commodi fuga dolorem ipsam tempore voluptate ratione sed officia!",
      about: "chief technology officer (CTO)",
    },
    {
      id: 3,
      name: "Sumaya Nazneen ",
      img: "https://media.licdn.com/dms/image/C5603AQHJ0_thQfTVTg/profile-displayphoto-shrink_200_200/0/1628397802979?e=1690416000&v=beta&t=FBu5Cu5L_oM34E3cxkqTAQ96oWrYzMKpcs02ZWqeaIY",
      texts:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat distinctio laudantium commodi fuga dolorem ipsam tempore voluptate ratione sed officia!",
      about: "Chief operating officer (COO)",
    },
  ];
  return (
    <div id="testimonials" className="mx-auto container mt-16">
      <div className="reviewTittle flex justify-center mb-32">
        <h2 className="capitalize">
          What do our users say?
        </h2>
      </div>
      <div className="cards my-bg rounded-sm">
        <div className="card grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 bottom-20">
          {reviews?.map((review) => (
            <SingleReview key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
