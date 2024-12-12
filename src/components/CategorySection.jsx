import React from 'react';
import ManCategory from '../assets/images/man.jpeg';
import WomanCategory from '../assets/images/woman.jpeg';
import KidsCategory from '../assets/images/kids.jpeg';


const categories = [
    {
        title: 'Women',
        imageUrl: WomanCategory,
    },
    {
        title: 'Kids',
        imageUrl: KidsCategory
    },
    {
        title: 'Men',
        imageUrl: ManCategory,
    }, 
];

function CategorySection() {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {categories.map((category, index) => (
            <div key={index} className='relativ h-64 transform transition-transform duration-500 hover:scale-105 cursor-pointer'>
                <img src={category.imageUrl} alt="" className='w-full h-full object-cover rounded-lg shadow-md'/>
                <div className='absolute top-14 left-10'>
                    <p className='text-xl font-bold'>{category.title}</p>
                    <p className='text-gray-600'>View All</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CategorySection;
