'use client'

import * as RadixProgress from '@radix-ui/react-progress';
import { ReactNode, createContext, useContext } from 'react';

const ProgressContext = createContext({} as {
  max: number
  now: number
})

interface ProgressProps { 
  children: ReactNode
  max: number
  now: number 
}

export function Progress({ children, max, now }: ProgressProps) {
  return (
    <div className="flex items-center gap-3">
      <ProgressContext.Provider value={{ max, now }}>
        {children}
      </ProgressContext.Provider>
    </div>
  )
}

export function ProgressBar() {
  const { max, now } = useContext(ProgressContext)

  return (
    <RadixProgress.Root className="h-3 flex-1 bg-marine-800 rounded-md">
      <RadixProgress.Indicator
        className="h-3 rounded-md bg-marine-300 transition-all"
        style={{
          width: `${Math.round(
            (now * 100) / max,
          )}%`,
        }}
      />
    </RadixProgress.Root>
  )
}

export function ProgressIndicator() {
  const { max, now } = useContext(ProgressContext)

  return (
    <span className="text-sm font-mono font-bold">
      {String(now).padStart(2, '0')}/{max}
    </span>
  )
}