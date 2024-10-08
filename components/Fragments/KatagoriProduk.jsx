"use client";
import Link from "next/link";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { useState, useEffect } from "react";

const categories = [
  {
    name: "Aksesoris Komputer & Laptop",
    href: "#",
    subCategories: [
      {
        name: "Cables",
        href: "#",
        subCategories: [
          { name: "AUDIO Cables", href: "#" },
          { name: "BASEUS Cables", href: "#" },
          { name: "DP Cables", href: "#" },
          { name: "DVI Cables", href: "#" },
          { name: "HDMI Cables", href: "#" },
          { name: "Security Cables", href: "#" },
          { name: "USB Cables", href: "#" },
          { name: "VGA Cables", href: "#" },
        ],
      },
      {
        name: "Converter",
        href: "#",
        subCategories: [
          { name: "ATEN Converter", href: "#" },
          { name: "BAFO Converter", href: "#" },
          { name: "BASEUS Converter", href: "#" },
          { name: "BLACKMAGIC DESIGN Converter", href: "#" },
          { name: "DTECH Converter", href: "#" },
          { name: "MCDODO Converter", href: "#" },
          { name: "MTECH Converter", href: "#" },
          { name: "OEM Converter", href: "#" },
          { name: "ORICO Converter", href: "#" },
          { name: "TARGUS Converter", href: "#" },
          { name: "UGREEN Converter", href: "#" },
          { name: "UNITEK Converter", href: "#" },
          { name: "VCOM Converter", href: "#" },
          { name: "VERBACOM Converter", href: "#" },
        ],
      },
      {
        name: "Cooling Pads",
        href: "#",
        subCategories: [{ name: "MURAGO Cooling Pads", href: "#" }],
      },
      {
        name: "Digitizer",
        href: "#",
        subCategories: [
          { name: "HUION Digitizer", href: "#" },
          { name: "WACOM Digitizer", href: "#" },
        ],
      },
      {
        name: "Disc",
        href: "#",
        subCategories: [{ name: "GT-PRO Disc ", href: "#" }],
      },
      {
        name: "Kursi Gaming",
        href: "#",
        subCategories: [
          { name: "FANTECH Kursi Gaming", href: "#" },
          { name: "ONEX Digitizer", href: "#" },
        ],
      },
      {
        name: "Laptop Bag / Case",
        href: "#",
        subCategories: [
          { name: "ACER Laptop Bag / Case", href: "#" },
          { name: "DELL Laptop Bag / Case", href: "#" },
          { name: "HP Laptop Bag / Case", href: "#" },
          { name: "LENOVO Laptop Bag / Case", href: "#" },
          { name: "MICROSOFT Laptop Bag / Case", href: "#" },
          { name: "TARGUS Laptop Bag / Case", href: "#" },
        ],
      },
      {
        name: "Signature Pad",
        href: "#",
        subCategories: [{ name: "TOPAZ Signature Pad ", href: "#" }],
      },
      {
        name: "USB Hub",
        href: "#",
        subCategories: [
          { name: "BASEUS USB Hub", href: "#" },
          { name: "ORICO USB Hub", href: "#" },
          { name: "PROLINK USB Hub", href: "#" },
          { name: "PX USB Hub", href: "#" },
          { name: "TARGUS USB Hub", href: "#" },
          { name: "UGREEN USB Hub", href: "#" },
          { name: "VERBATIM USB Hub", href: "#" },
        ],
      },
      {
        name: "Web Camera",
        href: "#",
        subCategories: [
          { name: "FANTECH Web Camera", href: "#" },
          { name: "INFORCE Web Camera", href: "#" },
          { name: "LOGITECH Web Camera", href: "#" },
          { name: "MAXHUB Web Camera", href: "#" },
          { name: "OBSBOT Web Camera", href: "#" },
          { name: "SPC Web Camera", href: "#" },
          { name: "X6 Web Camera", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Audio & Sound System",
    href: "#",
    subCategories: [
      {
        name: "Accessories Sound Sytem",
        href: "#",
        subCategories: [
          { name: "AKG Accessories Sound System", href: "#" },
          { name: "BELYST Accessories Sound System", href: "#" },
          { name: "BSS Accessories Sound System", href: "#" },
          { name: "CROWN Accessories Sound System", href: "#" },
          { name: "DBX Accessories Sound System", href: "#" },
          { name: "OEM Accessories Sound System", href: "#" },
          { name: "PRIMATECH Accessories Sound System", href: "#" },
          { name: "TOA Accessories Sound System", href: "#" },
        ],
      },
      {
        name: "Audio Portable",
        href: "#",
        subCategories: [
          { name: "AUDERN Audio Portable", href: "#" },
          { name: "AUDERPRO Audio Portable", href: "#" },
          { name: "JBL Audio Portable", href: "#" },
          { name: "PRIMATECH Audio Portable", href: "#" },
          { name: "TOA Audio Portable", href: "#" },
        ],
      },
      {
        name: "Ceiling Speaker System",
        href: "#",
        subCategories: [
          { name: "AUDERN Ceiling Speaker System", href: "#" },
          { name: "AUDERPRO Ceiling Speaker System", href: "#" },
          { name: "JBL Ceiling Speaker System", href: "#" },
          { name: "PRIMATECH Ceiling Speaker System", href: "#" },
          { name: "TOA Ceiling Speaker System", href: "#" },
        ],
      },
      {
        name: "Conference System",
        href: "#",
        subCategories: [{ name: "TOA Conference System", href: "#" }],
      },
      {
        name: "Earphone",
        href: "#",
        subCategories: [
          { name: "ANKER Earphone", href: "#" },
          { name: "BASEUS Earphone", href: "#" },
          { name: "CREATIVE Earphone", href: "#" },
          { name: "EGGEL Earphone", href: "#" },
          { name: "INFINIX Earphone", href: "#" },
          { name: "LENOVO Earphone", href: "#" },
          { name: "LG Earphone", href: "#" },
          { name: "LOGiTECH Earphone", href: "#" },
          { name: "OLIKE Earphone", href: "#" },
          { name: "PANASONIC Earphone", href: "#" },
          { name: "ROBOT Earphone", href: "#" },
          { name: "SONY Earphone", href: "#" },
          { name: "SOUNDMAGIC Earphone", href: "#" },
          { name: "V-GEN Earphone", href: "#" },
          { name: "VERBATIM Earphone", href: "#" },
          { name: "VIVO Earphone", href: "#" },
          { name: "XIAOMI Earphone", href: "#" },
        ],
      },
      {
        name: "Headphone",
        href: "#",
        subCategories: [
          { name: "AKG Headphone", href: "#" },
          { name: "ANKER Headphone", href: "#" },
          { name: "CREATIVE Headphone", href: "#" },
          { name: "EKSA Headphone", href: "#" },
          { name: "HAVIT Headphone", href: "#" },
          { name: "PANASONIC Headphone", href: "#" },
          { name: "SENNHEISER Headphone", href: "#" },
          { name: "SONY Headphone", href: "#" },
          { name: "XIAOMI Headphone", href: "#" },
        ],
      },
      { name: "Headset", href: "#" },
      { name: "Microphone", href: "#" },
      { name: "Mixer & Amplifier", href: "#" },
      { name: "Speaker", href: "#" },
    ],
  },
  {
    name: "Elektronik",
    href: "#",
    subCategories: [
      { name: "Accessories Sound System", href: "#" },
      { name: "Audio Portable", href: "#" },
      { name: "Ceiling Speaker System", href: "#" },
      { name: "Conference System", href: "#" },
      { name: "Earphone", href: "#" },
      { name: "Headphone", href: "#" },
      { name: "Headset", href: "#" },
      { name: "Microphone", href: "#" },
      { name: "Mixer & Amplifier", href: "#" },
      { name: "Speaker", href: "#" },
    ],
  },
  { name: "Kamera", href: "#" },
  { name: "Komponen Komputer", href: "#" },
  { name: "Komputer & Laptop", href: "#" },
  { name: "Networking", href: "#" },
  { name: "Office Furniture", href: "#" },
  { name: "Office Products", href: "#" },
  { name: "Perkakas", href: "#" },
  { name: "Point of Sales", href: "#" },
  { name: "Security System", href: "#" },
];

function KategoriProduk() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (categoryName) => {
    setOpenCategories((prevOpenCategories) => ({
      ...prevOpenCategories,
      [categoryName]: !prevOpenCategories[categoryName],
    }));
  };

  const handleClickOutside = (event) => {
    const target = event.target;
    if (
      !target.closest(".kategori-produk") &&
      !target.closest(
        ".flex.items-center.px-4.py-2.text-white.bg-blue-600.rounded"
      )
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        !event.target.closest(".kategori-produk") &&
        !event.target.closest(
          ".flex.items-center.px-4.py-2.text-white.bg-blue-600.rounded"
        )
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [setIsOpen]);

  return (
    <div className="kategori-produk relative inline-block">
      <button
        className="flex items-center px-4 py-2 text-white bg-blue-600 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Kategori Produk
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-64 bg-white p-4 shadow-md rounded-md z-10">
          <h2 className="text-lg font-bold mb-4">PRODUCT CATEGORIES</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.name}>
                <div>
                  <Link
                    href={category.href}
                    className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded border-b border-gray-200"
                  >
                    <span className="flex-grow">{category.name}</span>
                    {category.subCategories && (
                      <span
                        className="ml-2 cursor-pointer"
                        onClick={() => toggleCategory(category.name)}
                      >
                        {openCategories[category.name] ? (
                          <BsChevronDown />
                        ) : (
                          <BsChevronRight />
                        )}
                      </span>
                    )}
                  </Link>
                </div>
                {openCategories[category.name] && (
                  <ul className="ml-4 mt-2">
                    {category.subCategories.map((subCategory) => (
                      <li key={subCategory.name}>
                        <Link
                          href={subCategory.href}
                          className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded border-b border-gray-200"
                        >
                          <span className="flex-grow">{subCategory.name}</span>
                          {subCategory.subCategories && (
                            <span
                              className="ml-2 cursor-pointer"
                              onClick={() => toggleCategory(subCategory.name)}
                            >
                              {openCategories[subCategory.name] ? (
                                <BsChevronDown />
                              ) : (
                                <BsChevronRight />
                              )}
                            </span>
                          )}
                        </Link>
                        {openCategories[subCategory.name] && (
                          <ul className="ml-4 mt-2">
                            {subCategory.subCategories.map((subSubCategory) => (
                              <li key={subSubCategory.name}>
                                <Link
                                  href={subSubCategory.href}
                                  className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded border-b border-gray-200"
                                >
                                  <span className="flex-grow">
                                    {subSubCategory.name}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default KategoriProduk;
