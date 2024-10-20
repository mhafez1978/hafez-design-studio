"use client";
import { AppPages } from "@/app/assets/AppMenu";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
import { useState } from "react";

interface DesktopMenuProps {
  linkColor: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ linkColor }) => {
  //const pathname = usePathname(); // Get the current pathname
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setOpenSubMenu(index);
  };

  const handleMouseLeave = () => {
    setOpenSubMenu(null);
  };
  return (
    <nav>
      <ul className="flex space-x-8">
        {AppPages.map((page, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Render top-level menu */}
            <a
              href={page.pageURL || ""}
              className={`${linkColor} hover:no-underline hover:text-sky-700`}
            >
              {page.pageTitle}
            </a>

            {/* Check if subPages exist and render submenu */}
            {page.subPages && openSubMenu === index && (
              <ul
                className="absolute left-0 top-full bg-white shadow-md pl-2 pt-4 pb-4 w-[180px] rounded-lg"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {page.subPages.map((subPage, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subPage.href}
                      className="block py-2 text-left hover:bg-sky-100 no-underline	"
                    >
                      {subPage.pageTitle}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
