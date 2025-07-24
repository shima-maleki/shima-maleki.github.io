import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin } from "lucide-react";
import shimaPhoto from "@assets/shima_1753028700350.jpg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-light-bg-custom to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-custom leading-tight">
                Results-driven{" "}
                <span className="text-primary-custom">Data Analyst</span>{" "}
                with AI/ML Expertise
              </h1>
              <p className="text-lg text-medium-custom leading-relaxed">
                Transforming complex datasets into actionable insights with advanced analytics, 
                machine learning, and business intelligence. Proven track record of improving 
                reporting efficiency by 40% and driving data-driven decision making.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-primary-custom hover:bg-primary-dark text-white px-8 py-3"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                className="border-primary-custom text-primary-custom hover:bg-primary-custom hover:text-white px-8 py-3"
              >
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-medium-custom">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-custom" />
                <span>Milton Keynes, UK</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-custom" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          <div className="lg:text-right relative">
            <img 
              src={shimaPhoto} 
              alt="Shima Maleki - Data Analyst" 
              className="w-96 h-96 rounded-2xl shadow-2xl mx-auto object-cover"
            />
            
            {/* Floating stats cards */}
            <div className="hidden lg:block">
              <div className="absolute -bottom-4 -left-8 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="text-2xl font-bold text-primary-custom">40%</div>
                <div className="text-sm text-medium-custom">Efficiency Improvement</div>
              </div>
              <div className="absolute top-8 -right-8 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-medium-custom">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}