import millify from "millify";

function ArticleItem({ data }) {
  return <article className="mb-10 border">
    {data?.img && <img src={data?.img} alt='article image' className="h-[300px] w-full object-cover"/>}
    <div className="p-6 space-y-4">
    <p className="font-semibold">{data.articleTag}</p>
    <h1 className="font-semibold text-xl">{data.heading}</h1>
    {data.summary && <p>{data.summary}</p>}
    {(data?.date || data?.location) && <div className="flex gap-8 font-semibold text-sm">
        <span className="flex gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_1_895)">
          <path d="M15.8333 2.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.24167 2.49992 2.50833 3.24992 2.50833 4.16659L2.5 15.8333C2.5 16.7499 3.24167 17.4999 4.16667 17.4999H15.8333C16.75 17.4999 17.5 16.7499 17.5 15.8333V4.16659C17.5 3.24992 16.75 2.49992 15.8333 2.49992ZM15.8333 15.8333H4.16667V6.66658H15.8333V15.8333ZM5.83333 8.33325H10V12.4999H5.83333V8.33325Z" fill="black"/>
        </g>
        <defs>
          <clipPath id="clip0_1_895">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
          {data?.date}</span>
        <span className="flex gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_1_886)">
          <path d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z" fill="black"/>
          <path d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z" fill="black"/>
        </g>
        <defs>
          <clipPath id="clip0_1_886">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
</svg>{data?.location}</span>
      </div>}
    {data?.link && <a className="border p-2 w-full block mx-auto rounded-full text-center text-green-500">{data?.link}</a>}

    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-4 cursor-pointer">
        <div className='rounded-full w-12 h-12 overflow-hidden'>
        <img src={data.author.img} alt="author image"  className="w-full h-full object-cover" />
        </div>
        <h3 className="font-semibold">{data.author.name}</h3>
      </div>
      <div className="flex gap-4 items-center">
       { millify(data.views)} views
     
      <span className=" bg-slate-200 p-2 cursor-pointer flex gap-2 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <g clipPath="url(#clip0_1_983)">
      <path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D"/>
      </g>
      <defs>
      <clipPath id="clip0_1_983">
      <rect width="18" height="18" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      <p className="text-md lg:hidden">Share</p>
      </span>
            </div>
    </div>
    </div>
  </article>;
}

export default ArticleItem;
