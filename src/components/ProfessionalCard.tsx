
import React from "react";

interface ProfessionalCardProps {
  name: string;
  title: string;
  image: string;
  description: string;
  social?: { label: string; url: string; icon?: React.ReactNode }[];
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  name,
  title,
  image,
  description,
  social,
}) => (
  <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden flex flex-col items-center p-5 transition-transform hover:scale-105 hover:shadow-lg duration-200">
    <img
      src={image}
      alt={name}
      className="w-24 h-24 object-cover rounded-full border-4 border-gray-800 shadow mb-3"
    />
    <h4 className="text-xl text-white font-bold mb-1 text-center">{name}</h4>
    <p className="text-cyan-400 font-semibold text-sm mb-2 text-center">{title}</p>
    <p className="text-gray-300 text-xs text-center mb-3">{description}</p>
    {social && social.length > 0 && (
      <div className="flex gap-3">
        {social.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            aria-label={item.label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 text-lg"
          >
            {item.icon ? item.icon : item.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default ProfessionalCard;
