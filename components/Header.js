
const Header = () => {
    return (
        <div className="w-full rounded-[20px] px-4 py-4 bg-black flex mt-12 drop-shadow-2xl h-auto relative">
            <img className="w-20 h-20" src="./assets/images/me.png" />
            <div className="mx-4 mt-3 align-middle">
                <h1 className="text-xl font-semibold text-white">
                    Hi, I am Jack 🧑🏻‍💻
                </h1>
                <p className="text-gray-500">This is my not-work area!</p>
            </div>
        </div>
    )
}

export default Header