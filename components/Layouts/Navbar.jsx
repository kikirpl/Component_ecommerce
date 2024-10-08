import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.webp";
import KategoriProduk from "../Fragments/KatagoriProduk";

const Navbar = () => {
  return (
    <div className="w-full border-b">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="logo perusahaan"
            width={220}
            height={80}
            className="ml-[120px]"
          />
        </div>
        <div className="flex items-center w-1/2 ml-4">
          <input
            type="text"
            placeholder="Cari Produk..."
            className="w-full p-2 pl-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <i className="fas fa-search absolute ml-3 text-gray-500" />
        </div>
        <div className="flex items-center mr-[120px]">
          <span className="">Rp0</span>
          <i className="fas fa-shopping-cart relative">
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
              0
            </span>
          </i>
        </div>
      </div>
      <div className="border-t border-gray-200" />
      <div className="flex items-center justify-between px-4 py-2 bg-white mt-2">
        <div className="ml-[120px]">
          <KategoriProduk />
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link href="/artikel" className="text-gray-600 hover:text-blue-600">
            Artikel
          </Link>
          <Link href="/diskon" className="text-gray-600 hover:text-blue-600">
            Diskon
          </Link>
          <Link
            href="/kontak-kami"
            className="text-gray-600 hover:text-blue-600"
          >
            Kontak Kami
          </Link>
          <Link
            href="/katalog-produk"
            className="text-gray-600 hover:text-blue-600"
          >
            Katalog Produk
          </Link>
          <Link
            href="/tentang-kami"
            className="text-gray-600 hover:text-blue-600"
          >
            Tentang Kami
          </Link>
          <Link href="/faq" className="text-gray-600 hover:text-blue-600">
            FAQ
          </Link>
        </nav>
        <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded mr-[120px]">
          Akun Saya
        </button>
      </div>
    </div>
  );
};

export default Navbar;
