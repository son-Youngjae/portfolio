import { memo } from "react";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { Career } from "../types";
import { formatText } from "../utils/formatText";

interface CareerSectionProps {
  careers: Career[];
}

const CareerSection = memo(function CareerSection({ careers }: CareerSectionProps) {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="text-blue-600" size={28} />
        <h2 className="text-3xl font-bold text-gray-900">Career & Projects</h2>
      </div>
      <div className="space-y-8">
        {careers.map((career, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition">
            {/* 회사 정보 헤더 */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{career.company}</h3>
                  <p className="text-blue-600 font-medium">{career.position}</p>
                </div>
                <span className="text-sm text-gray-500 font-medium">{career.period}</span>
              </div>
              <ul className="text-gray-600 list-disc list-outside pl-5 space-y-1">
                {career.description.map((desc, idx) => (
                  <li key={idx}>{formatText(desc)}</li>
                ))}
              </ul>
            </div>
            
            {/* 프로젝트 목록 */}
            {career.projects && career.projects.length > 0 && (
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">주요 프로젝트</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {career.projects.map((project) => (
                    <div key={project.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Calendar size={14} />
                        <span>{project.date}</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {project.type}
                        </span>
                      </div>
                      
                      <h5 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h5>
                      <ul className="text-gray-700 text-sm mb-3 list-disc list-outside pl-5 space-y-1">
                        {project.description.map((desc, idx) => (
                          <li key={idx}>{formatText(desc)}</li>
                        ))}
                      </ul>
                      
                      {/* 문제 해결 섹션 */}
                      {project.Problems && (
                        <div className="mt-4 p-3 bg-linear-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-lg mb-3">
                          <div className="flex items-start gap-2 mb-2">
                            <CheckCircle className="text-green-600 mt-0.5 shrink-0" size={18} />
                            <h6 className="text-sm font-bold text-green-800">문제 해결</h6>
                          </div>
                          <p className="text-sm text-gray-700 ml-7">{formatText(project.Problems)}</p>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1 flex-wrap">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-white text-gray-600 rounded text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {/* <a href={project.link} className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1">
                          View <ExternalLink size={14} />
                        </a> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
});

export default CareerSection;
