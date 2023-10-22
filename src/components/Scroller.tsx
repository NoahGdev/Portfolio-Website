"use client";

export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

interface ButtonLinkProps {
  className: string;
  buttonText: string;
  elementId: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ className, buttonText, elementId }) => {
  return (
    <button className={className} onClick={() => scrollToElement(elementId)}>
      {buttonText}
    </button>
  );
};