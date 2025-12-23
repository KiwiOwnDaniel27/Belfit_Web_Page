import DataImage, { listProyek } from "./data";
import { listTools } from './data';


function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s py-4">
          <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md load" loading="lazy" />
            <q>Código de Salud y Bienestar. 💪🏼🏋🏻🤸🏻‍♀</q>
          </div>

          <h1 className="text-4xl/tight font-bold mb-6 text-center">Bienvenidos a "Belfit" 💪🏼🏋🏼‍♀ </h1>

          <p className="xs:text-center text-base/loose bm-9 opacity-75"> Bienvenida/o a Belfti — Tu nuevo estilo de vida fitness en Quito
            <br /><br />
            ¿Lista para sentirte más fuerte, saludable y llena de confianza?
            <br /><br />
            En Belfit, te acompañamos en cada paso de tu transformación, con asesorías personalizadas, 
            planes diseñados especialmente para ti y un enfoque motivador que realmente funciona.
            <br /><br />
            ¿Para quiénes es este espacio?

            ✨ Mujeres que quieren…

            ✨Tonificar el cuerpo

            ✨Perder grasa y ganar energía

            ✨ Aumentar masa muscular de forma saludable

            ✨Mejorar su bienestar integral

            ✨Sentirse con más confianza cada día 💪🏼 
            <br /><br />
            También asesoramos a hombres que buscan resultados reales con un enfoque profesional y efectivo. 🏋🏻💪🏼
          </p>
          <br />
          <div className="flex items-center sm:gap-9 gap-12">
            <a href="#herramientas"  className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Online <i className="ri-download-line ri-lg"></i> </a>
            <a href="#herramientas" className="bg-green-700 p-4 rounded-2xl hover:bg-green-600"> Presencial <i className="ri-arrow-down-line ri-lg"></i> </a>
          </div>

        </div>
        <img src={DataImage.HeroImage1} alt="Hero Image" className="rounded-b-full w-[500px] md:ml-auto
        animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
      </div>

      <div className="about mt-32 py-10" id="acercade">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage1} alt="Image" className="w-12 rounded-md sm:hidden" loading="lazy" />
          <p className="text-base/loose mb-10">💖 Bienvenida a tu transformación en Quito
          <br /><br />
          Asesorías fitness personalizadas para mujeres y hombres que buscan resultados reales.

          ✨ “Fuerte, segura y decidida: transforma tu cuerpo y domina tu bienestar.” 💪

          Entrena con propósito, supera tus límites y despierta tu mejor versión con un plan diseñado especialmente para ti.
          ¡Tu nueva vida fitness empieza aquí!
          </p>

          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-27 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-9">
              <div>
                <h1 className="text-4xl mb-1">
                  20<span className="text-violet-500">+</span>
                </h1>
                <p>Servicio</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  20 <span className="text-violet-500">+</span>
                </h1>
                <p>Calidad</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32" id="herramientas">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000"
            data-aos-once="true">
            Online/Presencial</h1>
          <p className="xl:w-2/5 lg:w-2/4 md: w-2/3 sm:w-3/4 text-base/loose opacity-50" data-aos="fade-up"
            data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Te ofrecemos nuestras asesorías</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div className=" flex items-center gap-2 p-1 border border-zinc-600 rounded-md hover:bg-zinc-800 
              group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}
                data-aos-once="true">
                <img src={tool.gambar} alt="Tools Image" className="w-90 bg-zinc-800 p-1 grouphover:bg-zinc-900" />
                <div>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="proyek mt-32 py-10" id="project">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000"
          data-aos-once="true">
          Métodos de pago</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="300" data-aos-once="true">
          Puedes cancelar mediante tranferencia o efectivo </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-6 bg-zinc-700 rounded-md" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt=" Proyect Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">
                  {proyek.nama}
                </h1>
                <p className="text-base/loose mb-4">
                  {proyek.desk}
                </p>
                <div className="flex flex-wrap gap-3">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href={proyek.link} target="alt" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Pagar</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="Contact mt-32 sm:p-10 p-0" id="contact">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="500" data-aos-once="true">
          Reserva</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="500" data-aos-once="true">Adquiere la mejor asesoría para tu nuevo estilo de vida. </p>

        <form action="https://formsubmit.co/aquisitonomasec@hotmail.com" method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up"
          data-aos-duration="1000" data-aos-delay="800" data-aos-once="true">

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nombre Completo</label>
              <input type="text" name="Nombre" placeholder="Introduce nombre cliente..." className="border
               border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Número Celular</label>
              <input type="tel" name="Numero" placeholder="Introduce tu contacto de entrega..." className="border
               border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Producto:</label>
              <textarea name="Mensaje" id="pesan" cols="45" rows="7" placeholder="Indícanos que deseas..."
                className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 
              hover:bg-violet-600">Reservar Pedido</button>
            </div>
          </div>
        </form>

      </div>
    </>
  );
}
export default App
