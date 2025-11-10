"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Donation from "../../components/specific/Donation/donation";

export default function DonationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ong = searchParams?.get("ong") || "ONG Selecionada";
  const ongId = searchParams?.get("ongId") || undefined;

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      const payload = { ...data, ongId };
      console.log("Dados enviados:", payload);
      setShowPopup(true);
    } catch (error) {
      console.error("Erro no envio:", error);
      alert("Erro ao enviar a doação. Tente novamente.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center justify-center">
      <Donation
        ongName={ong}
        onSubmit={handleSubmit}
        onCancel={() => router.back()}
      />

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-gradient-to-br from-white/30 to-purple-200/40 animate-fadeIn">
          <div className="bg-white/90 rounded-3xl shadow-2xl border border-purple-100 p-8 w-[90%] max-w-[420px] text-center transform scale-95 animate-popupShow">
            <div className="flex flex-col items-center">
              <div className="bg-purple-600 rounded-full p-3 mb-4 shadow-lg shadow-purple-400/40 animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-purple-700 mb-2">
                Doação enviada!
              </h2>
              <p className="text-gray-700 mb-6 leading-snug">
                A ONG <span className="font-semibold text-purple-700">{ong}</span> entrará em contato para combinar o local de coleta.
              </p>

              <button
                onClick={() => router.push("/home")}
                className="bg-purple-600 text-white py-2 px-8 rounded-full font-semibold shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-200"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tailwind custom animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes popupShow {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }

        .animate-popupShow {
          animation: popupShow 0.4s ease forwards;
        }
      `}</style>
    </div>
  );
}
