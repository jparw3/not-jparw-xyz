import { ArrowSmLeftIcon } from '@heroicons/react/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CardSection from '../components/CardSection'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="flex-col flex mx-auto px-5 transition-all sm:px-12 max-w-[800px] cursor-default text-gray-500">
      <Link href="https://jparw.xyz" passHref>
        <div className="flex items-center space-x-1 text-sm">
          <ArrowSmLeftIcon className="w-5 h-5" />
          <div>Back to work</div>
        </div>
      </Link>
      <motion.div initial={{ opacity: 0, y: 75 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: 'spring' }}>
        <Header />
        <CardSection />
      </motion.div>
      <div className="pt-4 mt-12 text-xs text-center text-stone-400 font-regular">Time Spent on this: 6 hours</div>
      <div className="pt-2 pb-4 mb-12 text-xs text-center text-stone-400 font-regular">Built with Next and Tailwind. Built with 💜 by Jack Willars. 2022.</div>
    </div>
  )
}
