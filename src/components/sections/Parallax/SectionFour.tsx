import { Link } from "react-router-dom";
import imgBooking1 from "../../../assets/IA.png";

export default function SectionFour() {
  const staticImage = imgBooking1;

  return (
    <section className="flex w-full items-center justify-center overflow-hidden bg-[#f8f9fa] py-12 sm:py-14 lg:h-full lg:py-0">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        
        {/* BLOQUE VISUAL ESTÁTICO */}
        <div className="relative order-2 flex justify-center lg:order-1 lg:justify-start">
          <div className="relative z-10 ml-1 w-full max-w-[260px] sm:max-w-md lg:max-w-xl">
            <img 
              src={staticImage} 
              alt="IA" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>

        {/* BLOQUE DE TEXTO*/}
        <Link to="/whatwedo/Artificial-Intelligence" className="order-1 lg:order-2">
          <div className="group cursor-pointer flex flex-col items-start">
            <p className="text-[#A3FF00] font-black text-[10px] tracking-[0.4em] mb-4 transition-transform duration-500 group-hover:-translate-x-4">
              ↗ HOW WE DO
            </p>
            
            <h2 className="mb-4 text-3xl font-serif leading-tight text-zinc-900 transition-transform duration-700 group-hover:translate-x-0 sm:text-5xl lg:mb-6 lg:text-6xl lg:group-hover:-translate-x-6">
              AI-Powered <br/> Systems.
            </h2>
            
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-zinc-500 transition-transform delay-75 duration-700 group-hover:translate-x-0 sm:text-lg lg:mb-8 lg:group-hover:-translate-x-8">
              Practical AI integrations designed to automate workflows, improve operational efficiency, and enhance digital products.
            </p>
            
            <div className="mb-6 grid grid-cols-2 gap-x-4 gap-y-3 transition-transform delay-100 duration-700 group-hover:translate-x-0 lg:mb-10 lg:gap-x-8 lg:gap-y-4 lg:group-hover:-translate-x-10">
              {[
                'AI Agents', 'NEURAL NETWORKS', 
                'PREDICTIVE ANALYTICS', 'MACHINE LEARNING', 
                'NLP SOLUTIONS'
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-[9px] font-black uppercase text-zinc-400 sm:text-[10px]">
                  <span className="text-[#A3FF00]">✔</span> {item}
                </div>
              ))}
            </div>

            <button className="rounded-lg border border-zinc-900 px-6 py-3 text-[9px] font-black uppercase tracking-widest text-zinc-900 transition-all hover:border-[#A3FF00] hover:bg-[#A3FF00] hover:text-black sm:px-8 sm:py-4 sm:text-[10px] lg:px-10 lg:group-hover:-translate-x-8">
              Find out more
            </button>
          </div>
        </Link>

      </div>
    </section>
  );
}
