'use client'

import { createContext, useContext } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: '0px 0px -200px' }

export function FadeIn(
  props: React.ComponentPropsWithoutRef<typeof motion.div>,
) {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(FadeInStaggerContext)

  return (
    <AnimatePresence>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        initial={isInStaggerGroup ? false : 'hidden'}
        animate="visible"
        exit="hidden"
        viewport={isInStaggerGroup ? undefined : viewport}
        {...props}
      />
    </AnimatePresence>
  )
}

export function FadeInStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  )
}
