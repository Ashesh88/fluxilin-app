import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs rounded-full gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-full gap-2',
    lg: 'px-7 py-3.5 text-base font-semibold rounded-full gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#F5A623] via-[#FF6B4A] to-[#E8B86D] text-[#140F0C] font-bold shadow-lg shadow-[#F5A623]/20 hover:shadow-[#F5A623]/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300',
    secondary:
      'bg-[#2B1F16] text-[#FAF6F0] hover:bg-[#3D2C20] border border-[#E8B86D]/20 hover:border-[#E8B86D]/40 transition-all duration-300',
    outline:
      'bg-transparent text-[#FAF6F0] border border-[#E8B86D]/30 hover:bg-[#E8B86D]/10 hover:border-[#E8B86D]/60 transition-all duration-300',
    glass:
      'bg-[#1A1410]/70 backdrop-blur-md text-[#FAF6F0] border border-[#E8B86D]/20 hover:border-[#F5A623]/50 hover:bg-[#1A1410]/90 transition-all duration-300 shadow-md',
  };

  return (
    <button
      className={`inline-flex items-center justify-center cursor-pointer select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
}

export function Badge({
  children,
  variant = 'gold',
  className = '',
}: {
  children: React.ReactNode;
  variant?: 'gold' | 'coral' | 'amber' | 'neutral';
  className?: string;
}) {
  const variants = {
    gold: 'bg-[#E8B86D]/10 text-[#E8B86D] border-[#E8B86D]/30',
    coral: 'bg-[#FF6B4A]/10 text-[#FF6B4A] border-[#FF6B4A]/30',
    amber: 'bg-[#F5A623]/10 text-[#F5A623] border-[#F5A623]/30',
    neutral: 'bg-card text-[#D1C7BD] border-border',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
