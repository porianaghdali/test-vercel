
"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { House } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const pathname = usePathname();

  const headerList = [
    { title: "خانه", href: "/", icon: <House size={20} /> },
    { title: "خدمات", href: "/#services" },
    { title: "حسنیکال", href: "/hesnical" },
    { title: "ارتباط با ما", href: "/contactUs" },
    { title: "اخبار", href: "/news" },
    { title: "تحلیل", href: "/analyse" },
    { title: "بلاگ", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      setShowDemo(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuShow(false);
    document.body.style.overflow = "auto";
  }, []);

  useEffect(() => {
    if (mobileMenuShow) {
      document.body.style.overflow = "hidden";
      const handleEscape = (e) => {
        if (e.key === "Escape") closeMobileMenu();
      };
      window.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleEscape);
      };
    }
  }, [mobileMenuShow, closeMobileMenu]);

  return (
    <header
      className={` z-50 transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 right-0 left-0 py-4 shadow-md bg-[#120C3C] text-white"
          : "max-lg:fixed max-lg:top-0 right-0 left-0 lg:relative py-6 bg-white"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-5 flex justify-between items-center relative">
        {/* دکمه منو موبایل */}
        <button className="lg:hidden" onClick={() => setMobileMenuShow(true)}>
          <Image src="/images/menuIcon.svg" width={24} height={24} alt="menu" />
        </button>

        {/* لوگو */}
        <div>
          <Image
            className=" w-7 h-7  "
            width={58}
            height={61}
            alt="logo"
            src={isScrolled?"/images/whiteLogo.png":"/images/Logo.svg"}
          />
          
        </div>

        {/* منو دسکتاپ */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium mx-auto">
          {headerList.map((item, idx) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={idx}
                href={item.href}
                className={isScrolled?`flex items-center gap-2 text-white ${
                  isActive ? "!text-[#9270E2]" : ""
                }`:`flex items-center gap-2 ${
                  isActive ? "!text-[#713FC2]" : ""
                }`}
              >
                {item.icon && <span>{item.icon}</span>}
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* دکمه دمو */}
        {showDemo && (
          <button className="hidden lg:block absolute left-5 bg-[#8658D7] text-white px-4 py-2 rounded-lg text-sm">
            درخواست دمو
          </button>
        )}
      </div>

      {/* منو موبایل و بک‌دراپ */}
      {mobileMenuShow && (
        <div className="fixed inset-0 z-40">
          {/* پس‌زمینه تار */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          {/* منو موبایل */}
          <div className="absolute top-0 right-0 w-[80%] h-full bg-white shadow-xl transform translate-x-0 transition-transform duration-300 z-50">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-bold">منو</span>
              <button onClick={closeMobileMenu}>
                <Image src="/images/x-close.svg" width={20} height={20} alt="close" />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              {headerList.map((item, idx) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center gap-2 text-sm font-medium ${
                      isActive ? "text-[#713FC2]" : "text-gray-800"
                    }`}
                  >
                    {item.icon && <span>{item.icon}</span>}
                    {item.title}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
