"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="accent-bar" />
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-baseline gap-1.5 text-xl font-bold tracking-tight text-slate-900"
          >
            KGOV
            <span className="font-medium text-blue-700">Solutions</span>
          </Link>
          <nav aria-label="Primary">
            <ul className="flex gap-1 text-sm font-medium">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative rounded-md px-3 py-2 transition-colors ${
                        active
                          ? "text-slate-900"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-blue-700 transition-transform duration-200 ${
                          active ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
