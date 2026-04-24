import frameworkData from "./framework.json";
import { motion } from "framer-motion";
import { useState } from "react"; // ✅ FIX 1

export default function FrameworkListSearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  /*Inisialisasi DataForm*/
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    /*Tambah state lain beserta default value*/
  });

  /*Inisialisasi Handle perubahan nilai input form*/
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = searchTerm.toLowerCase();
  const _selectedTag = selectedTag.toLowerCase();

  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag
      ? framework.tags.includes(_selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🚀 Popular Frameworks
      </h1>

      {/* ✅ FIX 2: pindahin search & filter keluar grid */}
      <div className="max-w-3xl mx-auto mb-8 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search framework..."
          className="flex-1 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          name = "searchTerm"
          onChange={handleChange}
        />

        <select
          className="p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="SelectedTag"
          onChange={handleChange}
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* CARD GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFrameworks.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {item.name}
            </h2>

            <p className="text-gray-600 text-sm mb-4">{item.description}</p>

            <p className="text-sm text-gray-500 mb-2">
              Developed by:{" "}
              <span className="font-semibold text-gray-700">
                {item.details.developer}
              </span>
            </p>

            <a
              href={item.details.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4 text-sm text-blue-600 font-medium hover:underline"
            >
              🌐 Official Website
            </a>

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

      {/* BONUS: kalau data kosong */}
      {filteredFrameworks.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          😢 Framework tidak ditemukan
        </p>
      )}
    </div>
  );
}
