"use client";

import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import Input from "@/components/atoms/Input/Input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";
import useGenericFetch from "@/hooks/queries/useGenericFetch";

const ProductsTable = () => {
  const limit = 7;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isPending, isFetching } = useGenericFetch<
    {
      createdAt: string;
      name: string;
      color: string;
      status: string;
      description: string;
      id: string;
    }[]
  >(
    search
      ? `products?search=${search}`
      : `products?page=${page}&limit=${limit}`,
    {
      retry: false
    }
  );

  const handlePageChange = (newPage: number) => {
    if (newPage > 0) {
      setPage(newPage);
    }
  };

  return (
    <div className="bg-white p-4 rounded-[20px] mr-8 space-y-8">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-pure-black text-[30px] font-bold w-fit">
          Listagem de Produtos
        </h2>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          classNameDiv="w-[200px] xl:w-[400px] "
          placeholder="Pesquisar"
          type="text"
          name="search"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow className="!border-b-0">
            <TableHead className="rounded-[9px] bg-[#4E5D66] p-4 text-[#F5F5F5] font-bold">
              PRODUTO
            </TableHead>
            <TableHead></TableHead>
            <TableHead className="bg-[#4E5D66] p-4 text-[#F5F5F5] font-bold rounded-l-[9px]">
              CORES
            </TableHead>
            <TableHead className="bg-[#4E5D66] p-4 text-[#F5F5F5] font-bold">
              ESPECIFICAÇÕES
            </TableHead>
            <TableHead className="bg-[#4E5D66] p-4 text-[#F5F5F5] font-bold rounded-r-[9px]">
              STATUS
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isPending ? (
            Array(limit)
              .fill(0)
              .map((_, index) => (
                <TableRow key={index} className="border-b-0">
                  <TableCell>
                    <Skeleton className="w-full h-[60px] border-b-0" />
                  </TableCell>
                  <TableCell />
                  <TableCell colSpan={3}>
                    <Skeleton className="w-full h-[60px] border-b-0" />
                  </TableCell>
                </TableRow>
              ))
          ) : !data || data?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center mt-16 h-[60px]">
                {" "}
                Sem resultados...
              </TableCell>
            </TableRow>
          ) : (
            data?.map((product) => (
              <TableRow key={product.id} className="border-b-0">
                <TableCell className="p-4 border-b">{product.name}</TableCell>
                <TableCell className="p-4"></TableCell>
                <TableCell className="p-4 border-b">{product.color}</TableCell>
                <TableCell className="max-w-[200px] pr-12 border-b">
                  {product.description}
                </TableCell>
                <TableCell className="p-4 border-b">{product.status}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Paginação */}
      <div className="flex  justify-end items-center gap-2 mt-4">
        <span className="text-[#333333]/40">Página {page}</span>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="px-1 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={isPending || isFetching}
          className="px-1 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductsTable;
