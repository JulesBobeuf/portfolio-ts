"use client"; // client

import Link from "next/link";
import { Avatar } from "../Avatar";
import styles from "./navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex flex-wrap place-items-center overflow-hidden">
        <section className="relative mx-auto">
          <nav className="flex justify-between text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <Link className="text-3xl font-bold font-heading" href="/">
                <Avatar size={process.env.NAVBAR_AVATAR_SIZE? +process.env.NAVBAR_AVATAR_SIZE : 64} src={process.env.NAVBAR_AVATAR_URL ? process.env.NAVBAR_AVATAR_URL : "/avatar/choix.jpg"}/>
              </Link>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li><Link className={styles.navlink} href="/">About me</Link></li>
                <li><Link className={styles.navlink} href="/projects">Projects</Link></li>
              </ul>
              <div className="hidden md:flex mr-10 items-center space-x-5 items-center">
                <a className={`hover:${styles.filterGray}`} href="https://github.com/JulesBobeuf" target="_blank">
                  <img src={process.env.GITHUB_ICON ? process.env.GITHUB_ICON : "/icons/github.svg"} className={`h-6 w-6 ${styles.filterWhite}`}/>
                </a>
                <a className={`hover:${styles.filterGray}`} href="https://www.linkedin.com/in/bobeuf-jules/" target="_blank">
                  <img src={process.env.LINKEDIN_ICON ? process.env.LINKEDIN_ICON : "/icons/linkedin.svg"} className={`h-6 w-6 ${styles.filterWhite}`}/>
                </a>
                <a className={`hover:${styles.filterGray}`} href="/navbar/cv_en.pdf" target="_blank" rel="noopener noreferrer">
                  CV
                </a>
              </div>
            </div>
            <a className="navbar-burger self-center mr-8 md:hidden" href="#" onClick={toggleMenu}>
                <svg xmlns="" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </a>
          </nav>
          {isMenuOpen && (
            <div className={`my-4 md:hidden ${isMenuOpen ? 'active' : ''}`}>
              {/* Mobile menu content */}
              <div className="grid grid-cols-2">
                <div>
                  <ul className="block px-4 mx-auto font-semibold font-heading space-y-4">
                    <li>
                      <Link className={`${styles.navlink} p-2`} href="/">
                        About me
                      </Link>
                    </li>
                    <li>
                      <Link className={`${styles.navlink} p-2`} href="#">
                        Work
                      </Link>
                    </li>
                    <li>
                      <Link className={`${styles.navlink} p-2`} href="/projects">
                        Projects
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row justify-end">
                  <ul className="mr-8">
                    <a className={`hover:${styles.filterGray} m-4`} href="https://github.com/JulesBobeuf" target="_blank">
                      <img src={process.env.GITHUB_ICON ? process.env.GITHUB_ICON : "/icons/github.svg"} className={`h-6 w-6 ${styles.filterWhite}`}/>
                    </a>
                    <a className={`hover:${styles.filterGray} m-4`} href="https://www.linkedin.com/in/bobeuf-jules/" target="_blank">
                      <img src={process.env.LINKEDIN_ICON ? process.env.LINKEDIN_ICON : "/icons/linkedin.svg"} className={`h-6 w-6 ${styles.filterWhite}`}/>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Navbar;