import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, description, isOpen, onToggle }) => (
  <div className='border-b border-black'>
    <div
      className="flex justify-between items-center py-4 cursor-pointer "
      onClick={onToggle}
    >
      <h3 className="text-xl font-normal">{title}</h3>
      <span className="text-xl">{isOpen ? '▲' : '▼'}</span>
    </div>
    {isOpen && (
      <div className="">
        <p className='my-8 text-[#7C7C7C] text-xl '>{description}</p>
      </div>
    )}
  </div>
);

interface AccordionItemData {
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items: AccordionItemData[] = [
    { title: 'Extensive Experience', description: 'Description for Extensive Experience.' },
    { title: 'Customer-Centric Philosophy', description: 'Description for Customer-Centric Philosophy.' },
    { title: 'Worldwide Reach', description: 'Description for Worldwide Reach.' },
    { title: 'Innovation Leader', description: 'Description for Innovation Leader.' },
    { title: 'Recognized Excellence', description: 'Our dedication to quality and customer service has earned us numerous accolades, solidifying our reputation as a trusted IT solutions provider.' },
  ];

  return (
    <div className="max-w-xl md:mx-auto ">
      <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
      <p className="text-[#7C7C7C] text-[16px] mb-8">
        Techavis is a leading provider of IT solutions, distinguished by its commitment to innovation and customer satisfaction. Here’s why Techavis should be your preferred partner for IT services:
      </p>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          description={item.description}
          isOpen={openIndex === index}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default WhyChooseUs;
