"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./link-header.module.css";

const LinkHeader = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${classes.active} ${classes.link}` : undefined
      }
    >
      {children}
    </Link>
  );
};

export default LinkHeader;
