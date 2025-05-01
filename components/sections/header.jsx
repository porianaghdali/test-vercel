


const Header=({title,description})=>{
    return(
        <>
         <div
          style={{
            backgroundImage: "url('/images/news/header.png')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
          className=" h-fit xl:h-60 mt-16 lg:mt-0 p-4 mb-8 xl:p-12 xl:mb-10"
        >
          <p className=" text-lg  text-[#EDECF4] font-semibold xl:text-5xl xl:leading-[75px]">
            {title}
          </p>
          <p className=" text-sm text-[#EDECF4] font-medium xl:leading-[50px] xl:text-3xl">
            "{description}"
          </p>
        </div>  
        </>
    )
}
export default Header