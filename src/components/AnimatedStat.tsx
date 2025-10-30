import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface AnimatedStatProps {
  value: string;
  label: string;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({ value, label }) => {
  const parseValue = (val: string) => {
    const hasPlus = val.includes('+');
    const hasPercent = val.includes('%');
    const hasComma = val.includes(',');

    let numericValue = parseFloat(val.replace(/[+%,]/g, '').replace(',', '.'));
    let suffix = '';

    if (hasPlus) suffix += '+';
    if (hasPercent) suffix = '%';

    const decimals = hasComma && hasPercent ? 1 : 0;

    return { numericValue, suffix, decimals };
  };

  const { numericValue, suffix, decimals } = parseValue(value);
  const { count, ref } = useCountUp({
    end: numericValue,
    duration: 2000,
    suffix,
    decimals
  });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-beewton-primary-400 mb-2">
        {count}
      </div>
      <div className="text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
};

export default AnimatedStat;
