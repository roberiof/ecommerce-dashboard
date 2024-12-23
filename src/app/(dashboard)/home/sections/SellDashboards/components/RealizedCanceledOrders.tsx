"use client";

import { useMemo } from "react";

import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import { monthNames } from "@/common/constants/months";
import { Skeleton } from "@/components/ui/skeleton";
import useGenericFetch from "@/hooks/queries/useGenericFetch";

const RealizedCanceledOrders = () => {
  const {
    data: realizedData,
    isPending: isRealizedLoading,
    isError: isRealizedError
  } = useGenericFetch<
    {
      month: number;
      value: number;
    }[]
  >("/orders-per-month");

  const {
    data: canceledData,
    isPending: isCanceledLoading,
    isError: isCanceledError
  } = useGenericFetch<
    {
      month: number;
      value: number;
    }[]
  >("/canceled-orders-per-month");

  const isPending = isRealizedLoading || isCanceledLoading;
  const isError = isRealizedError || isCanceledError;

  const chartData: {
    series: ApexAxisChartSeries;
    options: ApexOptions;
  } = useMemo(() => {
    const realizedSeries: number[] = Array(12).fill(0);
    const canceledSeries: number[] = Array(12).fill(0);

    if (realizedData) {
      realizedData.forEach((item) => {
        realizedSeries[item.month - 1] = item.value;
      });
    }

    if (canceledData) {
      canceledData.forEach((item) => {
        canceledSeries[item.month - 1] = item.value;
      });
    }

    const options: ApexOptions = {
      chart: {
        type: "bar",
        height: 250
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "80%"
        }
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
      legend: {
        position: "top",
        horizontalAlign: "left",
        fontFamily: "Nunito Sans",
        fontSize: "12px",
        fontWeight: 700,
        markers: {
          shape: "square"
        }
      },
      fill: {
        opacity: 1
      },
      colors: ["#109E8E", "#F78899"],
      tooltip: {
        y: {
          formatter: (val: number) => `${val} pedidos`
        }
      }
    };

    return {
      series: [
        {
          name: "Realizados",
          data: realizedSeries
        },
        {
          name: "Cancelados",
          data: canceledSeries
        }
      ],
      options
    };
  }, [realizedData, canceledData]);

  return (
    <div className="rounded-[15px] bg-white shadow-lg p-4 space-y-8 h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-base-black text-[19px] font-bold">
          Pedidos: Realizados x Cancelados
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
          type="bar"
          height={250}
        />
      )}
    </div>
  );
};

export default RealizedCanceledOrders;
