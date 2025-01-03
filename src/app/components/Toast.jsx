import { motion, AnimatePresence } from 'framer-motion'

export default function Toast({ message, type = 'success', onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
          type === 'success' ? 'bg-emerald-600' : 'bg-red-600'
        }`}
      >
        <p className="text-white">{message}</p>
        <button onClick={onClose} className="absolute top-2 right-2 text-white">
          ×
        </button>
      </motion.div>
    </AnimatePresence>
  )
}