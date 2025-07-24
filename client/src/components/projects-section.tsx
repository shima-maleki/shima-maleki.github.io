import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart, Users, Gauge, Target, RotateCcw, CloudCog } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Manufacturing Analytics Dashboard",
      description: "Interactive Power BI dashboard integrating data from Azure SQL and Excel, enabling real-time monitoring of production KPIs and improving decision-making efficiency by 40%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Power BI",
      tags: ["Power BI", "DAX", "Azure SQL", "KPI Design"],
      impact: "40% efficiency improvement",
      icon: <BarChart className="h-4 w-4" />
    },
    {
      title: "Customer Behavior Analytics",
      description: "Comprehensive analysis of customer purchasing patterns using Python and machine learning, resulting in targeted marketing strategies and 25% increase in customer retention.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Python",
      tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      impact: "25% retention improvement",
      icon: <Users className="h-4 w-4" />
    },
    {
      title: "Database Performance Optimization",
      description: "Advanced SQL query optimization and database restructuring project that reduced query execution time by 60% and improved overall system performance for large-scale manufacturing data.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "SQL",
      tags: ["T-SQL", "Azure SQL", "Performance Tuning", "Indexing"],
      impact: "60% performance improvement",
      icon: <Gauge className="h-4 w-4" />
    },
    {
      title: "Predictive Analytics Model",
      description: "Machine learning model for demand forecasting in retail, achieving 85% accuracy in predicting future sales trends and optimizing inventory management decisions.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "ML",
      tags: ["Python", "Scikit-learn", "Time Series", "Feature Engineering"],
      impact: "85% prediction accuracy",
      icon: <Target className="h-4 w-4" />
    },
    {
      title: "Automated Data Pipeline",
      description: "End-to-end data transformation pipeline using Power Query and Python, automating data cleaning and integration processes for multiple data sources with 95% accuracy.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "ETL",
      tags: ["Power Query", "Python", "Data Cleaning", "Automation"],
      impact: "95% automation accuracy",
      icon: <RotateCcw className="h-4 w-4" />
    },
    {
      title: "Cloud-Based Analytics Solution",
      description: "Scalable analytics solution built on Azure cloud platform, enabling real-time data processing and analysis for enterprise-level manufacturing operations with 99.9% uptime.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Azure",
      tags: ["Azure SQL", "Azure ML", "Real-time Processing", "Scalability"],
      impact: "99.9% uptime achieved",
      icon: <CloudCog className="h-4 w-4" />
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Power BI": "bg-blue-100 text-blue-700",
      "Python": "bg-cyan-100 text-cyan-700",
      "SQL": "bg-green-100 text-green-700",
      "ML": "bg-purple-100 text-purple-700",
      "ETL": "bg-blue-100 text-blue-700",
      "Azure": "bg-cyan-100 text-cyan-700"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="projects" className="py-20 bg-light-bg-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-custom mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-medium-custom max-w-3xl mx-auto">
            Showcase of data analysis, machine learning, and business intelligence projects demonstrating real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-medium-custom hover:text-primary-custom">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-medium-custom hover:text-primary-custom">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-medium-custom mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center text-sm text-medium-custom">
                  {project.icon}
                  <span className="ml-2">{project.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary-custom hover:bg-primary-dark text-white px-8 py-3">
            View All Projects <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}