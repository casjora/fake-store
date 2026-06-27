import { Link, useParams } from "react-router-dom";

export default function CategoryFilter() {
  const { category: activeCategory } = useParams();

  const categories = [
    { name: "All", slug: "", icon: "🛍️" },
    { name: "Electronics", slug: "electronics", icon: "🧭" },
    { name: "Jewelry", slug: "jewelery", icon: "💎" },
    { name: "Men's", slug: "men", icon: "👔" },
    { name: "Women's", slug: "women", icon: "👗" },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 flex gap-2.5 py-3 overflow-x-auto scrollbar-none justify-start md:justify-center">
        {categories.map((cat) => {
          const isActive = (!activeCategory && cat.slug === "") || activeCategory === cat.slug;
          return (
            <Link
              key={cat.name}
              to={cat.slug === "" ? "/" : `/category/${cat.slug}`}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border cursor-pointer
                ${isActive 
                  ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/20" 
                  : "bg-gray-50 border-gray-200 text-gray-600 [@media(hover:hover)]:hover:bg-gray-100 active:bg-gray-200"
                }`}
            >
              <span>{cat.icon}</span> {cat.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}