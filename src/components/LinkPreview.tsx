import React, { useState } from "react";

interface LinkPreviewProps {
  href: string;
  children: React.ReactNode;
  previewText: string;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({
  href,
  children,
  previewText,
}) => {
  const [show, setShow] = useState(false);

  return (
    <span className="relative">
      <a
        href={href}
        target="_blank"
        className="text-white underline"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </a>
      {show && (
        <div className="absolute left-0 top-full mt-2 w-64 p-3 bg-gray-900 text-white text-sm rounded shadow-lg z-50">
          {previewText}
        </div>
      )}
    </span>
  );
};

export default LinkPreview;
