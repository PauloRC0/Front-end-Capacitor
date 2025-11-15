"use client";

type Props = {
  onClose: () => void;
  onDonateMoney: () => void;
  onDonateItems: () => void;
};

export default function DonateModal({ onClose, onDonateMoney, onDonateItems }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 backdrop-blur-sm bg-black/30"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-xl w-[92%] max-w-sm p-5 z-10">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#6B21A8] flex items-center justify-center text-white text-2xl shadow-lg">
            ❤
          </div>

          <h3 className="mt-4 text-lg font-semibold text-[#3b1a66]">
            Como deseja doar?
          </h3>

          <div className="mt-5 w-full flex flex-col gap-3">
            <button
              onClick={onDonateMoney}
              className="w-full py-3 rounded-xl text-white font-semibold bg-[#6B21A8] active:scale-95 transition"
            >
              Doar dinheiro
            </button>

            <button
              onClick={onDonateItems}
              className="w-full py-3 rounded-xl text-[#6B21A8] border border-[#6B21A8] bg-white font-semibold active:scale-95 transition"
            >
              Doar itens
            </button>
          </div>

          <button
            onClick={onClose}
            className="mt-4 text-sm text-gray-500 underline"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}