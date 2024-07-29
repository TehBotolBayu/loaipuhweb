import layananA from "/public/layananA.png";
import layananB from "/public/layananB.png";
import layananC from "/public/layananC.png";
import SectionTitle from "../SectionTitle";


const Service = () => {
  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <SectionTitle text="Layanan" opt={undefined} />
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <img src={layananA.src} className="w-32 m-auto my-4" />
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Sistem Informasi Desa
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Melalui website ini warga setempat dapat melihat berbagai
                informasi berupa artikel mengenai perkembangan desa loa ipuh
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-start">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <img src={layananB.src} className="w-32 m-auto my-4" />
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Laporan RT
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Website ini terintegrasi dengan RT untuk memanajemen data
                laporan setiap RT
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <img src={layananC.src} className="w-32 m-auto my-4" />
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Pendataan Penduduk
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Pendataan penduduk dapat dilihat melalui sistem informasi kami
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-end">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
