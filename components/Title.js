import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

import { useTimeout } from '../hooks/useTimeout'

export const nameDelay = 2.75

export default function Title() {
  const handControls = useAnimation()

  useEffect(() => {
    handControls.start({ rotate: 20 })
  }, [handControls])

  useTimeout(() => {
    handControls.start({
      opacity: 0,
      transition: {},
    })
  }, nameDelay * 1000)

  return (
    <motion.div
      variants={{
        hidden: {
          y: '100%',
        },
        visible: {
          y: 0,
        },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, type: 'spring', stiffness: 100, mass: 0.5 }}
      className="flex flex-col justify-center"
    >
      <div className="flex items-center relative">
        <h1 className="relative font-black font-subheader text-xl md:text-3xl text-gray-500">
          hey
          <motion.span
            className="text-xl md:text-3xl absolute top-0 left-10 md:left-14"
            animate={handControls}
            transition={{
              yoyo: 5,
              from: 0,
              duration: 0.2,
              ease: 'easeInOut',
              delay: 1,
              type: 'tween',
            }}
          >
            👋
          </motion.span>
        </h1>
        <motion.h1
          className="font-black font-subheader text-xl md:text-3xl text-gray-500"
          variants={{
            hidden: { opacity: 0, x: 4 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ delay: nameDelay }}
        >
          , I'm
        </motion.h1>
      </div>
      <motion.h1
        className="font-black font-subheader text-2xl md:text-4xl text-gray-900 text-left"
        variants={{
          hidden: { opacity: 0, y: 4 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ delay: nameDelay + 0.075 }}
      >
        lucas stettner
      </motion.h1>
    </motion.div>
  )
}
