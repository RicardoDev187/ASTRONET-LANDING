
interface Feature {
  title: string;
  description: string;
  dotColor: string; 
}

const featureData: Feature[] = [
  {
    title: "Seamless Booking Integrations",
    description: "Seamlessly manage appointments with the booking software of your choice, or work with us to pinpoint the perfect solution for your business. We tailor each system to meet the unique needs of you and your team.",
    dotColor: "bg-pink-300"
  },
  {
    title: "Real-Time Availability",
    description: "Keep your clients informed with real-time availability updates. We can harness software to display up-to-the-minute openings, reducing double bookings and improving client satisfaction.",
    dotColor: "bg-emerald-200"
  },
  {
    title: "Automated Reminders",
    description: "Reduce no-shows with automated reminders. Send timely notifications via email or SMS, helping clients remember their appointments and making your schedule more reliable.",
    dotColor: "bg-zinc-300"
  },
  {
    title: "Flexible Booking Websites",
    description: "Offer your clients flexibility with multiple booking options. From recurring appointments to one-time bookings, our websites can support a variety of scheduling needs to cater to every client's preference.",
    dotColor: "bg-pink-300"
  },
  {
    title: "Secure Payment Integration",
    description: "Streamline your payment process with secure online payment integration. Clients can easily pay for their appointments at the time of booking, ensuring a hassle-free experience for both parties.",
    dotColor: "bg-emerald-200"
  },
  {
    title: "Comprehensive Analytics",
    description: "Gain insights into your booking trends with comprehensive analytics. Track key metrics such as peak booking times, client preferences, and no-show rates to optimise your services and marketing strategies.",
    dotColor: "bg-zinc-300"
  }
];


export default function GridsBooking() {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
        
        {featureData.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start">
            

            <div className={`mt-2 w-3.5 h-3.5 rounded-full shrink-0 ${feature.dotColor}`}></div>
          
            <div className="flex flex-col">
              <h3 className="text-xl font-extrabold text-zinc-900 mb-3 tracking-tight leading-tight">
                {feature.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
            
          </div>
        ))}
        
      </div>
    </section>
  );
}