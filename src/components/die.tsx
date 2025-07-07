"use client";

import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, type LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';
import type React from 'react';

interface DieProps {
  face: number;
  rolling: boolean;
}

const dieIcons: { [key: number]: React.ComponentType<LucideProps> } = {
  1: Dice1,
  2: Dice2,
  3: Dice3,
  4: Dice4,
  5: Dice5,
  6: Dice6,
};

const Die: React.FC<DieProps> = ({ face, rolling }) => {
  const Icon = dieIcons[face] || Dice1;

  return (
    <div
      className={cn(
        rolling ? 'shaking' : ''
      )}
    >
      <Icon className="w-28 h-28 text-foreground" />
    </div>
  );
};

export default Die;
