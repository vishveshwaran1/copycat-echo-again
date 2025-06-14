
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Users, TestTube, Calendar, Monitor } from "lucide-react";

const ProgramStructure = () => {
  const programStructure = [
    {
      title: "General",
      subtitle: "Seminar / Webinar / Mentorship",
      duration: "Frequently",
      features: ["Both Online + Offline"],
      icon: <BookOpen className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Basic", 
      subtitle: "Certificate Program",
      duration: "1 to 3 days",
      features: ["Online 100% training"],
      icon: <Award className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Standard",
      subtitle: "Corporate Training Program",
      duration: "3 to 10 days",
      features: ["Online + Offline 100% LIVE training"],
      icon: <Users className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Advanced",
      subtitle: "Instrumentation Hands-on",
      duration: "3 to 10 days",
      features: ["Offline 100% LIVE training"],
      icon: <TestTube className="h-5 w-5 text-blue-600" />
    }
  ];

  // Arrow with circular tail component
  const ArrowWithTail = () => (
    <div className="absolute top-3 right-3 flex items-center">
      <div 
        className="w-4 h-4 rounded-full opacity-20"
        style={{ backgroundColor: '#00549F' }}
      />
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="ml-1"
        style={{ color: '#00549F' }}
      >
        <path 
          d="M7 10L12 15L17 10" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          transform="rotate(45 12 12)"
        />
      </svg>
    </div>
  );

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl font-bold text-center mb-6">Program Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {programStructure.map((program, index) => (
            <Card key={index} className="p-4 bg-white border border-gray-200 rounded-lg relative">
              <ArrowWithTail />
              <CardContent className="p-0">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    {program.icon}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`rounded-full px-3 py-1 text-xs ${
                      index === 0 ? 'bg-gray-100 text-gray-700' :
                      index === 1 ? 'bg-blue-100 text-blue-700' :
                      index === 2 ? 'bg-gray-100 text-gray-700' :
                      'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {program.title}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-sm mb-2">{program.subtitle}</h3>
                
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-600">
                  <Calendar className="h-3 w-3" />
                  <span>{program.duration}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-600">
                  <Monitor className="h-3 w-3" />
                  <span>{program.features[0]}</span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs py-2 h-8"
                >
                  More info
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramStructure;
