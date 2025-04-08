'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Импортируем изображения через import
import img1 from '@/assets/1032507996_2_0_2994_1683_1920x0_80_0_0_9077724711dc0df225d5f4fc56fe01f6.jpg';
import img2 from '@/assets/images.jpg';
import img3 from '@/assets/images1.jpg';
import img4 from '@/assets/pic_l_min.jpg';
import img5 from '@/assets/images (1).jpg';

// Тип для продукта
type ProductType = {
  id: number;
  img: StaticImageData; // Используем StaticImageData для изображений Next.js
  name: string;
  status: boolean;
};

const ByIdPage = () => {
  const [product, setProduct] = useState<ProductType | null>(null); // Указываем тип состояния
  const params = useParams();
  const id = params?.id;

  const data: ProductType[] = [ // Массив с продуктами
    {
      id: 1,
      img: img1, // Используем импортированные изображения
      name: 'Купить продукты',
      status: false,
    },
    {
      id: 2,
      img: img2,
      name: 'Позвонить другу',
      status: true,
    },
    {
      id: 3,
      img: img3,
      name: 'Сделать домашку',
      status: false,
    },
    {
      id: 4,
      img: img4,
      name: 'Прочитать книгу',
      status: true,
    },
    {
      id: 5,
      img: img5,
      name: 'Выгулять собаку',
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
              product.status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
            }`}
          >
            {product.status ? 'Выполнено' : 'Не выполнено'}
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
