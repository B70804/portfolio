export default function SkillCard ({ name, type, level }) {
    return (
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex flex-col space-y-1.5 p-6 pb-3">
                <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
                <div className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold bg-gray-100 dark:bg-gray-400">
                    {type}
                </div>
                </div>
            </div>

            <div className="p-6 pt-0">
                <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span>Proficiency</span>
                    <span>{level}%</span>
                </div>

                <div className="w-full rounded-full h-2 bg-gray-300">
                    <div
                    className="bg-violet-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${level}%` }}
                    />
                </div>
                </div>
            </div>
            </div>
    );
}