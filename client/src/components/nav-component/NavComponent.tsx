'use client'
import c from "./NavComponent.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavComponent() {
  const pathname = usePathname()
  const pathParts = pathname.split('/');
  const pathFirstString = pathParts.length > 1 ? '/' + pathParts[1] : '/';

  return (
    <>
      <nav className={c.nav}>
        <Link className={pathFirstString === '/' ? c.link + ' ' + c.active : c.link} href="/">
          Top rated
        </Link>
        <Link className={pathFirstString === '/cats-search' ? c.link + ' ' + c.active : c.link} href={pathFirstString === '/cats-search' ? "" : "/cats-search"}>
          Search
        </Link>
      </nav>
    </>
  )
}