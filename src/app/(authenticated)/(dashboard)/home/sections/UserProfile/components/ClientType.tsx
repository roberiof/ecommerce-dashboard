"use client";

import { useMemo } from "react";

import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import { TransactionPerClientType } from "../types";

const ClientType = ({ data }: { data: TransactionPerClientType[] }) => {
  const chartData: {
    series: number[];
    options: ApexOptions;
  } = useMemo(() => {
    const newClients = data.find((item) => item.category === "new")?.value || 0;
    const totalClients = data
      .filter((item) => item.category !== "new")
      .reduce((acc, cur) => cur?.value + acc, 0);

    const series = [newClients, totalClients];
    const labels = ["Novo cliente", "Cliente Retornado"];

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
      colors: ["#7BB686", "#9DD6D3"],
      legend: {
        markers: {
          shape: "circle"
        },
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
    <div className="h-full rounded-[15px] bg-white shadow-lg p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-base-black text-[19px] font-bold">
          Transações por tipo de cliente
        </h2>
        <div className="bg-[#F3F5F6] w-[80px] rounded-[15px]"></div>
      </div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        height={300}
      />
    </div>
  );
};

export default ClientType;
