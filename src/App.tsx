import { useEffect, useRef, useState } from "react";
import heroImage from "./asset/maskot.png";
import kades from "./asset/kades.png";
import logo from "./asset/logo.png";
import logo_i from "./asset/logo-invert.png"
import layananA from "./asset/layananA.png";
import layananB from "./asset/layananB.png";
import layananC from "./asset/layananC.png";
import ArticleCard from "./components/Card/ArticleCard";
import Gallery from "./components/Gallery"
import MapComponent from "./components/Map/Landing";

function App() {
  const [win, setWindow] = useState<any>(0)
  const [openNavBar, setopenNavBar] = useState(false)
  const logoRef = useRef();

  useEffect(()=>{
    const handle = () => {
      setWindow(window.scrollY) 
    }
    window.addEventListener("scroll", handle);
    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, [window.scrollY])

  return (
    <div className="leading-normal tracking-normal text-white gradient">
      {/*Nav*/}
      <nav
        id="header"
        className={`fixed w-full z-30 top-0 text-white
        ${win > 10 ? "bg-white" : ""} `}
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a
              className={`toggleColour ${
                win > 10 ? "text-black" : "text-white"
              }  no-underline hover:no-underline font-bold text-2xl lg:text-4xl
              flex items-center`}
              href="#"
            >
              <img src={win > 10 ? logo_i : logo} alt="" className="w-14" />
              <p className="ml-4">LOAIPUH</p>
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              onClick={() => setopenNavBar((p) => !p)}
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={` w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20
              ${openNavBar ? "" : "hidden"}
              `}
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-black font-bold no-underline"
                  href="#"
                >
                  Artikel
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  Layanan
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  Program Kerja
                </a>
              </li>
            </ul>
            {/* <button
              id="navAction"
              className={`mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out
                ${(win > 10)?'gradient text-white':''}`}
            >
              Action
            </button> */}
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
      {/*Hero*/}
      <div className="pt-24 h-screen flex items-center">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/*Left Col*/}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <div className="z-[0] bg-heroimage w-screen h-screen   absolute top-0 right-0"></div>
            <p className="uppercase tracking-loose w-full z-10">
              PEMERINTAH DESA LOA IPUH KUTAI KARTANEGARA
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight z-10">
              Menjawab Kebutuhan Informasi Masyarakat
            </h1>
            <p className="leading-normal text-2xl mb-8 z-10">
              Selamat datang di Portal Desa Loa Ipuh, Dapatkan informasi dan
              layanan publik apapun seputar Desa Loa Ipuh melalui website ini.
            </p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Layanan Kami
            </button>
          </div>
          {/*Right Col*/}
          <div className="w-full md:w-3/5 py-6 hidden lg:flex justify-end z-0">
            <img
              className="w-full md:w-4/5 z-50 scale-x-[-1]"
              src={heroImage}
            />
          </div>
        </div>
      </div>
      <div className="relative -mt-12 lg:-mt-32 z-20">
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              />
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              />
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              />
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z" />
            </g>
          </g>
        </svg>
      </div>
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Kata Sambutan
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
          </div>
          <div className="text-black text-center lg:text-left  text-xl flex justify-between items-center">
            <div className="w-full px-4 lg:mr-10">
              <p className="my-4">
                Assalamualaikum warahmatullahi wabarakatuh,
              </p>
              <p>Salam sejahtera untuk kita semua,</p>
              <p className="my-4">
                Saya dengan bangga memperkenalkan website resmi Desa Loa Ipuh.
                Website ini dibuat untuk meningkatkan transparansi, pelayanan
                publik, dan komunikasi antara pemerintah desa dan masyarakat.
                Melalui website ini, Bapak/Ibu dapat mengakses informasi desa,
                layanan administrasi, dan berita terkini. Mari kita manfaatkan
                website ini dengan baik dan berpartisipasi aktif dalam
                pembangunan desa melalui saran dan masukan.
              </p>
              <p className="my-4">
                Wassalamualaikum warahmatullahi wabarakatuh.
              </p>
            </div>
            <div className="hidden lg:flex">
              <img src={kades} alt="" className="h-full" />
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row"></div>
        </div>
      </section>
      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Layanan
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <img src={layananA} className="w-32 m-auto my-4" />
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
                <img src={layananB} className="w-32 m-auto my-4" />
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
                <img src={layananC} className="w-32 m-auto my-4" />
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
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Artikel
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
          </div>
          <div className="mt-14 flex flex-wrap">
            <ArticleCard
              image="https://picsum.photos/400/200"
              title="Pentingnya Transparansi dalam Pemerintahan Desa"
              desc="Transparansi adalah kunci untuk membangun kepercayaan antara pemerintah desa dan warganya. daya yang lebih baik."
              url=""
            />
            <ArticleCard
              image="https://picsum.photos/300/200"
              title="Peran Website Desa dalam Peningkatan Pelayanan Publik"
              desc="Dengan kemajuan teknologi, banyak desa mulai memanfaatkan website untuk meningkatkan pelayanan publik. "
              url=""
            />
            <ArticleCard
              image="https://picsum.photos/500/200"
              title="Strategi Pembangunan Infrastruktur Desa yang Berkelanjutan"
              desc="Pembangunan infrastruktur desa yang berkelanjutan sangat penting untuk kemajuan jangka panjang. "
              url=""
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Galeri
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
          </div>
          <div className="mt-14"></div>
          <Gallery />
        </div>
      </section>
      <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Peta Desa
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
          </div>
          <div className="mt-14"></div>
          <MapComponent/>
        </div>
      </section>
      {/* Change the colour #f8fafc to match the previous section colour */}
      <svg
        className="wave-top"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g className="wave" fill="#f8fafc">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z" />
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                />
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                />
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <section className="container mx-auto text-center py-6 mb-12 mt-20">
        <img src="./src/asset/logo-white.png" alt=""  className="mx-auto"/>
      </section>
      {/*Footer*/}
      <footer className="h-[50vh]">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-black">
              <a
                className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
              <img src={logo} alt="" className="w-14" />
              <p className="">LOAIPUH</p>
              </a>
            </div>
            <div className="flex-1">
              <p className="uppercase text-white md:mb-6">Links</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-white hover:text-pink-100"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-white hover:text-pink-100"
                  >
                    Help
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-white hover:text-pink-100"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-white md:mb-6">Legal</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-white hover:text-pink-100"
                  >
                    Terms
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-white hover:text-pink-100"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-white md:mb-6">Social</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-white hover:text-pink-100"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-white hover:text-pink-100"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-white hover:text-pink-100"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-white md:mb-6">Company</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-white hover:text-pink-100"
                  >
                    Official Blog
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-white hover:text-pink-100"
                  >
                    About Us
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-white hover:text-pink-100"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
