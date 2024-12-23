"use client";
import { useMemo } from "react";

import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import { Skeleton } from "@/components/ui/skeleton";
import useGenericFetch from "@/hooks/queries/useGenericFetch";

const OrdersByCategory = () => {
  const { data, isPending, isError } = useGenericFetch<
    {
      category: string;
      value: number;
    }[]
  >("/orders-per-category");

  const chartData: {
    series: number[];
    options: ApexOptions;
  } = useMemo(() => {
    const series = data?.map((item) => item.value) || [];
    const labels = data?.map((item) => item.category) || [];

    const options: ApexOptions = {
      chart: {
        type: "donut",
        height: 250
      },
      plotOptions: {
        pie: {
          donut: {
            size: "50%"
          }
        }
      },
      labels,
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "10px",
          fontFamily: "Nunito Sans, sans-serif"
        }
      },
      tooltip: {
        y: {
          formatter: (val: number) => `${val} unidades`
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "right",
        horizontalAlign: "center",
        fontFamily: "Nunito Sans, sans-serif",
        fontSize: "12px",
        fontWeight: 700,
        labels: {
          colors: ["#393C56"],
          useSeriesColors: false
        },
        itemMargin: {
          horizontal: 8,
          vertical: 4
        }
      }
    };

    return {
      series,
      options
    };
  }, [data]);

  return (
    <div className="rounded-[15px] bg-white shadow-lg p-4 space-y-8 h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-base-black text-[19px] font-bold">
          Pedidos por categoria
        </h2>
        <div className="bg-[#F3F5F6] w-[80px] rounded-[15px]"></div>
      </div>

      {isPending ? (
        <Skeleton className={"h-[250px]"} />
      ) : isError ? (
        <div className="text-red h-[250px]">Erro ao carregar</div>
      ) : (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          height={250}
        />
      )}
    </div>
  );
};

export default OrdersByCategory;
