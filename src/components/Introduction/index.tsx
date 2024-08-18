import kades from "/public/kades.png";
import SectionTitle from "../SectionTitle";

const Introduction = () => {
  return (
    <section className="bg-white border-b py-8 ">

      <div className="container max-w-5xl mx-auto m-8">
        <SectionTitle text="Kata Sambutan" opt={undefined} />
        <div className="text-black text-center lg:text-left  text-xl flex justify-between items-center">
          <div className="w-full px-4 lg:mr-10">
            <p className="my-4">Assalamualaikum warahmatullahi wabarakatuh,</p>
            <p>Salam sejahtera untuk kita semua,</p>
            <p className="my-4">
              Saya dengan bangga memperkenalkan website resmi kelurahan Loa Ipuh Darat.
              Website ini dibuat untuk meningkatkan transparansi, pelayanan
              publik, dan komunikasi antara pemerintah kelurahan dan masyarakat.
              Melalui website ini, Bapak/Ibu dapat mengakses informasi kelurahan,
              layanan administrasi, dan berita terkini. Mari kita manfaatkan
              website ini dengan baik dan berpartisipasi aktif dalam pembangunan
              kelurahan melalui saran dan masukan.
            </p>
            <p className="my-4">Wassalamualaikum warahmatullahi wabarakatuh.</p>
          </div>
          <div className="hidden lg:flex">
            <img src={kades.src} alt="" className="h-full" />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row"></div>
      </div>
    </section>
  );
};

export default Introduction;
