"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import DonateModal from "@/components/specific/DonateModal";


export default function HomePage() {
  const router = useRouter();
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const chipsRef = useRef<HTMLDivElement | null>(null);

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedOng, setSelectedOng] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const primary = "#6B21A8";

  // ONGs fixas (mockadas)
  const ongs = [
    {
      id: 1,
      name: "SOS Gatinhos",
      img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&w=600",
      distance: "1.2 km",
    },
    {
      id: 2,
      name: "Patinhas Felizes",
      img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&w=600",
      distance: "2.6 km",
    },
    {
      id: 3,
      name: "Casa do Bem",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=60",
      distance: "3.1 km",
    },
    {
      id: 4,
      name: "Ação Solidária",
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=60",
      distance: "4.0 km",
    },
    {
      id: 5,
      name: "Mãos que Ajudam",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=60",
      distance: "5.2 km",
    },
    {
      id: 6,
      name: "Projeto Nutrir",
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
      distance: "6.3 km",
    },
    {
      id: 7,
      name: "Crianças Primeiro",
      img: "https://images.unsplash.com/photo-1503457574462-bd27054394c1?auto=format&w=600",
      distance: "7.4 km",
    },
    {
      id: 8,
      name: "Anjos da Rua",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
      distance: "8.1 km",
    },
  ];

  const categories = [
    "Proteção Animal",
    "Saúde",
    "Combate à Fome",
    "Educação",
    "Meio Ambiente",
    "Idosos",
  ];

  /* ----------------------- DOAÇÃO ---------------------- */

  function openDonateModal(ongId: number) {
    setSelectedOng(ongId);
    setIsModalOpen(true);
  }

  function goToDonateItems() {
    if (!selectedOng) return;

    const ong = ongs.find((o) => o.id === selectedOng);
    if (!ong) return;

    router.push(
      `/donation?ongId=${selectedOng}&ong=${encodeURIComponent(ong.name)}`
    );
  }

  function goToDonateMoney() {
    if (!selectedOng) return;
    setIsModalOpen(false);
    router.push(`/pix?id=${selectedOng}`);
  }

  /* ----------------------- UI ---------------------- */

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="px-5 pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
             <Image src="/logo_roxa.svg" alt="DoeCerto" width={120} height={120} priority /> 
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-md hover:bg-gray-100 active:scale-95 transition">
            <FiMenu size={20} />
          </button>

          <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="https://placehold.co/80x80/ddd/aaa.png"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Search */}
      <div className="px-5">
        <div className="flex items-center gap-3 bg-white shadow-sm rounded-xl px-3 py-2">
          <FiSearch className="text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquise uma ONG, cidade ou causa"
            className="w-full outline-none text-base"
          />
          {query && (
            <button onClick={() => setQuery("")}>
              <FiX />
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="mt-4 px-5">
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
          {categories.map((c, i) => {
            const isSelected = selectedCategory === c;
            return (
              <button
                key={i}
                onClick={() => setSelectedCategory(isSelected ? null : c)}
                className={`whitespace-nowrap px-4 py-2 rounded-full border text-base shadow-sm active:scale-95 transition ${
                  isSelected
                    ? "border-purple-700 bg-purple-100 text-purple-800"
                    : "border-gray-200 bg-white text-gray-700"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      {/* Carrossel */}
      <section className="mt-5 px-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-gray-800">
            ONGs recomendadas
          </h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 no-scrollbar">
          {ongs.map((ong) => (
            <div
              key={ong.id}
              onClick={() => router.push(`/ong-public-profile/${ong.id}`)}
              className="min-w-[220px] bg-white rounded-2xl shadow-md overflow-hidden active:scale-95 transition cursor-pointer"
            >
              <div className="w-full h-[170px] bg-gray-200">
                <img
                  src={ong.img}
                  alt={ong.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  {ong.name}
                </h3>

                <div className="flex items-center gap-2 text-base text-gray-500 mt-1">
                  <FaMapMarkerAlt size={12} />
                  <span>{ong.distance}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openDonateModal(ong.id);
                  }}
                  className="mt-3 w-full bg-[#6B21A8] text-white py-1.5 rounded-lg text-sm font-semibold active:scale-95 transition"
                >
                  Doar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lista */}
      <section className="mt-6 px-5 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Mais próximas de você
        </h2>

        <div className="space-y-4">
          {ongs.map((ong) => (
            <div
              key={ong.id}
              onClick={() => router.push(`/ong-public-profile/${ong.id}`)}
              className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-4 cursor-pointer active:scale-95 transition"
            >
              <div className="w-28 h-28 rounded-xl overflow-hidden bg-gray-200">
                <img
                  src={ong.img}
                  alt={ong.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900">
                  {ong.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Voluntários · {ong.distance}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openDonateModal(ong.id);
                }}
                className="bg-[#6B21A8] text-white px-4 py-2 rounded-lg text-sm font-semibold active:scale-95"
              >
                Doar
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
  <DonateModal
    onClose={() => setIsModalOpen(false)}
    onDonateMoney={goToDonateMoney}
    onDonateItems={goToDonateItems}
  />
)}

    </div>
  );
}
