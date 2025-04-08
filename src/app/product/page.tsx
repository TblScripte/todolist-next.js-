"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import img1 from "@/assets/1032507996_2_0_2994_1683_1920x0_80_0_0_9077724711dc0df225d5f4fc56fe01f6.jpg"
import img2 from "@/assets/images.jpg"
import img3 from "@/assets/images1.jpg"
import img4 from "@/assets/pic_l_min.jpg"
import img5 from "@/assets/images (1).jpg"
const Product = () => {
  const data = useMemo(() => [
	{
      id: 1,
      img: img1,
      name: "Купить продукты",
      status: false,
    },
    {
      id: 2,
      img:img2,
      name: "Позвонить другу",
      status: true,
    },
    {
      id: 3,
      img: img3,
      name: "Сделать домашку",
      status: false,
    },
    {
      id: 4,
      img: img4,
      name: "Прочитать книгу",
      status: true,
    },
    {
      id: 5,
      img:img5,
      name: "Выгулять собаку",
      status: false,
    }
  ], []); 

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Список дел</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <Link href={`/product/${item.id}`}>
              <Image
                src={item.img}
                alt={item.name}
                width={600} // Указываем ширину изображения
                height={400} // Указываем высоту изображения
                className="object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p
                  className={`text-sm font-medium ${item.status ? "text-green-600" : "text-red-500"}`}
                >
                  {item.status ? "Выполнено" : "Не выполнено"}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
