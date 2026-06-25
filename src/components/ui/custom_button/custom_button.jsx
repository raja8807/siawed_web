import React from "react";
import Link from "next/link";
import styles from "./custom_button.module.scss";

const CustomButton = ({
  href,
  children,
  disabled,
  type = "button",
  variant = "blue", // 'blue', 'orange', 'teal', 'outline-white', 'outline-blue', 'ghost'
  size = "md", // 'sm', 'md', 'lg'
  fullWidth = false,
  onClick,
  className = "",
  ...props
}) => {
  // Map variant strings to actual SCSS class names
  // e.g., variant="outline-white" -> styles['btn-outline-white']
  const variantClass = styles[`btn-${variant}`] || styles["btn-blue"];
  
  // Size classes
  const sizeClass = size === "lg" ? styles["btn-lg"] : size === "sm" ? styles["btn-sm"] : "";
  const fullClass = fullWidth ? styles["btn-full"] : "";

  const classes = `${styles.btn} ${variantClass} ${sizeClass} ${fullClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
