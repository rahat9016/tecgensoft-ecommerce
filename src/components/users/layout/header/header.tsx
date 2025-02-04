"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../../public/logo.png"
import SearchBar from "@/components/shared/SearchBar";
import { ShoppingCart, Heart } from 'lucide-react';
import UserSection from "./UserSection";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname()
  // const handleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };
//   const handleClick = () => {
//     if (userInfo) {
//       navigate("/profile/wishlist");
//     } else {
//       navigate("/auth/signin");
//     }
//   };
//   const handleReload = () => {
//     navigate("/");
//     window.scrollTo({
//       top: 0,
//       // behavior: "smooth",
//     });

//     setTimeout(() => {
//       window.location.reload();
//     }, 100); // Adjust the delay as needed
//   };
console.log('header pathname', )
  return (
    <div>
      {!pathname.startsWith('/admin') && <div className="lg:border-b border-white-light bg-light-gray ">
      <div className="container pt-4 pb-3 flex gap-2 lg:flex-row flex-col justify-between ">
        <div className="items-center justify-between w-full lg:w-auto hidden lg:flex">
            <Image src={logo} className="h-[48px] cursor-pointer" alt={""} />
          {/* <FiMenu className="text-3xl block lg:hidden relative" onClick={handleMenu} /> */}
          {/* <MobileMenu menuOpen={menuOpen} /> */}
        </div>
        <SearchBar />

        <div className="items-center gap-9 mt-2 lg:mt-0  hidden lg:flex">
          {/* <Button className="bg-main-primary relative group hover:scale-[1.02] duration-100"> */}
            {/* <AiOutlineHeart
              className={`text-[30px]  ${
                location.pathname === "/profile/wishlist" ? "text-primary" : "text-primary-dark"
              } cursor-pointer hover:scale-110 duration-300`}
            /> */}
          {/* </Button> */}
            <Heart className="" />
          <Link href="/cart">
            <div className="relative group hover:scale-[1.02] duration-100 ">
              <div className="absolute left-3 -top-[8px]">
                <p className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow text-xsm font-semibold  text-black">
                  {0}
                </p>
              </div>
              {/* <Image src={location.pathname === "/cart" ? redCart : cartImage} /> */}
              {/* <AiOutlineShoppingCart
              className={`text-[30px] text-primary-dark cursor-pointer ${
                location.pathname === "/cart" ? "text-secondary" : "text-primary-dark"
              }`}
            /> */}
            <ShoppingCart />
            </div>
          </Link>
          <UserSection />
        </div>
      </div>
    </div>}
    </div>
  );
};

export default Header;
