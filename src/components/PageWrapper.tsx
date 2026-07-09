import { motion } from "framer-motion"

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
}

interface PageWrapperProps {
  children: React.ReactNode
  noPadding?: boolean
}

export function PageWrapper({ children, noPadding = false }: PageWrapperProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`w-full min-h-[calc(100vh-80px)] ${noPadding ? "" : "pt-24 pb-16"}`}
    >
      {children}
    </motion.div>
  )
}
