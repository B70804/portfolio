export default function Footer() {
    return(
        <footer className="bg-slate-100/50 dark:bg-slate-900 py-8">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="font-bold text-xl text-violet-400">
                        Portfolio
                    </div>
                    <p className="text-center md:text-right text-gray-500">@ 2026. Built with React & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}