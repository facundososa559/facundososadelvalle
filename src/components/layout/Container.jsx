import { forwardRef } from "react";

const Container = forwardRef(function Container({ children, className = "", columns = 1 }, ref) {
  const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div ref={ref} className={`grid ${colsMap[columns]} gap-[var(--spacing-sm)] ${className}`}>
      {children}
    </div>
  );
});

export default Container;