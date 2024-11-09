import Image from "next/image";
export default function Header() {
  return (
    <nav className="w-[100%] h-[135px] bg-[#A29875] flex justify-around items-center">
      <div className="flex h-[83px] justify-center items-center ">
        <Image
          src={"/images/P-image.png"}
          alt="logo"
          height={70.35}
          width={63.52}
          className=""
        ></Image>
        <p className="w-[174px] h-[83px] text-[66.78px] text-[#ffff] font-rye ">
          urity
        </p>
      </div>
      <div className="w-[769.89px] h-[56.24px] bg-[#f8f8f8] flex justify-around items-center rounded-[13.83px]">
        <input
          type="text"
          name="search-item"
          id="search-item"
          placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
          className="bg-transparent h-[100%] w-[90%] placeholder:text-[#6C757D] placeholder:w-[479px] placeholder:h-[25px] placeholder:font-[18.68px] focus:outline-none "
        />
        <span>
          <Image
            src={"/images/search-icon.png"}
            alt="search-icon"
            width={21.5}
            height={21.5}
          ></Image>
        </span>
      </div>
      <div className="w-[177.8px] h-[30.08px] flex  items-center justify-between">
        <Image
          src={"/images/heart-icon.png"}
          alt="heart-icon"
          height={29.71}
          width={33.42}
        ></Image>
        <Image
          src={"/images/profile-icon.png"}
          alt="heart-icon"
          height={29.26}
          width={28.97}
        ></Image>
        <Image
          src={"/images/cart-icon.png"}
          alt="heart-icon"
          height={30.08}
          width={38.01}
        ></Image>
      </div>
    </nav>
  );
}
