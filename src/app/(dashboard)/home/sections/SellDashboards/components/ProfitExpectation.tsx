import { useMemo } from "react";

import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import { Skeleton } from "@/components/ui/skeleton";
import useGenericFetch from "@/hooks/queries/useGenericFetch";

const ProfitExpectation = () => {
  const {
    data: profitExpectationData,
    isLoading: isProfitExpectationLoading,
    isError: isProfitExpectationError
  } = useGenericFetch<
    {
      month: number;
      value: number;
    }[]
  >("/profit-expectation-per-month");

  const {
    data: profitData,
    isLoading: isProfitLoading,
    isError: isProfitError
  } = useGenericFetch<
    {
      month: number;
      value: number;
    }[]
  >("/profit-per-month");

  const isLoading = isProfitExpectationLoading || isProfitLoading;
  const isError = isProfitExpectationError || isProfitError;

  const chartData: {
    series: ApexAxisChartSeries;
    options: ApexOptions;
  } = useMemo(() => {
    const profitExpectationSeries: number[] = Array(12).fill(0);
    const profitSeries: number[] = Array(12).fill(0);
    const previousYearProfitSeries: number[] = Array(12).fill(0);
    const previousYearExpectationSeries: number[] = Array(12).fill(0);
    for (let i = 0; i < 12; i++) {
      previousYearProfitSeries[i] = Math.floor(Math.random() * 1000) * 5;
      previousYearExpectationSeries[i] = Math.floor(Math.random() * 1000) * 5;
    }

    if (profitExpectationData) {
      profitExpectationData.forEach((item) => {
        profitExpectationSeries[item.month - 1] = item.value;
      });
    }

    if (profitData) {
      profitData.forEach((item) => {
        profitSeries[item.month - 1] = item.value;
      });
    }

    const options: ApexOptions = {
      chart: {
        type: "line",
        height: 250
      },
      plotOptions: {
        bar: {
          columnWidth: "80%" // Largura das colunas
        }
      },
      stroke: {
        width: [0, 0, 2, 2] // Largura para cada série (0 para barras, 2 para linhas)
      },
      colors: ["#4CAF50", "#FFC107", "#393C56", "#FF4081"], // Cores para cada série
      xaxis: {
        categories: [
          "JAN",
          "FEV",
          "MAR",
          "ABR",
          "MAI",
          "JUN",
          "JUL",
          "AGO",
          "SET",
          "OUT",
          "NOV",
          "DEZ"
        ],
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
      dataLabels: {
        enabled: false
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        fontFamily: "Nunito Sans",
        fontSize: "12px",
        fontWeight: 700
      },
      tooltip: {
        shared: true, // Mostra todas as séries no tooltip
        intersect: false,
        y: {
          formatter: (val: number) => `R$ ${val.toLocaleString()}`
        }
      }
    };

    return {
      series: [
        {
          name: "Real",
          type: "column",
          data: profitSeries
        },
        {
          name: "Expectativa",
          type: "column",
          data: profitExpectationSeries
        },
        {
          name: "Real do Ano Anterior",
          type: "line",
          data: previousYearProfitSeries
        },
        {
          name: "Expectativa do Ano Anterior",
          type: "line",
          data: previousYearExpectationSeries
        }
      ],
      options
    };
  }, [profitData, profitExpectationData]);

  return (
    <div className="rounded-[15px] bg-white shadow-lg p-4 space-y-8 h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-base-black text-[19px] font-bold">
          Expectativa de lucro x Lucro real{" "}
        </h2>
        <div className="bg-[#F3F5F6] w-[80px] rounded-[15px]"></div>
      </div>

      {isLoading ? (
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

export default ProfitExpectation;
