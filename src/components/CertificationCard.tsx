import React from "react";

interface CertificationCardProps {
  title: string;
  description: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CertificationCard;