import { ArrowSmLeftIcon } from '@heroicons/react/solid'
import CardSection from '../components/CardSection'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="flex-col flex mx-auto px-5 transition-all sm:px-12 max-w-[800px] cursor-default text-gray-500">
      <div className="flex items-center space-x-1 text-sm">
        <ArrowSmLeftIcon className="w-5 h-5" />
        <div>Back to work</div>
      </div>
      <Header />
      <CardSection />
      <div class="text-center text-stone-400 text-xs font-regular pt-4 mt-12">Time Spent on this: 6 hours</div>
      <div class="text-center text-stone-400 text-xs font-regular pt-2 pb-4 mb-12">Built with Next and Tailwind. Built with 💜 by Jack Willars. 2022.</div>
    </div>
  )
}
