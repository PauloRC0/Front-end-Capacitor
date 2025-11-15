"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FaCopy, FaUniversity, FaKey, FaBuilding, FaIdCard } from "react-icons/fa";
import { useState } from "react";

// LISTA DAS ONGs
const ONGS = [
  {
    id: 1,
    name: "SOS Gatinhos",
    cnpj: "23.456.789/0001-55",
    bank: "Caixa Econômica",
    agencia: "1444",
    conta: "000112-9",
    tipoConta: "Conta Corrente",
    pixKey: "pix@sosgatinhos.org",
    qrCode:
      "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=pix@sosgatinhos.org",
  },
  {
    id: 2,
    name: "Patinhas Felizes",
    cnpj: "12.345.678/0001-90",
    bank: "Banco do Brasil",
    agencia: "1234-5",
    conta: "98765-4",
    tipoConta: "Conta Corrente",
    pixKey: "pixinstitucional@patinhasfelizes.org",
    qrCode:
      "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=pixinstitucional@patinhasfelizes.org",
  },
  {
    id: 3,
    name: "Crianças Primeiro",
    cnpj: "01.987.654/0001-33",
    bank: "Bradesco",
    agencia: "5555",
    conta: "222233-1",
    tipoConta: "Poupança",
    pixKey: "doe@criancasprimeiro.org",
    qrCode:
      "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=doe@criancasprimeiro.org",
  },
];

export default function PixPage() {
  const searchParams = useSearchParams();

  // Pega o id pela URL → /pix?id=2
  const id = Number(searchParams.get("id"));

  // Busca a ONG correta
  const ONG = ONGS.find((o) => o.id === id) || ONGS[0];

  const [copied, setCopied] = useState(false);

  const copyKey = () => {
    navigator.clipboard.writeText(ONG.pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-10 text-[#3b1a66]">

      <h1 className="text-3xl font-bold mb-1 text-[#4A1D96]">Doação via PIX</h1>
      <p className="text- text-gray-500 mb-8 text-center">
        Faça sua contribuição de forma rápida e segura 💜
      </p>

      <div className="bg-purple-50 w-full max-w-md rounded-3xl p-7 shadow-md">

        {/* NOME DA ONG */}
        <div className="flex items-center gap-3 mb-4">
          <FaBuilding className="text-purple-700 text-2xl" />
          <h2 className="text-xl font-semibold">{ONG.name}</h2>
        </div>

        {/* CNPJ */}
        <div className="flex items-center gap-3 text-base mb-4">
          <FaIdCard className="text-purple-700" />
          <p className="text-gray-800">
            <span className="font-semibold">CNPJ:</span> {ONG.cnpj}
          </p>
        </div>

        {/* Dados bancários */}
        <div className="flex items-center gap-3 text-base mb-1">
          <FaUniversity className="text-purple-700" />
          <p className="text-gray-800">
            <span className="font-semibold">Banco:</span> {ONG.bank}
          </p>
        </div>

        <div className="ml-9 text-gray-800 text-base mb-4">
          <p><span className="font-semibold">Agência:</span> {ONG.agencia}</p>
          <p><span className="font-semibold">Conta:</span> {ONG.conta}</p>
          <p><span className="font-semibold">Tipo:</span> {ONG.tipoConta}</p>
        </div>

        {/* PIX */}
        <div className="flex items-center justify-between bg-white py-4 px-5 rounded-xl shadow-sm mb-5">
          <div className="flex items-center gap-2 max-w-[80%]">
            <FaKey className="text-purple-700 text-lg" />
            <p className="text-base font-medium break-all">{ONG.pixKey}</p>
          </div>

          <button onClick={copyKey} className="active:scale-95 transition">
            <FaCopy className="text-purple-700 text-xl" />
          </button>
        </div>

        {copied && (
          <p className="text-center text-base text-green-600 font-medium mb-2">
            ✔ Chave copiada!
          </p>
        )}

        <div className="w-full flex justify-center mt-4 mb-3">
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <Image
              src={ONG.qrCode}
              alt="QR Code PIX"
              width={260}
              height={260}
              className="rounded-lg"
            />
          </div>
        </div>

        <p className="text-center text-base text-gray-600 mt-2">
          Escaneie o QR Code para doar 💜
        </p>
      </div>

      <button
        onClick={() => history.back()}
        className="mt-8 text-purple-700 text-lg font-semibold underline active:scale-95"
      >
        Voltar
      </button>
    </div>
  );
}
