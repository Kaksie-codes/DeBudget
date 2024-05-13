'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number}) => {
  return (
    <div>
        <CountUp 
            end={amount}
            decimal=','
            decimals={2}
            prefix='$'
            // duration={4}
            className='w-full'
        />
    </div>
  )
}

export default AnimatedCounter