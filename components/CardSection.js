import { Tooltip } from "@chakra-ui/tooltip";
import { motion } from "framer-motion";
const CardSection = () => {
    const shadow = "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,.5)"
    return (
        <div className="masonry">
            <motion.div className="break-inside rounded-[20px] px-4 pt-2 pb-2 bg-violet-600 flex-none align-middle mt-0 drop-shadow-2xl items-start h-auto relative">
                <div className="h-[100%] w-[100%] bg-gradient-to-t from-violet-800 to-transparent absolute bottom-0 left-0 z-0 rounded-[20px]" />
                <div className="relative mx-4 my-4 align-middle">
                    <div className="relative flex justify-center pb-8 text-center -z-10">
                        <img className="h-[100px]" src="./assets/images/thinking.png" />
                    </div>
                    <p className="relative mb-4 -mt-12 text-white text-md z-1">
                        This tool randomly generates{" "}
                        <span className="px-2 py-0.5 bg-violet-900 rounded">
                            research title
                        </span>{" "}
                        ideas for your reference or inspiration.
                    </p>
                    <motion.div
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        className="w-fit"
                    >
                        <a
                            target="blank"
                            href="https://github.com/Jparw/research-titles-generator"
                            className="relative z-1"
                        >
                            <div className="px-2 py-2 text-sm font-medium text-white rounded-md bg-violet-900">
                                View on GitHub ↗︎
                            </div>
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div className="rounded-[20px] px-4 py-4 bg-black flex-none align-middle mt-4 sm:mb-10 drop-shadow-2xl items-start h-auto relative">
                <div className="h-[100%] w-[100%] bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 z-0 rounded-[20px]" />
                <div className="relative mx-4 my-4 align-middle">
                    <div className="h-[100%] w-[100%] bg-gradient-to-t from-transparent to-transparent absolute bottom-0 left-0 z-0 rounded-[20px]" />
                    <div className="relative flex justify-center pb-10 text-center -z-10">
                        <img
                            className="w-[230px]"
                            src="./assets/images/stack.png"
                        />
                    </div>
                    <p className="relative mb-4 -mt-12 text-white text-md z-1">
                        I journal my development stories sometimes. They sometimes act as how-tos, and sometimes, I just like what I code.
                    </p>
                    <motion.div whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                        <a
                            target="blank"
                            href="https://owe-jparw.vercel.app"
                            className="relative z-1"
                        >
                            <div className="px-2 py-4 bg-zinc-900 rounded-[12px] text-white font-medium text-sm w-[100%] mx-auto text-center">
                                Read all entries
                            </div>
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div className="rounded-[20px] px-4 py-4 bg-emerald-500 flex-none align-middle mt-4 drop-shadow-2xl items-start h-auto relative">
                <div className="h-[100%] w-[100%] bg-gradient-to-t from-emerald-800 to-transparent absolute bottom-0 left-0 z-0 rounded-[20px]" />
                <div className="relative mx-4 my-4 align-middle">
                    <div className="h-[100%] w-[100%] bg-gradient-to-t from-transparent to-transparent absolute bottom-0 left-0 z-0 rounded-[20px]" />
                    <div className="relative flex justify-center text-center -z-10">
                        <img
                            className="w-[150px] h-[150px]"
                            src="./assets/images/oweme.png"
                        />
                    </div>
                    <p className="relative mb-4 -mt-12 text-white text-md z-1">
                        Built a payment link website to let people pay me via a single link!
                    </p>
                    <motion.div whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                        <a
                            target="blank"
                            href="https://owe-jparw.vercel.app"
                            className="relative z-1"
                        >
                            <div className="px-2 py-4 bg-emerald-900 rounded-[12px] text-white font-medium text-sm w-[100%] mx-auto text-center">
                                owe-jparw.vercel.app ↗︎
                            </div>
                        </a>
                    </motion.div>
                </div>
            </motion.div>


            


            <motion.div className="rounded-[20px] px-4 h-[300px] py-4 bg-white flex-none align-middle mt-4 drop-shadow-2xl items-start relative">
                <div className="relative mx-4 my-4 align-middle">
                    <p className="relative mt-4 mb-4 text-stone-800 text-md z-1">I love watching K-Dramas 📺🍿 </p>
                    <div className="flex items-center justify-center h-full mb-20 z-2">
                        <a href="https://mydramalist.com/79997-boy-referee" target="blank">
                            <Tooltip className="p-2 px-3 text-base text-white bg-gray-800 rounded-md shadow-2xl" label="Juvenile Justice" aria-label='A tooltip' placement='left'>

                                <motion.div whileTap={{scale: .95, boxShadow: "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,.5)"}} whileHover={{ scale: 1.05, boxShadow: "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,.5)" }} initial={{ rotate: -12 }} className="absolute left-0 overflow-hidden text-center rounded-lg hover:z-20 top-12 -z-0 -rotate-12">
                                    <img className="w-[120px]" src="./assets/images/juvenile-justice.jpeg" />
                                </motion.div>
                            </Tooltip>

                        </a>
                        <a href="https://mydramalist.com/34221-human-lessons" target="blank">
                            <Tooltip className="p-2 px-3 mb-2 text-base text-white bg-gray-800 rounded-md shadow-2xl" label="Extra Curricular" aria-label='A tooltip' placement='top'>

                                <motion.div whileTap={{scale: .95, boxShadow: "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,.5)"}} whileHover={{ scale: 1.05, boxShadow: "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,.5)"}} initial={{ rotate: 3 }} className="absolute z-10 overflow-hidden text-center rounded-lg hover:z-20 top-12 left-20 ">
                                    <img className="w-[120px]" src="./assets/images/extracurricular.jpeg" />
                                </motion.div>
                            </Tooltip>
                        </a>
                        <a href="https://mydramalist.com/24351-im-not-a-robot" target="blank" className="block sm:hidden">
                            <Tooltip className="p-2 px-3 text-base text-white bg-gray-800 rounded-md shadow-2xl" label="The Last Empress" aria-label='A tooltip' placement='top'>
                                <motion.div whileTap={{scale: .95, boxShadow: "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,.5)"}} whileHover={{ scale: 1.05, boxShadow: "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,.5)" }} initial={{ rotate: -5 }} className="relative z-10 overflow-hidden text-center rounded-lg shadow-lg">
                                    <img className="w-[130px]" src="./assets/images/thelastempress.jpeg" />
                                </motion.div>
                            </Tooltip>
                        </a>
                        <a href="https://mydramalist.com/31193-an-empress-s-dignity" target="blank" className="block sm:hidden">
                            <Tooltip className="p-2 px-3 text-base text-white bg-gray-800 rounded-md shadow-2xl" label="Im not a robot" aria-label='A tooltip' placement='top'>
                                <motion.div whileTap={{scale: .95, boxShadow: "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,.5)"}} whileHover={{ scale: 1.05, boxShadow: "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,.5)" }} initial={{ rotate: 6 }} className="absolute overflow-hidden text-center rounded-lg shadow-lg right-[4.5rem] hover:z-10 top-12 z-[8]">
                                    <img className="w-[120px]" src="./assets/images/imnotarobot.jpeg" />
                                </motion.div>
                            </Tooltip>
                        </a>
                        <a href="https://mydramalist.com/23429-parasite" target="blank" className="block sm:hidden md:block">
                            <Tooltip className="p-2 px-3 text-base text-white bg-gray-800 rounded-md shadow-2xl" label="Parasite" aria-label='A tooltip' placement='right'>
                                <motion.div whileTap={{scale: .95, boxShadow: "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,.5)"}} whileHover={{ scale: 1.05, boxShadow: "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,.5)" }} initial={{ rotate: 12 }} className="absolute right-0 z-0 overflow-hidden text-center rounded-lg shadow-lg hover:z-20 top-12">
                                    <img className="w-[120px]" src="./assets/images/parasite.jpeg" />
                                </motion.div>
                            </Tooltip>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CardSection;
