import { Link } from "react-router";

export default function FeatureBooking() {
  return (
    <section className="bg-white py-10 px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
    
        <div className="max-w-md">
          <h2 className="text-zinc-900 text-5xl lg:text-[42px] font-serif leading-[1.2] tracking-tighter italic">
            In today’s digital world, having a strong online presence is crucial for the success of your business.
          </h2>
        </div>

        
        <div className="flex flex-col items-start space-y-8">
          <div className="space-y-6">
            <p className="text-zinc-500 text-lg leading-relaxed font-light">
                Whether you're a gym scheduling fitness classes or a real estate agent showcasing properties, being able to take bookings and schedule appointments via your website could be a great option for you.            </p>
            <p className="text-zinc-500 text-lg leading-relaxed font-light">
                At ASTRONET, we can harness the best booking and scheduling software on the market and get them to sit seamlessly within your website. Our intuitive solutions streamline scheduling and browsing, enhancing the overall user experience and driving engagement. With our tailored approach, you can say goodbye to missed appointments and hello to better connections and increased conversions.
            </p>
          </div>


          <Link to="/contact">
          <button className="px-10 py-4 border border-zinc-900 text-zinc-900 font-serif text-[18px] leading-[1.2] tracking-tighter  hover:bg-zinc-900 hover:text-white transition-all duration-300">
            Work with us
          </button>
          </Link>

        </div>

      </div>
    </section>
  );
}