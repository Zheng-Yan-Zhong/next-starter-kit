import Link from "next/link";
import React from "react";
import style from "./navbar.module.css";
import { AiFillGithub } from "react-icons/ai";
function Navbar() {
  const navList = [
    {
      text: "about",
      href: "/about",
    },
    {
      text: "contact",
      href: "/contact",
    },
    {
      text: "projects",
      href: "/projects",
    },
  ];

  const mobileLinks = [
    {
      text: "github",
      icon: <AiFillGithub />,
      href: "https://github.com/Zheng-Yan-Zhong",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Link href="/">DZ</Link>
      </div>

      {/* mobile */}
      <ul className={style.mobile_links}>
        {mobileLinks.map((link) => (
          <li className={style.icon} key={link.text}>
            <a href={link.href} target="blank">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>

      {/* laptop or tablet or larger */}
      <ul className={style.links}>
        {navList.map((link) => (
          <li className={style.link} key={link.text}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
