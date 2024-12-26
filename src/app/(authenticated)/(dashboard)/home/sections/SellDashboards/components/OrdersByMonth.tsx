"use client";
import { useMemo } from "react";

import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import { monthNames } from "@/common/constants/months";
import { Skeleton } from "@/components/ui/skeleton";
import useGenericFetch from "@/hooks/queries/useGenericFetch";

const OrdersByMonth = () => {
  const { data, isPending, isFetching, isError } = useGenericFetch<
    {
      month: number;
      value: number;
    }[]
  >("/sells-per-month");

  const seriesData = useMemo(() => {
    const response: number[] = Array(12).fill(0);

    if (!data) return response;

    data.forEach((item) => {
      response[item.month] = item.value;
    });

    return response;
  }, [data]);

  const chartData: {
    series: ApexAxisChartSeries;
    options: ApexOptions;
  } = {
    series: [
      {
        name: "Pedidos",
        data: seriesData
      }
    ],
    options: {
      chart: {
        type: "bar",
        height: 250
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadiusApplication: "around"
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: monthNames.map((month) => month.slice(0, 3).toUpperCase()),
        labels: {
          rotate: 0,
          style: {
            colors: ["#393C56"],
            fontSize: "12px",
            fontWeight: 700,
            fontFamily: "Nunito Sans"
          }
        }
      },
      fill: {
        opacity: 1,
        colors: ["#393C56"]
      },
      tooltip: {
        y: {
          formatter: (val: number) => `${val} pedidos`
        }
      }
    }
  };

  return (
    <div className="h-full rounded-[15px] bg-white shadow-lg p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-base-black text-[19px] font-bold">
          Pedidos por mês
        </h2>
        <div className="bg-[#F3F5F6] w-[80px] rounded-[15px]"></div>
      </div>

      {isPending || isFetching ? (
        <Skeleton className={"h-[250px]"} />
      ) : isError ? (
        <div className="text-red h-[250px]">Erro ao carregar</div>
      ) : (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={250}
        />
      )}
    </div>
  );
};

export default OrdersByMonth;
