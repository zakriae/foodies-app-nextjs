import logoImg from "@/assets/logo.png";
import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import LinkHeader from "./link-header";
const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg.src} priority />
          Foods
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <LinkHeader href={"/meals"}>Meals</LinkHeader>
            </li>
            <li>
              <LinkHeader href={"/community"}>foodies Community</LinkHeader>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
