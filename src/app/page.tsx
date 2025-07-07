"use client";

import { useState } from 'react';
import Die from '@/components/die';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  const [die1, setDie1] = useState<number>(1);
  const [die2, setDie2] = useState<number>(1);
  const [rolling, setRolling] = useState<boolean>(false);

  const roll = () => {
    setRolling(true);

    // Wait for animation to finish before setting new values
    setTimeout(() => {
      const newDie1 = Math.floor(Math.random() * 6) + 1;
      const newDie2 = Math.floor(Math.random() * 6) + 1;
      setDie1(newDie1);
      setDie2(newDie2);
      setRolling(false);
    }, 500); // Corresponds to the animation duration
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 gap-16 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="flex gap-8">
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling} />
      </div>

      <p className="text-9xl font-extrabold text-foreground tracking-tighter">{die1 + die2}</p>

      <Button
        onClick={roll}
        disabled={rolling}
        variant="outline"
        size="lg"
        className="w-56 text-2xl font-bold py-8 rounded-xl"
      >
        {rolling ? '...' : 'Roll'}
      </Button>
    </main>
  );
}
