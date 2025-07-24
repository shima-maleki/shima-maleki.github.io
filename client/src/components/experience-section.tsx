import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      type: "work",
      period: "Mar 2025 - Present",
      title: "Freelance Data Analyst",
      company: "Independent Consultant",
      description: "Providing data analytics consulting services to businesses, specializing in Power BI dashboard development, data visualization, and business intelligence solutions for improved decision-making.",
      achievements: [
        "Delivering custom analytics solutions for multiple clients",
        "Expertise in end-to-end data pipeline development",
        "Focus on actionable insights and business value creation"
      ],
      tags: ["Freelance", "Consulting", "Power BI", "Data Strategy"],
      icon: <Briefcase className="h-4 w-4 text-white" />,
      color: "bg-accent"
    },
    {
      type: "work",
      period: "Sep 2024 - Feb 2025",
      title: "Data Analytics Intern",
      company: "AI Core - London",
      description: "Built an interactive Power BI dashboard by integrating data from Azure SQL, Excel, and CSV files, enabling clear insights into sales trends, customer behavior, and product performance.",
      achievements: [
        "Advanced data transformation pipelines using Power Query and DAX",
        "Hosted dynamic filtering and drill-down features for regional managers",
        "Key impact: 40% improvement in reporting efficiency"
      ],
      tags: ["Power BI", "Azure SQL", "DAX", "Power Query"],
      icon: <Briefcase className="h-4 w-4 text-white" />,
      color: "bg-primary-custom"
    },
    {
      type: "education",
      period: "2023 - 2024",
      title: "Master's in Applied Artificial Intelligence",
      company: "University",
      description: "Specialized in machine learning, data analytics, and AI applications with hands-on experience in Python, statistical modeling, and advanced analytics frameworks.",
      achievements: [
        "Advanced coursework in machine learning and statistical analysis",
        "Capstone project on predictive analytics for business intelligence"
      ],
      tags: ["Machine Learning", "Statistical Analysis", "Python", "Research"],
      icon: <GraduationCap className="h-4 w-4 text-white" />,
      color: "bg-accent"
    },
    {
      type: "project",
      period: "2024",
      title: "Manufacturing Data Analysis Project",
      company: "Personal Project",
      description: "Conducted in-depth exploratory data analysis on a multi-variable manufacturing dataset using Python, Jupyter notebooks and SQL to identify relationships between variables, visualize patterns, and predict future values using Seaborn and Matplotlib.",
      achievements: [
        "Visualized relationships between variables and feature engineering processes",
        "Performed data cleaning and transformation with 95% data accuracy",
        "Created comprehensive data visualizations and statistical analysis"
      ],
      tags: ["Python", "SQL", "Data Visualization", "Statistical Analysis"],
      icon: <Briefcase className="h-4 w-4 text-white" />,
      color: "bg-accent"
    }
  ];

  const achievements = [
    { value: "40%", label: "Reporting Efficiency Improvement" },
    { value: "5+", label: "Machine Learning Models Deployed" },
    { value: "99.9%", label: "Data Processing Accuracy" }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-custom mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-medium-custom max-w-3xl mx-auto">
            Track record of delivering impactful data solutions across manufacturing and analytics domains
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center mb-12">
              <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${exp.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                {exp.icon}
              </div>
              
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}>
                <div className="bg-light-bg-custom rounded-xl p-6 shadow-lg">
                  <div className={`font-semibold text-sm mb-2 ${exp.type === 'work' ? 'text-primary-custom' : 'text-accent'}`}>
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <div className={`font-medium mb-4 ${exp.type === 'work' ? 'text-primary-custom' : 'text-accent'}`}>
                    {exp.company}
                  </div>
                  <p className="text-medium-custom mb-4">
                    {exp.description}
                  </p>
                  <div className="space-y-2 text-sm mb-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        className={`text-xs ${exp.type === 'work' ? 'bg-primary-custom/10 text-primary-custom' : 'bg-accent/10 text-accent'}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-16 bg-gradient-to-r from-primary-custom/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold mb-2 ${index === 1 ? 'text-accent' : 'text-primary-custom'}`}>
                  {achievement.value}
                </div>
                <div className="text-medium-custom">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}