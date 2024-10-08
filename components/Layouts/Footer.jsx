import React from "react";
import Logo from "../../assets/images/logo.webp";
import Paymentimg from "../../assets/images/Payment-Method.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white p-8 mt-8">
      <div className="container mr-[120px] ml-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-[12px]">
          {/* Kolom 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <Image src={Logo} alt="logo perusahaan" width={220} height={80} />
            </h3>
            <p className="text-sm">
              Jika Anda ingin bantuan atau memiliki saran, silakan hubungi kami:
            </p>
            <address className="mt-4 text-sm not-italic">
              <p>Jl. Karimun Jawa No. 2, Gubeng,</p>
              <p>Surabaya, Kec. Gubeng, Jawa Timur,</p>
              <p>60281 - Indonesia</p>
            </address>
            <p className="mt-4 text-sm">
              <span className="font-semibold">Telp:</span> 02150605178
            </p>
            <p className="text-sm">
              <span className="font-semibold">WA:</span> 08113127777
            </p>
            <p className="text-sm">
              <span className="font-semibold">Jam Operasional:</span>{" "}
              Senin-Jumat 08:00 - 17:00
            </p>
            <p className="text-sm mt-2">
              Anugrahpratama.com adalah perusahaan suplier barang-barang
              komputer, laptop & Elektronik.
            </p>
          </div>

          {/* Kolom 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Info</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Akun
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Artikel
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Service Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Lowongan Kerja
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Kebijakan Purna Jual
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Kebijakan Mutu dan Anti Penyuapan
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Kebijakan Privasi, Keamanan dan Pelanggan
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solusi Kami</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Jasa Pasang CCTV
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Jasa Rakit PC
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Jasa Pasang Videotron
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Jual Cisco SMB - Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Katalog Produk
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Metode Pembayaran</h3>
            <Image
              src={Paymentimg}
              alt="logo perusahaan"
              width={220}
              height={80}
            />

            <h3 className="text-lg font-semibold mt-8 mb-4">Temukan Kami</h3>
            {/* Ganti dengan ikon media sosial */}
            <div className="flex flex-wrap gap-2">
              {/* Contoh: */}
              <a href="#" className="text-lg hover:text-blue-500">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#" className="text-lg hover:text-blue-500">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              {/* Tambahkan ikon lainnya */}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-gray-300">
        <p className="text-sm mt-9">
          &copy; {new Date().getFullYear()} Anugrahpratama.com. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
