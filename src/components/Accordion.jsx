import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Accordion({ items, allowMultiple = false }) {
  const [activeIndex, setActiveIndex] = useState([]);

  const toggle = (index) => {
    if (allowMultiple) {
      setActiveIndex((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setActiveIndex((prev) =>
        prev[0] === index ? [] : [index]
      );
    }
  };

  const isOpen = (index) => activeIndex.includes(index);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
        >
          {/* Header */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-4 text-left transition duration-300 hover:bg-primary hover:text-white"
          >
            <span className="font-semibold">
              {item.title}
            </span>

            {/* Icon */}
            <FaChevronDown
              className={`transition-transform duration-300 ${
                isOpen(index) ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Content */}
          <div
            className={`px-4 overflow-hidden transition-all duration-500 ${
              isOpen(index) ? "max-h-40 py-4" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}