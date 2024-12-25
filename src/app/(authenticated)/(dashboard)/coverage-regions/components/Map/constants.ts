import { monthNames } from "@/common/constants/months";
import { cn } from "@/utils/shadcn/utils";

export const geoJSONUrl = "/geo.json";

export const generateModalHTML = ({
  growth,
  value
}: {
  growth: number;
  value: number;
}): string => {
  const date = new Date().getMonth();
  const monthName = monthNames[date - 1];

  return `
    <div class="rounded-[15px] select-none font-ubuntu bg-white flex flex-col justify-center space-y-3">
      <h2 class="text-[#4E5D66] font-bold">Pedidos realizados no mês</h2>
      <div class="${cn(
        "w-fit rounded-full font-bold shadow-md min-w-[60px] px-3 text-center",
        growth > 0 ? "text-green" : "text-red"
      )}">
        ${growth > 0 ? "+" : ""}${growth}%
      </div>
      <div class="${cn(
        "text-sm h-[16px]",
        growth > 0 ? "text-green" : "text-red"
      )}">
        em relação a ${monthName}
      </div>
      <p class="text-[#4E5D66] space-x-1">
      <span class="text-[20px] font-bold">
      ${value}
      </span>
      <span class="font-medium">pedidos</span>
      </p>   
    </div>
  `;
};
