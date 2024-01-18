import { brandsData } from "../../data/data";

const Brands = () => {
  return (
    <div className="flex flex-wrap items-center justify-center px-[20px] md:px-[50px] my-7 py-5">
      {brandsData.map((item) => {
        return (
          <div
            key={item.id}
            className="md:w-[230px] w-full border-gray-600 rounded-lg border-[2px] mx-2 my-2 md:mx-5 hover:scale-110 transition-all duration-300 ease-in-out group relative "
          >
            <img
              src={item.image}
              alt="brand-image"
              className="w-full group-hover:opacity-0"
            />
            <video
              autoPlay
              loop
              playsInline
              muted
              preload="auto"
              className="absolute top-0 left-0 rounded-lg opacity-0 group-hover:opacity-50"
            >
              <source src={item.video} type="video/mp4"></source>
            </video>
          </div>
        );
      })}
    </div>
  );
};

export default Brands;
