import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <Navigation />
    </header>
  );
}

export function Navigation() {
  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/certificates", label: "Certificates" },
  ];

  return (
    <nav className="fixed top-4 inset-x-4 z-50 container w-full mx-auto bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Image src='/ce-dev.png' alt="Francisco Juan Developer" width={30} height={30} />
            <span className="text-xl font-bold text-white">Juan Severiano</span>
          </div>
          <div className="flex items-center space-x-4 font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
