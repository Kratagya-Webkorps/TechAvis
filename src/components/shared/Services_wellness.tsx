import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  description,
  isOpen,
  onToggle,
}) => (
  <div className="border-b border-black w-full max-w-md">
    <div
      className="flex justify-between items-center my-4 cursor-pointer"
      onClick={onToggle}
    >
      <h3 className="text-lg xl:text-xl font-normal">{title}</h3>
      <span className="text-lg xl:text-xl">{isOpen ? "▲" : "▼"}</span>
    </div>
    {isOpen && (
      <div className="my-8 overflow-hidden">
        <p className="text-[#7C7C7C] text-base xl:text-xl text-wrap">
          {description}
        </p>
      </div>
    )}
  </div>
);

interface AccordionItemData {
  title: string;
  description: string;
}

const Services_wellness: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items: AccordionItemData[] = [
    {
      title: "Extensive Experience",
      description: "Description for Extensive Experience.",
    },
    {
      title: "Customer-Centric Philosophy",
      description: "Description for Customer-Centric Philosophy.",
    },
    {
      title: "Worldwide Reach",
      description: "Description for Worldwide Reach.",
    },
    {
      title: "Innovation Leader",
      description: "Description for Innovation Leader.",
    },
    {
      title: "Recognized Excellence",
      description:
        "Our dedication to quality and customer service has earned us numerous accolades, solidifying our reputation as a trusted IT solutions provider.",
    },
  ];

  return (
    <div className="xl:mx-auto flex flex-col xl:flex-row xl:justify-around items-center xl:items-start gap-4 p-8 xl:p-0">
      <div className="flex flex-col text-center xl:text-start xl:w-1/2">
        <h2 className="text-[43px] font-bold mb-4">Wellness and Benefit</h2>
        <p className="text-[#7C7C7C] text-[20px] mb-8 xl:w-2/3">
          As part of our pursuit to lead impactful, fulfilling lives, we take
          benefits pretty seriously.
        </p>
      </div>
      <div className="flex flex-col items-center xl:items-start w-full max-w-md  ">
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
    </div>
  );
};

export default Services_wellness;
