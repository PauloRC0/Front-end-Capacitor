"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {

    const categorias = ["Proteção Animal", "Saúde", "Combate á Fome", "Educação", "Meio Ambiente"];
    const [ativo, setAtivo] = useState(null);

    const [cardativo, setCardAtivo] = useState(0);
    const ref = useRef(null);

  const cards = [
    { nome: "SOS Gatinhos" },
    { nome: "Patinhas Felizes" },
    { nome: "Cães e Abrigos" },
    { nome: "Amigos da Rua" }
  ];

  // Detecta qual card está no centro
  useEffect(() => {
    const handleScroll = () => {
      const container = ref.current;
      const children = Array.from(container.children);

      let centro = container.scrollLeft + container.clientWidth / 2;

      let menorDist = Infinity;
      let indexAtivo = 0;

      children.forEach((card, index) => {
        const cardCentro =
          card.offsetLeft + card.clientWidth / 2;

        let dist = Math.abs(centro - cardCentro);

        if (dist < menorDist) {
          menorDist = dist;
          indexAtivo = index;
        }
      });

      setAtivo(indexAtivo);
    };

    const container = ref.current;
    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full pt-[44px] px-[25px]">
      
      {/* DIV 1 */}
      <div className="w-full mb-[40px] flex items-center justify-between">
        <Image
          src="/logo_roxa.svg"
          alt="DoeCerto"
            width={120}
            height={120}
            priority
        />

        {/* Menu hambúrguer */}
        <div className="flex flex-col gap-1 cursor-pointer">
          <span className="block w-6 h-[3px] bg-black rounded"></span>
          <span className="block w-6 h-[3px] bg-black rounded"></span>
          <span className="block w-6 h-[3px] bg-black rounded"></span>
        </div>
      </div>

      <div className="relative w-full">

      {/* QUADRADINHO DO ÍCONE */}
      <div className="absolute left-0 top-1/2 -translate-y-[37px] w-[35px] h-[35px] bg-white border border-[#999] rounded-[10px] flex items-center justify-center">
        <img src="/search.svg" alt="Buscar" className="w-5 h-5" />
      </div>

      {/* INPUT */}
      <input
        type="text"
        className="w-full h-[35px] bg-[#F5F5F5] mb-[40px] border border-[#999] rounded-[10px] pl-[55px] pr-[60px] outline-none"
        placeholder="Pesquisar..."
      />

      {/* BOTÃO DE FILTRAR */}
      <button className="absolute right-0 top-1/2 -translate-y-[37px] w-[35px] h-[35px] bg-[#6B21A8] rounded-[10px] flex items-center justify-center">
        <img src="/check.svg" alt="Filtrar" className="w-5 h-5 invert" />
      </button>

    </div>


    <div className="w-full">
      <div className="flex gap-[30px] mb-[40px] snap-x snap-mandatory overflow-x-scroll scrollbar-none pb-4">

        {/* CARD 1 */}
        <div className="snap-start border-[2px] border-[#999] w-[220px] rounded-[10px] overflow-hidden shrink-0">

          <div className="w-[220px] h-[150px] bg-gray-300">
            <img src="/sua-imagem.jpg" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col py-[10px] px-[15px]">
            <div className="w-full flex flex-row gap-2">
              <span className="font-bold text-[20px]">SOS GATINHOS</span>
              <span>✅</span>
            </div>

            <div className="mb-[20px]">⭐⭐⭐⭐⭐</div>

            <button className="bg-[#6B21A8] font-bold rounded-[10px] py-[5px] px-[60px] text-white text-[16px]">
              Doar
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="snap-start border-[2px] border-[#999] w-[220px] rounded-[10px] overflow-hidden shrink-0">

          <div className="w-[220px] h-[150px] bg-gray-300">
            <img src="/sua-imagem.jpg" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col py-[10px] px-[15px]">
            <div className="w-full flex flex-row gap-2">
              <span className="font-bold text-[20px]">Patinhas Felizes</span>
              <span>✅</span>
            </div>

            <div className="mb-[20px]">⭐⭐⭐⭐⭐</div>

            <button className="bg-[#6B21A8] font-bold rounded-[10px] py-[5px] px-[60px] text-white text-[16px]">
              Doar
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="snap-start border-[2px] border-[#999] w-[220px] rounded-[10px] overflow-hidden shrink-0">

          <div className="w-[220px] h-[150px] bg-gray-300">
            <img src="/sua-imagem.jpg" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col py-[10px] px-[15px]">
            <div className="w-full flex flex-row gap-2">
              <span className="font-bold text-[20px]">Amigos da Rua</span>
              <span>✅</span>
            </div>

            <div className="mb-[20px]">⭐⭐⭐⭐⭐</div>

            <button className="bg-[#6B21A8] font-bold rounded-[10px] py-[5px] px-[60px] text-white text-[16px]">
              Doar
            </button>
          </div>
        </div>

      </div>
    </div>

    <div className="w-full">

      {/* TÍTULO */}
      <p className="text-[20px] font-bold mb-[7px]">
        Categorias
      </p>

      {/* CARROSSEL DE BOTÕES */}
      <div className="flex flex-row gap-[8px] mb-[48px] overflow-x-auto snap-x snap-mandatory pb-2">

        {categorias.map((item, index) => (
          <button
            key={index}
            onClick={() => setAtivo(index)}
            className={`
              snap-start shrink-0 
              py-[7px] px-[14px] 
              rounded-[8px] font-bold text-[15px] border-[3px] border-[#999] bg-[#FFF]
              transition-colors
              ${ativo === index 
                ? "text-[#6B21A8] border-[#6B21A8]" 
                : "text-black border-[#999]"
              }
            `}
          >
            {item}
          </button>
        ))}

      </div>

    </div>

    <div className="w-full">

      {/* PARÁGRAFO */}
      <p className="text-[20px] font-bold mb-[30px]">
        Mais Próximas de você
      </p>

      {/* CARROSSEL */}
      <div
        ref={ref}
        className="flex flex-row gap-[8px] overflow-x-auto snap-x snap-mandatory pb-4 px-[100px]"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              snap-start shrink-0 transition-transform duration-300
              border-2 border-[#999] rounded-[10px] flex flex-col items-center
              ${ativo === index ? "scale-110" : "scale-90 opacity-70"}
            `}
          >
            {/* IMAGEM */}
            <div className="w-[160px] h-[160px] bg-gray-300 rounded-t-[10px]">
              <img
                src="/exemplo.jpg"
                className="w-full h-full object-cover rounded-t-[10px]"
                alt=""
              />
            </div>

            {/* INFORMAÇÕES */}
            <div className="w-full px-[10px] py-[7px] flex flex-col">
              
              {/* Nome + coração */}
              <div className="flex flex-row justify-between">
                <p className="font-bold">{card.nome}</p>
                <button className="text-[20px]">❤️</button>
              </div>

              {/* Estrelas */}
              <div>⭐⭐⭐⭐⭐</div>

              {/* Botão */}
              <div className="w-full flex justify-center">
                <button className="py-[3px] px-[40px] text-[16px] font-bold bg-[#6B21A8] text-white rounded-[8px]">
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
