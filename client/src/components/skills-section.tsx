import { Code, Brain, TrendingUp, Cloud, Users } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming",
      skills: ["Python, SQL, T-SQL", "Libraries & Frameworks: NumPy, Pandas, SciPy, Seaborn, Matplotlib, Scikit-Learn", "Data Processing & Visualization"]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      skills: ["Machine Learning: Data cleaning & Transformation, Feature Engineering, Model Validation", "Data Visualization Tools (Excel, Tableau, Power BI)", "Statistical Analysis"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Business Intelligence", 
      skills: ["Power BI Dashboard Development", "DAX & Power Query", "Self-service Analytics Capabilities", "Performance Optimization"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud & Databases",
      skills: ["Azure SQL, Power Query, Excel", "Database: AWS RDS, MySQL, PostgreSQL, Azure SQL Server", "Data Analysis: Critical Thinking, Problem Solving, Team Collaboration, Documentation"]
    }
  ];

  const proficiencyLevels = [
    { skill: "Python & Data Analysis", level: 95 },
    { skill: "SQL & Database Management", level: 90 },
    { skill: "Power BI & Visualization", level: 88 },
    { skill: "Machine Learning", level: 85 },
    { skill: "Azure Cloud Services", level: 80 },
    { skill: "Statistical Analysis", level: 92 }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-custom mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-medium-custom max-w-3xl mx-auto">
            Comprehensive skill set spanning data analysis, machine learning, business intelligence, and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-light-bg-custom rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-primary-custom mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2 text-medium-custom">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-custom rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skill Proficiency Bars */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {proficiencyLevels.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-primary-custom font-medium">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-primary-custom h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-bold text-center mb-8">Professional Soft Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-custom/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-custom" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Communication & Collaboration</h4>
              <ul className="text-sm text-medium-custom space-y-2">
                <li>• Stakeholder engagement and reporting</li>
                <li>• Cross-functional team collaboration</li>
                <li>• Data storytelling for non-technical audiences</li>
                <li>• Client relationship management</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Problem-Solving & Analysis</h4>
              <ul className="text-sm text-medium-custom space-y-2">
                <li>• Critical thinking and analytical reasoning</li>
                <li>• Complex problem decomposition</li>
                <li>• Business acumen and strategic thinking</li>
                <li>• Attention to detail and accuracy</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-custom/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-custom" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Leadership & Adaptability</h4>
              <ul className="text-sm text-medium-custom space-y-2">
                <li>• Project management and ownership</li>
                <li>• Continuous learning mindset</li>
                <li>• Time management and prioritization</li>
                <li>• Adaptability to new technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}