import { memo } from "react";
import { Code2 } from "lucide-react";
import { Skills } from "../types";

interface SkillsSectionProps {
  skills: Skills;
}

const SkillsSection = memo(function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <Code2 className="text-blue-600" size={28} />
        <h2 className="text-3xl font-bold text-gray-900">Tech Stack</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-linear-to-r from-blue-50 to-purple-50 text-gray-800 rounded-lg font-medium text-sm border border-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default SkillsSection;
