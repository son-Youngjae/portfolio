import { memo } from "react";
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";
import { Project, Category } from "../types";
import { formatText } from "../utils/formatText";

interface ProjectsSectionProps {
  projects: Project[];
  categories: Category[];
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const ProjectsSection = memo(function ProjectsSection({ 
  projects, 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: ProjectsSectionProps) {
  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.type === selectedCategory
  );

  return (
    <section id="projects" className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <Award className="text-blue-600" size={28} />
        <h2 className="text-3xl font-bold text-gray-900">Projects & Contributions</h2>
      </div>

      <div className="flex gap-2 flex-wrap mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition p-6 ${
              project.featured ? "md:col-span-2 border-2 border-blue-200" : ""
            }`}
          >
            {project.featured && (
              <span className="inline-block px-3 py-1 bg-linear-to-r from-blue-500 to-purple-600 text-white text-xs font-bold rounded-full mb-3">
                FEATURED
              </span>
            )}
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {project.date}
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                {project.type}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>

            <ul className="text-gray-700 leading-relaxed mb-4 list-disc list-outside pl-5 space-y-1">
              {project.description.map((desc, idx) => (
                <li key={idx}>{formatText(desc)}</li>
              ))}
            </ul>

            {/* 문제 해결 섹션 */}
            {project.Problems && (
              <div className="mt-4 p-4 bg-linear-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-lg mb-4">
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle className="text-green-600 mt-0.5 shrink-0" size={20} />
                  <h6 className="text-sm font-bold text-green-800">문제 해결</h6>
                </div>
                <p className="text-sm text-gray-700 ml-8 leading-relaxed">{formatText(project.Problems)}</p>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1">
                View <ExternalLink size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});

export default ProjectsSection;
