import { motion } from 'framer-motion'
import Image from 'next/image'

import { nameDelay } from './Title'

export default function Background() {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
      initial="hidden"
      animate="visible"
      transition={{ delay: nameDelay }}
      className="absolute top-0 left-0 w-full h-screen z-0"
    >
      <Image
        src="/static/img/bg.png"
        alt="gradient background"
        objectFit="cover"
        objectPosition="center"
        layout="fill"
      />
    </motion.div>
  )
}
