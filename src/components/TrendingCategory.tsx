import React from 'react';
import Image from 'next/image';

interface TrendingCategoryItem {
  name: string;
  category: string;
  image: string;
  rating: number;
  backgroundColor: string;
}

const trendingCategories: TrendingCategoryItem[] = [
  {
    name: 'Pizza Paperoni',
    category: 'Pizza',
    image: '/pizza-paperoni.png',
    rating: 4,
    backgroundColor: '#EAEEFA'
  },
  {
    name: 'Pizza Meat',
    category: 'Pizza',
    image: '/pizza-meat.png',
    rating: 5,
    backgroundColor: '#EAEEFA'
  },
  {
    name: 'Doner Kebab',
    category: 'Kebab',
    image: '/doner-kebab.png',
    rating: 5,
    backgroundColor: '#EAEEFA'
  },
  {
    name: 'Salmon Roll',
    category: 'Salmon',
    image: '/salmon-roll.png',
    rating: 4,
    backgroundColor: '#F9EEF3'
  },
  {
    name: 'Cupcake Choco',
    category: 'Cupcake',
    image: '/cupcake-choco.png',
    rating: 4,
    backgroundColor: '#F0FEEB'
  },
  {
    name: 'Doughnut Milk',
    category: 'Doughnut',
    image: '/doughnut-milk.png',
    rating: 5,
    backgroundColor: '#F3F7D9'
  },
  {
    name: 'Doughnut Unicorn',
    category: 'Doughnut',
    image: '/doughnut-unicorn.png',
    rating: 4,
    backgroundColor: '#F3F7D9'
  },
  {
    name: 'Kathi Kebab',
    category: 'Kebab',
    image: '/kathi-kebab.png',
    rating: 4,
    backgroundColor: '#EAEEFA'
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20">
          <path d="M9.049 2.927c-.3-.921-1.596-.921-1.896 0L5.669 5.618 2.514 6.01c-.969.14-1.357 1.316-.66 1.987l2.261 2.201-.53 3.087c-.18 1.052.931 1.85 1.863 1.355L10 13.348l2.754 1.442c.932.495 2.043-.303 1.863-1.355l-.53-3.087 2.261-2.201c.697-.671.309-1.848-.66-1.987l-3.155-.393-1.484-2.691z" />
        </svg>
      ))}
    </div>
  );
};

const TrendingCategoryCard: React.FC<TrendingCategoryItem> = ({
  name,
  category,
  image,
  rating,
  backgroundColor
}) => (
  <div
    className="p-4 rounded-lg text-start relative transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
    style={{ backgroundColor }}>
    <div className="mb-2 flex justify-start">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="rounded-md"
      />
    </div>
    <div className="font-semibold">{name}</div>
    <div className="text-sm text-gray-600">{category}</div>
    <StarRating rating={rating} />
  </div>
);

const TrendingCategory: React.FC = () => {
  return (
    <div className="mx-auto p-4 mt-16">
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 pl-4 sm:pl-16">
        Browser Our Trending
      </h2>
      <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 pl-4 sm:pl-16">
        Receipt
      </h3>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8 px-4 sm:px-16">
        {trendingCategories.map(category => (
          <TrendingCategoryCard key={category.name} {...category} />
        ))}
      </div>

      {/* All Receipt Button */}
      <div className="flex justify-center">
        <button className="bg-primary text-white px-6 py-2 rounded-full text-lg">
          ALL Receipt
        </button>
      </div>
    </div>
  );
};

export default TrendingCategory;
