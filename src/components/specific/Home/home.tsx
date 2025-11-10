"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const categorias = ["Proteção Animal", "Saúde", "Combate á Fome", "Educação", "Meio Ambiente"];
  const [ativo, setAtivo] = useState<number | null>(null);
  const [cardativo, setCardAtivo] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const cards = [
    { id: 1, nome: "SOS Gatinhos" },
    { id: 2, nome: "Patinhas Felizes" },
    { id: 3, nome: "Cães e Abrigos" },
    { id: 4, nome: "Amigos da Rua" },
  ];

  // Detecta qual card está no centro
  useEffect(() => {
    const handleScroll = () => {
      const container = ref.current;
      if (!container) return;
      const children = Array.from(container.children);
      const centro = container.scrollLeft + container.clientWidth / 2;
      let menorDist = Infinity;
      let indexAtivo = 0;

     children.forEach((card, index) => {
  const element = card as HTMLElement; // 👈 converte o tipo
  const cardCentro = element.offsetLeft + element.clientWidth / 2;
  const dist = Math.abs(centro - cardCentro);
        if (dist < menorDist) {
          menorDist = dist;
          indexAtivo = index;
        }
      });

      setAtivo(indexAtivo);
    };

    const container = ref.current;
    if (container) container.addEventListener("scroll", handleScroll);
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col w-full pt-[44px] px-[25px]">
      {/* TOPO */}
      <div className="w-full mb-[40px] flex items-center justify-between">
        <Image src="/logo_roxa.svg" alt="DoeCerto" width={120} height={120} priority />
        {/* Menu hambúrguer */}
        <div className="flex flex-col gap-1 cursor-pointer">
          <span className="block w-6 h-[3px] bg-black rounded"></span>
          <span className="block w-6 h-[3px] bg-black rounded"></span>
          <span className="block w-6 h-[3px] bg-black rounded"></span>
        </div>
      </div>

      {/* INPUT DE BUSCA */}
      <div className="relative w-full">
        {/* Ícone de busca */}
        <div className="absolute left-0 top-1/2 -translate-y-[37px] w-[35px] h-[35px] bg-white border border-[#999] rounded-[10px] flex items-center justify-center">
          <img src="/search.svg" alt="Buscar" className="w-5 h-5" />
        </div>

        {/* Campo */}
        <input
          type="text"
          className="w-full h-[35px] bg-[#F5F5F5] mb-[40px] border border-[#999] rounded-[10px] pl-[55px] pr-[60px] outline-none"
          placeholder="Pesquisar..."
        />

        {/* Botão de filtro */}
        <button className="absolute right-0 top-1/2 -translate-y-[37px] w-[35px] h-[35px] bg-[#6B21A8] rounded-[10px] flex items-center justify-center">
          <img src="/check.svg" alt="Filtrar" className="w-5 h-5 invert" />
        </button>
      </div>

      {/* PRIMEIRA FILEIRA DE CARDS */}
      <div className="w-full">
        <div className="flex gap-[30px] mb-[40px] snap-x snap-mandatory overflow-x-scroll scrollbar-none pb-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="snap-start border-[2px] border-[#999] w-[220px] rounded-[10px] overflow-hidden shrink-0"
            >
              <div className="w-[220px] h-[150px] bg-gray-300">
                <img src="/sua-imagem.jpg" className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col py-[10px] px-[15px]">
                <div className="w-full flex flex-row gap-2">
                  <span className="font-bold text-[20px]">{card.nome}</span>
                  <span>✅</span>
                </div>

                <div className="mb-[20px]">⭐⭐⭐⭐⭐</div>

                {/* Botão Doar */}
                <button
                  onClick={() => {
                    const query = `?ong=${encodeURIComponent(card.nome)}&ongId=${encodeURIComponent(card.id)}`;
                    router.push(`/donation${query}`);
                  }}
                  className="bg-[#6B21A8] hover:bg-[#581c87] font-bold rounded-[10px] py-[5px] px-[60px] text-white text-[16px] transition"
                >
                  Doar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIAS */}
      <div className="w-full">
        <p className="text-[20px] font-bold mb-[7px]">Categorias</p>
        <div className="flex flex-row gap-[8px] mb-[48px] overflow-x-auto snap-x snap-mandatory pb-2">
          {categorias.map((item, index) => (
            <button
              key={index}
              onClick={() => setAtivo(index)}
              className={`
                snap-start shrink-0 py-[7px] px-[14px] rounded-[8px]
                font-bold text-[15px] border-[3px] transition-colors
                ${
                  ativo === index
                    ? "text-[#6B21A8] border-[#6B21A8] bg-white"
                    : "text-black border-[#999] bg-[#FFF]"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* SEGUNDA FILEIRA DE CARDS */}
      <div className="w-full">
        <p className="text-[20px] font-bold mb-[30px]">Mais Próximas de você</p>

        <div
          ref={ref}
          className="flex flex-row gap-[8px] overflow-x-auto snap-x snap-mandatory pb-4 px-[100px]"
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`
                snap-start shrink-0 transition-transform duration-300
                border-2 border-[#999] rounded-[10px] flex flex-col items-center
                ${ativo === index ? "scale-110" : "scale-90 opacity-70"}
              `}
            >
              {/* Imagem */}
              <div className="w-[160px] h-[160px] bg-gray-300 rounded-t-[10px]">
                <img
                  src="/exemplo.jpg"
                  className="w-full h-full object-cover rounded-t-[10px]"
                  alt=""
                />
              </div>

              {/* Informações */}
              <div className="w-full px-[10px] py-[7px] flex flex-col">
                <div className="flex flex-row justify-between">
                  <p className="font-bold">{card.nome}</p>
                  <button className="text-[20px]">❤️</button>
                </div>

                <div>⭐⭐⭐⭐⭐</div>

                <div className="w-full flex justify-center">
                  <button
                    onClick={() => {
                      const query = `?ong=${encodeURIComponent(card.nome)}&ongId=${encodeURIComponent(card.id)}`;
                      router.push(`/donation${query}`);
                    }}
                    className="py-[3px] px-[40px] text-[16px] font-bold bg-[#6B21A8] text-white rounded-[8px] hover:bg-[#581c87] transition"
                  >
                    Doar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}