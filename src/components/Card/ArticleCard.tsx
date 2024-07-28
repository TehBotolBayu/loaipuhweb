
// import NormalButton from "../Global/Button/NormalButton";

const ArticleCard = (
  {image, title, desc, url}:
  {image:string, title:string, desc:string, url:string}
) => {
  return (
    <>
      <div className="max-w-md mx-auto w-fit cursor-pointer hover:-translate-y-2 transition-all ease-in-out">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 w-80">
          <a href="#">
            <img
              className="rounded-t-lg h-[170px] w-80 object-cover object-center "
              src={image}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-gray-900 font-bold text-md tracking-tight mb-2">
                {title}
              </h5>
            </a>
            <p className="font-normal text-gray-700 mb-3 text-sm">
              {desc}
            </p>
            <p className="underline">
              Selengkapnya {url}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
