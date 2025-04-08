"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation"; // 👈 используем этот хук

const ByIdPage = () => {
  const [product, setProduct] = useState<any>(null);
  const params = useParams(); // 👈 получаем параметры маршрута
  const id = params?.id; // 👈 достаём id

  const data = [
    {
      id: 1,
      img: "https://cdnn1.img.sputnik.tj/img/07e4/0c/17/1032507996_2:0:2994:1683_1920x0_80_0_0_9077724711dc0df225d5f4fc56fe01f6.jpg",
      name: "Купить продукты",
      status: false,
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwh_ivbdUj29sf2lfQZc6NbfdlAxxwCpe9w&s",
      name: "Позвонить другу",
      status: true,
    },
    {
      id: 3,
      img: "https://memchik.ru/images/memes/5a5f9b72b1c7e346775d5865.jpg",
      name: "Сделать домашку",
      status: false,
    },
    {
      id: 4,
      img: "https://huss.com.ua/wp-content/uploads/2022/04/pic_l_min.jpg",
      name: "Прочитать книгу",
      status: true,
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsliUkMrkA8jH3HUc1kw8vIJ-xfO6WKr_lhA&s",
      name: "Выгулять собаку",
      status: false,
    },
  ];

  useEffect(() => {
    if (id) {
      const idProduct = Number(id);
      const foundProduct = data.find((item) => item.id === idProduct);
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return <div className="p-6 text-red-600 font-semibold">Продукт не найден</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl max-w-md w-full overflow-hidden">
        <Image
          src={product.img}
          alt={product.name}
          width={500}
          height={300}
          className="h-64 w-full object-cover"
        />
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold mb-3 text-gray-800">{product.name}</h1>
          <span
            className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
              product.status ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
            }`}
          >
            {product.status ? "Выполнено" : "Не выполнено"}
          </span>
        </div>
        <div className="px-6 pb-6">
          <Link
            href="/"
            className="mt-4 inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition"
          >
            ← Назад
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ByIdPage;
