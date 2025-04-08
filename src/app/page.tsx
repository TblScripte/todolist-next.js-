"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Home = () => {
  interface Itodo {
    id: number;
    img: string;
    name: string;
    status: boolean;
  }

  const [data, setData] = useState<Itodo[]>([
    {
      id: 1,
      img: "https://cdnn1.img.sputnik.tj/img/07e4/0c/17/1032507996_2:0:2994:1683_1920x0_80_0_0_9077724711dc0df225d5f4fc56fe01f6.jpg",
      name: "Купить продукты",
      status: false
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwh_ivbdUj29sf2lfQZc6NbfdlAxxwCpe9w&s",
      name: "Позвонить другу",
      status: true
    },
    {
      id: 3,
      img: "https://memchik.ru/images/memes/5a5f9b72b1c7e346775d5865.jpg",
      name: "Сделать домашку",
      status: false
    },
    {
      id: 4,
      img: "https://huss.com.ua/wp-content/uploads/2022/04/pic_l_min.jpg",
      name: "Прочитать книгу",
      status: true
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsliUkMrkA8jH3HUc1kw8vIJ-xfO6WKr_lhA&s",
      name: "Выгулять собаку",
      status: false
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Список дел</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <Link href={`/${item.id}`}>
            <img src={item.img} alt={item.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className={`text-sm font-medium ${item.status ? "text-green-600" : "text-red-500"}`}>
                {item.status ? "Выполнено" : "Не выполнено"}
              </p>
            </div></Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;
