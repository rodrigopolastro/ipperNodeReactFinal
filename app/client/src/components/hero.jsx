// import Image from 'next/image'
import Teste from '../images/teste.png'
import './components.css'

export default function Hero() {
  return (
    <section className="relative bg-preto-fundo">
    

 

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-6xl md:text-6xl  tituloo font-extrabold leading-tighter tracking-tighter mb-4 text-gray-300" data-aos="zoom-y-out">IPPER<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-indigo-300"> Technologies</span> </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Intelligent Personal Protection Equipment Recognition </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              </div>
            </div>
          </div>
          <img src={Teste} alt="Teste" />
        </div>

      </div>
    </section>
  )
}