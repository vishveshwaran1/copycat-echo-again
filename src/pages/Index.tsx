import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Users, 
  BookOpen, 
  Award, 
  Globe, 
  Cpu, 
  Leaf, 
  Lightbulb, 
  DollarSign, 
  Pill, 
  Stethoscope, 
  Wheat, 
  Heart,
  PawPrint,
  TestTube,
  Star,
  ChevronDown
} from "lucide-react";

const Index = () => {
  const stats = [
    { 
      title: "Industry & Institution Collaboration",
      subtitle: "Collaboration", 
      description: "Building stronger academic-industry ties to shape future-ready learners.",
      stats: [
        { label: "Institution Partners", value: "40+" },
        { label: "Industry Partners", value: "70+" },
        { label: "Learning partners", value: "Trusted" }
      ]
    },
    { 
      title: "Trained Individuals",
      subtitle: "Growth", 
      description: "Much more students on our platform from the world",
      stats: [
        { label: "Trained Students", value: "22,000+" }
      ],
      hasAvatars: true
    },
    { 
      title: "Discover Our Courses",
      subtitle: "Course", 
      description: "Gain in-depth knowledge from expert mentors with our carefully curated courses.",
      stats: [
        { label: "World class Courses", value: "100+" },
        { label: "Success Rate", value: "90%" }
      ]
    }
  ];

  const sectors = [
    { name: "Climate Change" },
    { name: "Technology" },
    { name: "Life science" },
    { name: "Innovation" },
    { name: "Finance" },
    { name: "Pharmacy" },
    { name: "Agriculture" },
    { name: "Entrepreneurship" },
    { name: "Veterinary" },
    { name: "Medicine" },
    { name: "Allied health science" },
    { name: "Environmental Science" }
  ];

  const partners = [
    "Company A", "Company B", "Shewell", "Company D"
  ];

  const whyChooseItems = [
    "1 on 1 Mentorship",
    "Industrial Training", 
    "Placement Assistant"
  ];

  const testimonials = [
    {
      name: "Tanay Wilson",
      title: "Cellular Biology and Genetics Engineering with Biotechnological Applications",
      rating: 5,
      text: "I am grateful for the Experience Innovation challenges we conduct. Programs are world through and provide practical insights into healthcare technology and devices through lab activities focused on real problem-solving and development."
    },
    {
      name: "John Smith", 
      title: "Effective Winning Strategy & Performance-Driven Engineering",
      rating: 5,
      text: "Very informative as it brings me close to point strategies to develop my skills in Engineering. The program exceeded my expectations."
    }
  ];

  const programStructure = [
    {
      title: "Foundation",
      subtitle: "Bootcamp / Intensive / Mentorship",
      duration: "4 Months",
      features: ["Skill Development", "Industry-led Online", "Hands-On"]
    },
    {
      title: "Practice", 
      subtitle: "Certificate Program",
      duration: "6 Months",
      features: ["Real-time", "Group CSOL Learning", "General"]
    },
    {
      title: "Bootcamp",
      subtitle: "Corporate / Startup Impact",  
      duration: "3 Months", 
      features: ["Live Projects", "Industry / Other", "Certificate"]
    },
    {
      title: "Advanced",
      subtitle: "Executive / Selected Research",
      duration: "2 Months",
      features: ["Top Placements", "Real-time development", "Advanced"]
    }
  ];

  const faqs = [
    { question: "What", answer: "Our programs cover a wide range of STEM fields including biotechnology, engineering, medicine, and more." },
    { question: "How", answer: "You can apply through our online portal. Applications are reviewed by our expert panel." },
    { question: "When", answer: "Programs start quarterly. Check our calendar for specific dates." },
    { question: "Where", answer: "We offer both online and on-campus programs depending on the course." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full border-2 border-dashed border-blue-400 flex items-center justify-center bg-blue-50">
              <div className="text-blue-600 font-bold text-sm">STEM</div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="text-gray-500 hover:text-blue-600 flex items-center text-sm">
                Courses/Trainings <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-500 hover:text-blue-600 flex items-center text-sm">
                Services <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-500 hover:text-blue-600 flex items-center text-sm">
                Resources <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
          </nav>
          
          <div className="flex space-x-3">
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full px-6">
              Partner with us
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 rounded-full px-8">
              LOGIN
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative connection lines and dots */}
        <div className="absolute top-20 left-16">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-px h-32 bg-blue-500 ml-1.5 mt-2"></div>
        </div>
        
        <div className="absolute top-40 left-72">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-px h-20 bg-blue-500 ml-1 mt-2"></div>
        </div>
        
        <div className="absolute top-32 right-20">
          <div className="w-px h-40 bg-blue-500"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full -ml-1.5"></div>
        </div>
        
        <div className="absolute bottom-32 right-32">
          <div className="w-px h-24 bg-blue-500"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full -ml-0.5"></div>
        </div>
        
        <div className="container mx-auto text-center px-4 relative">
          <p className="text-gray-600 mb-8 text-lg">Empowering Future Innovators through STEM Learning</p>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight max-w-5xl mx-auto">
            Let's <span className="text-black">Innovate, Incubate and Impact</span> <span className="text-gray-400">the<br />world together!</span>
          </h1>
          
          <p className="text-gray-600 mb-10 text-lg max-w-xl mx-auto">
            Join hands with us to solve <span className="text-yellow-600 font-semibold">Real-world challenges</span>
          </p>
          
          <Button size="lg" className="mb-20 bg-blue-500 hover:bg-blue-600 px-8 py-4 text-lg rounded-lg">
            EXPLORE OUR PROGRAMS
          </Button>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const isMiddleCard = index === 1;
              return (
                <Card key={index} className={`p-8 rounded-2xl border-2 ${isMiddleCard ? 'bg-blue-100 border-blue-200' : 'bg-white border-gray-200'}`}>
                  <CardContent className="p-0">
                    <div className="flex items-center mb-6">
                      <Badge variant="secondary" className={`rounded-full px-4 py-1 text-sm ${isMiddleCard ? 'bg-blue-200 text-blue-800' : 'bg-gray-100 text-gray-700'}`}>
                        {stat.subtitle}
                      </Badge>
                    </div>
                    
                    <h3 className="font-bold text-xl mb-4 text-left text-black">{stat.title}</h3>
                    <p className="text-sm text-gray-600 mb-6 text-left leading-relaxed">{stat.description}</p>
                    
                    {stat.hasAvatars && (
                      <div className="flex items-center mb-6">
                        <div className="flex -space-x-2">
                          <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white"></div>
                          <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white"></div>
                          <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-white"></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-6 text-left">
                      {stat.stats.map((item, idx) => (
                        <div key={idx}>
                          <div className="text-3xl font-bold text-gray-800 mb-1">{item.value}</div>
                          <div className="text-sm text-gray-500">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-gray-500">Sectors we Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* First row - 3 items */}
            <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-6 h-6 text-blue-800">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-lg">Climate Change</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-6 h-6 text-blue-800">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-lg">Technology</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-6 h-6 text-blue-800">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-lg">Life science</span>
            </div>
            
            {/* Second row - 4 items */}
            <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-6 h-6 text-blue-800">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-lg">Innovation</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-6 h-6 text-blue-800">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-lg">Finance</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-6 h-6 text-blue-800">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-lg">Pharmacy</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-6 h-6 text-blue-800">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-lg">Agriculture</span>
            </div>
            
            {/* Third row - 3 items */}
            <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-6 h-6 text-blue-800">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-lg">Entrepreneurship</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-6 h-6 text-blue-800">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-lg">Veterinary</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-6 h-6 text-blue-800">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-lg">Medicine</span>
            </div>
            
            {/* Fourth row - 2 items centered */}
            <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-6 h-6 text-blue-800">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-lg">Allied health science</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-6 h-6 text-blue-800">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-lg">Environmental Science</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white border-4 border-blue-500 mx-4 my-8 rounded-none">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-600 mb-4 bg-gray-100 inline-block px-4 py-2 rounded-full">World-Class Instructors</p>
              <h2 className="text-4xl font-bold mb-8">
                Why Choose <br/><span className="text-blue-600">Stem for Society</span> ?
              </h2>
            </div>
            <div className="space-y-6">
              {whyChooseItems.map((item, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-4 text-lg font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Industrial & Academic Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-lg font-semibold text-gray-600">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Structure</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programStructure.map((program, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">{program.title}</h3>
                      <p className="text-sm text-gray-600">{program.subtitle}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Badge variant="secondary">{program.duration}</Badge>
                  </div>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h4 className="font-bold mb-2">{testimonial.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{testimonial.text}</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <Button variant="outline" size="sm">
                General Information <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    Q{index + 1}. {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                  <TestTube className="h-4 w-4 text-blue-900" />
                </div>
                <span className="font-bold text-xl">STEM FOR SOCIETY</span>
              </div>
              <p className="text-sm text-blue-200">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Our Services</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Affiliate Program</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">GET HELP</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
                <li><a href="#" className="hover:text-white">Order Status</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">FOLLOW US</h4>
              <p className="text-sm text-blue-200 mb-4">
                Get all of our latest news and product updates delivered to your inbox!
              </p>
              <div className="flex space-x-2">
                <Button size="sm" variant="secondary">Subscribe</Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-sm text-blue-200">
              © 2024 STEM FOR SOCIETY. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
