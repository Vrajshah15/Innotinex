import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'lg' | 'sm' | 'icon';
}

const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-accent text-primary-text hover:bg-accent-hover shadow-md hover:shadow-lg hover:-translate-y-0.5",
  secondary: "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
  outline: "border-2 border-primary bg-transparent hover:bg-primary/5 text-primary",
  ghost: "hover:bg-primary/5 text-primary-text"
};

const sizes = {
  default: "h-11 px-5 py-2",
  sm: "h-9 rounded-lg px-4 text-xs",
  lg: "h-14 rounded-xl px-8 text-base",
  icon: "h-11 w-11"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
