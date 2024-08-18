import { useMemo } from "react";
import SectionTitle from "../../SectionTitle";
import dynamic from "next/dynamic";

const MapSection = () => {
  const MapComponent = useMemo(
    () =>
      dynamic(() => import("../utils"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <SectionTitle text="Peta Desa" opt={undefined} />
        <div className="mt-14"></div>
        <MapComponent />
      </div>
    </section>
  );
};

export default MapSection;
