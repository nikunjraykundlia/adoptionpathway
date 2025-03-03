
import React from 'react';
import { Button as ShadcnButton, type ButtonProps as ShadcnButtonProps } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface ButtonProps extends ShadcnButtonProps {
  isAnimated?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, isAnimated = true, ...props }, ref) => {
    return (
      <ShadcnButton
        ref={ref}
        className={cn(
          'font-medium rounded-full shadow-sm transition-all duration-300',
          isAnimated && 'hover:shadow-md hover:translate-y-[-2px]',
          className
        )}
        {...props}
      >
        {children}
      </ShadcnButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
