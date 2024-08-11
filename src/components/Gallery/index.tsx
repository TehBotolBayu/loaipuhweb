import GalleryGrid from './GalleryGrid'
import SectionTitle from '../SectionTitle'

const GallerySection = () => {
  return (
    <section className="bg-gray-100 py-8" id="galeri">
    <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
    <SectionTitle text="Galeri" opt={undefined} />

      <div className="mt-14"></div>
      <GalleryGrid />
    </div>
  </section>
  )
}

export default GallerySection