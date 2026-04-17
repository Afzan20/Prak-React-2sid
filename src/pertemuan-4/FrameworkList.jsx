import frameworkData from "./framework.json";
import { motion } from "framer-motion";

export default function FrameworkList() {
    return (
        <div className="p-8 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                🚀 Popular Frameworks
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frameworkData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        
                        // animasi masuk
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}

                        // animasi hover
                        whileHover={{ scale: 1.05 }}
                        
                        className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer"
                    >
                        {/* Title */}
                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                            {item.name}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4">
                            {item.description}
                        </p>

                        {/* Developer */}
                        <p className="text-sm text-gray-500 mb-2">
                            Developed by:{" "}
                            <span className="font-semibold text-gray-700">
                                {item.details.developer}
                            </span>
                        </p>

                        {/* Link */}
                        <a
                            href={item.details.officialWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mb-4 text-sm text-blue-600 font-medium hover:underline"
                        >
                            🌐 Official Website
                        </a>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                                <motion.span
                                    key={index}
                                    whileHover={{ scale: 1.2 }}
                                    className="bg-blue-100 text-blue-600 px-3 py-1 text-xs font-medium rounded-full"
                                >
                                    #{tag}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}