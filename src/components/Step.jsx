import React from "react";

const Step = ({ number, title, description, imgSrc }) => (
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      Step {number}: {title}
    </h3>
    <p className="text-gray-600 mb-4">{description}</p>
    {imgSrc && (
      <img
        src={imgSrc}
        alt={title}
        className="rounded-lg border border-gray-300 shadow-sm max-w-full"
      />
    )}
  </div>
);

export default Step;
