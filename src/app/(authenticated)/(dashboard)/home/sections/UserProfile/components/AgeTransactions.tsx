"use client";

import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import { TransactionPerAge } from "../types";

const TransactionsByAge = ({ data }: { data: TransactionPerAge[] }) => {
  const chartData: {
    series: ApexAxisChartSeries;
    options: ApexOptions;
  } = {
    series: [
      {
        name: "Transações",
        data: data.map((item) => item.value)
      }
    ],
    options: {
      chart: {
        type: "bar",
        height: 250
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "55%",
          borderRadiusApplication: "around"
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        labels: {
          style: {
            colors: ["#393C56"],
            fontSize: "12px",
            fontWeight: 700,
            fontFamily: "Nunito Sans"
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: ["#393C56"],
            fontSize: "12px",
            fontWeight: 700,
            fontFamily: "Nunito Sans"
          },
          formatter: (value: number) => {
            const category = data[value - 1] ? data[value - 1].category : value;

            return category.toString();
          }
        }
      },
      fill: {
        opacity: 1,
        colors: ["#393C56"]
      },
      tooltip: {
        x: {
          formatter: (val: number) => `${val} transações`
        }
      }
    }
  };

  return (
    <div className="h-full rounded-[15px] bg-white shadow-lg p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-base-black text-[19px] font-bold">
          Transações por faixa etária
        </h2>
        <div className="bg-[#F3F5F6] w-[80px] rounded-[15px]"></div>
      </div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default TransactionsByAge;
