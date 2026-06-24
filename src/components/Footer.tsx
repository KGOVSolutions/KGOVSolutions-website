import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-400">
      <div className="accent-bar" />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <p className="flex items-baseline gap-1.5 text-lg font-bold text-white">
              KGOV<span className="font-medium text-blue-400">Solutions</span>
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed">
              Service-Disabled Veteran-Owned Small Business · Sidney, Michigan
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          &copy; 2026 KGOV Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
