import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Category {
  name: string;
  items: number;
  image: string;
  backgroundColor: string;
}

const categories: Category[] = [
  {
    name: 'Cupcake',
    items: 22,
    image: '/cupcake.png',
    backgroundColor: '#F0FEEB'
  },
  { name: 'Pizza', items: 25, image: '/pizza.png', backgroundColor: '#E6F3F5' },
  { name: 'Kebab', items: 12, image: '/kebab.png', backgroundColor: '#EAEEFA' },
  {
    name: 'Salmon',
    items: 22,
    image: '/salmon.png',
    backgroundColor: '#F9EEF3'
  },
  {
    name: 'Doughnut',
    items: 11,
    image: '/doughnut.png',
    backgroundColor: '#F3F7D9'
  }
];

interface CategoryCardProps {
  name: string;
  items: number;
  image: string;
  backgroundColor: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  items,
  image,
  backgroundColor
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-4 rounded-lg text-center relative transform transition-all duration-500 ease-in-out ${
        isHovered ? 'scale-105' : 'scale-100'
      }`}
      style={{
        backgroundColor: backgroundColor
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {isHovered && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 transition-opacity duration-500 ease-in-out rounded-lg"
          style={{
            backgroundImage: `url('/bg-hero.png')`
          }}
        />
      )}

      <div className="relative z-10 transition-transform">
        <div className="mb-2 flex justify-center">
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-600">{items} Items</div>
      </div>
    </div>
  );
};

const CategoryBrowser: React.FC = () => {
  return (
    <div className="mx-auto p-4 mt-16">
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 pl-4 sm:pl-16">
        Browse Our Category
      </h2>
      <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 pl-4 sm:pl-16">
        Receipt
      </h3>
      <div className="flex justify-between items-center mb-4 px-4 sm:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
          {categories.map((category, index) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
      <div className="flex justify-end space-x-2 px-4 sm:px-16">
        <button className="hidden bg-primary text-white px-4 py-2 rounded-full md:flex items-center">
          <ChevronLeft size={20} />
          PREV
        </button>
        <button className="hidden bg-primary text-white px-4 py-2 rounded-full md:flex items-center">
          NEXT
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CategoryBrowser;
