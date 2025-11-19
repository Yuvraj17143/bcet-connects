import React, { useEffect, useState } from "react";
import SkillCard from "../components/SkillCard.jsx";
import LearningPathWidget from "../components/LearningPathWidget.jsx";
import ResourceCard from "../components/ResourceCard.jsx";

// TODO: Replace with API
const dummySkills = [
  { id: 1, name: "React", level: "Intermediate", progress: 60 },
  { id: 2, name: "Python", level: "Beginner", progress: 30 },
  { id: 3, name: "Data Structures", level: "Intermediate", progress: 50 },
];

const dummyResources = [
  { id: 1, title: "React Docs", description: "Official React documentation", type: "Article", link: "https://reactjs.org/" },
  { id: 2, title: "Python Tutorial", description: "Learn Python basics", type: "Video", link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
  { id: 3, title: "DS & Algo PDF", description: "Data Structures guide", type: "PDF", link: "#" },
];

const LearningHubPage = () => {
  const [skills, setSkills] = useState(dummySkills);
  const [resources, setResources] = useState(dummyResources);

  useEffect(() => {
    // TODO: Fetch user skills and recommended resources from API
  }, []);

  return (
    <div className="space-y-6">
      {/* SKILLS */}
      <section>
        <h2 className="text-lg font-semibold text-slate-800 mb-3">Your Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      {/* LEARNING PATHS */}
      <section>
        <LearningPathWidget />
      </section>

      {/* RESOURCES */}
      <section>
        <h2 className="text-lg font-semibold text-slate-800 mb-3">Recommended Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((res) => (
            <ResourceCard key={res.id} resource={res} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LearningHubPage;
