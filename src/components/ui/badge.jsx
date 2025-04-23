import React from "react";

const Badge = ({ 
  className = "",
  variant = "default",
  children,
  ...props 
}) => {
  const variantClasses = {
    default: "bg-gray-800 text-white",
    secondary: "bg-gray-200 text-gray-700",
    outline: "border border-gray-300 text-gray-700",
  };

  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

export { Badge }; 