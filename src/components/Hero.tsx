
import HeroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="py-12">

      <div className="max-w-6xl mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center">

          <div className="w-full md:w-1/2">

            <h2 className="text-3xl font-bold text-slate-900">
              Build Your Ideal
            </h2>

            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Development Stack
            </h2>

            <p className="text-sm text-gray-500 leading-6 mt-4 max-w-md">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that
              fits your next project.
            </p>

   
            <div className="flex gap-3 mt-6">

              <button className="btn btn-sm bg-gradient-to-r from-orange-500 to-pink-500 text-white border-none">
                Explore Technologies
              </button>

              <button className="btn btn-sm bg-white text-gray-600 border border-gray-200">
                Learn More
              </button>

            </div>

          </div>


          <div className="w-full md:w-1/2 flex justify-end">

            <img src={HeroImage} alt="Development stack" className="w-72 md:w-80 object-contain"/>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;