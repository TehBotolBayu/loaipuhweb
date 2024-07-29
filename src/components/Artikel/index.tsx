import React from 'react'
import ArticleCard from '../Card/ArticleCard'
import SectionTitle from '../SectionTitle'


const Artikel = () => {
  return (
    <section className="bg-gray-100 py-8">
    <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
    <SectionTitle text="Artikel" opt={undefined} />
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
  )
}

export default Artikel