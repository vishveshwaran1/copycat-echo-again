
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
  ChevronDown,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Calendar,
  Monitor,
  Clock
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

  const faqs = [
    { question: "What", answer: "Our programs cover a wide range of STEM fields including biotechnology, engineering, medicine, and more." },
    { question: "How", answer: "You can apply through our online portal. Applications are reviewed by our expert panel." },
    { question: "When", answer: "Programs start quarterly. Check our calendar for specific dates." },
    { question: "Where", answer: "We offer both online and on-campus programs depending on the course." }
  ];

  // Four-corner star SVG component (Gemini AI logo style)
  const FourCornerStar = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white px-4 py-3">
        <div className="container mx-auto flex items-center justify-between max-w-7xl">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.4619 41.3662L25.6298 39.0822C26.3827 39.6531 27.4987 40.1592 28.7964 40.1592C29.2507 40.1592 29.5232 40.0555 29.5232 39.8219C29.5232 39.4714 29.0041 39.4455 28.3293 39.3287C26.9277 39.0951 24.8901 38.7317 24.8901 36.5774C24.8901 34.6177 26.5382 33.6963 28.8354 33.6963C30.795 33.6963 31.9631 34.3192 32.4692 34.6567L31.2883 36.876C30.7042 36.5124 29.6271 36.1102 28.6018 36.1102C28.1346 36.1102 27.9139 36.214 27.9139 36.4217C27.9139 36.7072 28.2645 36.7331 28.7964 36.837C30.1461 37.0965 32.586 37.369 32.586 39.6401C32.586 41.496 31.1584 42.6641 28.5239 42.6641C26.9146 42.6641 25.4093 42.1059 24.4619 41.3662Z" fill="#0389FF"/>
                <path d="M35.4016 36.364H33.0137V33.8332H40.7875V36.364H38.3995V42.5156H35.4016V36.364Z" fill="#0389FF"/>
                <path d="M44.5121 40.0238H48.3666V42.5156H41.6309V33.8332H48.2238V36.3251H44.5121V37.0388H48.12V39.297H44.5121V40.0238Z" fill="#0389FF"/>
                <path d="M57.0746 33.8332H59.9426V42.5156H57.0746V38.8169L55.7119 40.9841H53.778L52.4024 38.8038V42.5156H49.5342V33.8332H52.4153L54.7255 37.7656L57.0746 33.8332Z" fill="#0389FF"/>
                <path d="M21.6123 47.2802H19.6474V47.7299H21.4172V49.1698H19.6474V50.8047H17.9375V45.7877H21.6123V47.2802Z" fill="white"/>
                <path d="M25.6912 48.2959C25.6912 47.7183 25.2488 47.2761 24.6789 47.2761C24.1014 47.2761 23.6739 47.7183 23.6739 48.2959C23.6739 48.8658 24.1014 49.3158 24.6789 49.3158C25.2488 49.3158 25.6912 48.8658 25.6912 48.2959ZM22.0166 48.2959C22.0166 46.7885 23.134 45.6936 24.6789 45.6936C26.2236 45.6936 27.3561 46.796 27.3561 48.2959C27.3561 49.7883 26.2236 50.8906 24.6789 50.8906C23.134 50.8906 22.0166 49.7958 22.0166 48.2959Z" fill="white"/>
                <path d="M29.6285 47.2501V48.1499H30.266C30.5135 48.1499 30.6934 47.955 30.6934 47.7C30.6934 47.4376 30.506 47.2501 30.2584 47.2501H29.6285ZM30.5209 50.8047L29.8984 49.5223H29.6285V50.8047H27.9111V45.7877H30.6259C31.6608 45.7877 32.4257 46.5602 32.4257 47.61C32.4257 48.285 32.1332 48.8475 31.6608 49.1624L32.5607 50.8047H30.5209Z" fill="white"/>
                <path d="M34.376 50.1329L35.0508 48.813C35.4858 49.143 36.1307 49.4355 36.8807 49.4355C37.1432 49.4355 37.3006 49.3754 37.3006 49.2405C37.3006 49.0379 37.0006 49.023 36.6106 48.9556C35.8008 48.8205 34.6233 48.6105 34.6233 47.3657C34.6233 46.2334 35.5759 45.7009 36.9031 45.7009C38.0355 45.7009 38.7105 46.0607 39.003 46.2558L38.3205 47.5382C37.983 47.3282 37.3607 47.0958 36.7682 47.0958C36.4982 47.0958 36.3707 47.1558 36.3707 47.2758C36.3707 47.4406 36.5733 47.4557 36.8807 47.5157C37.6606 47.6657 39.0704 47.8231 39.0704 49.1355C39.0704 50.2078 38.2455 50.8828 36.7232 50.8828C35.7932 50.8828 34.9233 50.5604 34.376 50.1329Z" fill="white"/>
              </svg>
            </div>
            <div className="hidden md:block">
              <div className="text-lg font-bold text-blue-600">STEM FOR SOCIETY</div>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 flex items-center text-sm font-medium">
                Courses/Trainings <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 flex items-center text-sm font-medium">
                Services <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 flex items-center text-sm font-medium">
                Resources <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full px-4 text-sm">
              Partner with us
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 rounded-full px-6 text-sm">
              LOGIN
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Animated Grid Background with fade */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            mask: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            WebkitMask: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
          }}
        />

        {/* Animated connection elements */}
        <div className="absolute top-16 left-12 hidden lg:block">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
          <div className="w-px h-24 bg-gradient-to-b from-blue-500 to-transparent ml-1 mt-2 animate-pulse"></div>
          <div className="w-40 h-px bg-gradient-to-r from-blue-500 to-transparent mt-2 animate-pulse delay-300"></div>
        </div>
        
        <div className="absolute top-32 right-16 hidden lg:block">
          <div className="w-px h-32 bg-gradient-to-b from-transparent to-blue-500 animate-pulse delay-500"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full -ml-1 animate-ping delay-700"></div>
          <div className="w-32 h-px bg-gradient-to-l from-blue-500 to-transparent -mt-1 animate-pulse delay-900"></div>
        </div>
        
        <div className="container mx-auto text-center px-4 relative max-w-7xl">
          <p className="text-gray-600 mb-6 text-lg">Empowering Future Innovators through STEM Learning</p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Let's <span className="text-black">Innovate, Incubate and Impact</span> <span className="text-gray-400">the<br />world together!</span>
          </h1>
          
          <p className="text-gray-600 mb-8 text-lg max-w-xl mx-auto">
            Join hands with us to solve <span className="text-yellow-600 font-semibold">Real-world challenges</span>
          </p>
          
          <Button size="lg" className="mb-16 bg-blue-500 hover:bg-blue-600 px-8 py-4 text-lg rounded-lg">
            EXPLORE OUR PROGRAMS
          </Button>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const isMiddleCard = index === 1;
              return (
                <Card key={index} className={`p-6 rounded-2xl border-2 ${isMiddleCard ? 'bg-blue-100 border-blue-200' : 'bg-white border-gray-200'}`}>
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <Badge variant="secondary" className={`rounded-full px-3 py-1 text-sm ${isMiddleCard ? 'bg-blue-200 text-blue-800' : 'bg-gray-100 text-gray-700'}`}>
                        {stat.subtitle}
                      </Badge>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-3 text-left text-black">{stat.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 text-left leading-relaxed">{stat.description}</p>
                    
                    {stat.hasAvatars && (
                      <div className="flex items-center mb-4">
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                          <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                          <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4 text-left">
                      {stat.stats.map((item, idx) => (
                        <div key={idx}>
                          <div className="text-2xl font-bold text-gray-800 mb-1">{item.value}</div>
                          <div className="text-xs text-gray-500">{item.label}</div>
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
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-500 text-center md:text-left">Sectors we Focus</h2>
          <div className="max-w-6xl mx-auto">
            {/* Row 1 - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-base">Climate Change</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-base">Technology</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-base">Life science</span>
              </div>
            </div>
            
            {/* Row 2 - 4 items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
              <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-base">Innovation</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-base">Finance</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-base">Pharmacy</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-base">Agriculture</span>
              </div>
            </div>
            
            {/* Row 3 - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-base">Entrepreneurship</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-base">Veterinary</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-base">Medicine</span>
              </div>
            </div>
            
            {/* Row 4 - 2 items centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
              <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-base">Allied health science</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-base">Environmental Science</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section with rounded corners */}
      <section className="py-12 bg-white border-4 border-blue-500 mx-4 my-6 rounded-2xl">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-3 bg-gray-100 inline-block px-3 py-2 rounded-full text-sm">World-Class Instructors</p>
              <h2 className="text-3xl font-bold mb-6">
                Why Choose <br/><span className="text-blue-600">Stem for Society</span> ?
              </h2>
            </div>
            <div className="space-y-4">
              {whyChooseItems.map((item, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-3 text-base font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-xl font-bold mb-6">Industrial & Academic Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="text-base font-semibold text-gray-600">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl font-bold text-center mb-8">Program Structure</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {programStructure.map((program, index) => (
              <Card key={index} className="p-4 bg-white border border-gray-200 rounded-lg">
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

      {/* Testimonials */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl font-bold text-center mb-8">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-4">
                <CardContent className="p-0">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{testimonial.title}</h4>
                  <p className="text-xs text-gray-600 mb-3">{testimonial.text}</p>
                  <p className="font-medium text-sm">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              <Button variant="outline" size="sm">
                General Information <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-sm">
                    Q{index + 1}. {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer with color #00549F */}
      <footer style={{ backgroundColor: '#00549F' }} className="text-white py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4619 41.3662L25.6298 39.0822C26.3827 39.6531 27.4987 40.1592 28.7964 40.1592C29.2507 40.1592 29.5232 40.0555 29.5232 39.8219C29.5232 39.4714 29.0041 39.4455 28.3293 39.3287C26.9277 39.0951 24.8901 38.7317 24.8901 36.5774C24.8901 34.6177 26.5382 33.6963 28.8354 33.6963C30.795 33.6963 31.9631 34.3192 32.4692 34.6567L31.2883 36.876C30.7042 36.5124 29.6271 36.1102 28.6018 36.1102C28.1346 36.1102 27.9139 36.214 27.9139 36.4217C27.9139 36.7072 28.2645 36.7331 28.7964 36.837C30.1461 37.0965 32.586 37.369 32.586 39.6401C32.586 41.496 31.1584 42.6641 28.5239 42.6641C26.9146 42.6641 25.4093 42.1059 24.4619 41.3662Z" fill="white"/>
                    <path d="M35.4016 36.364H33.0137V33.8332H40.7875V36.364H38.3995V42.5156H35.4016V36.364Z" fill="white"/>
                    <path d="M44.5121 40.0238H48.3666V42.5156H41.6309V33.8332H48.2238V36.3251H44.5121V37.0388H48.12V39.297H44.5121V40.0238Z" fill="white"/>
                    <path d="M57.0746 33.8332H59.9426V42.5156H57.0746V38.8169L55.7119 40.9841H53.778L52.4024 38.8038V42.5156H49.5342V33.8332H52.4153L54.7255 37.7656L57.0746 33.8332Z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold">STEM FOR SOCIETY</div>
                </div>
              </div>
              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                Let's Innovate, Incubate and Impact the world together!
              </p>
              <div className="space-y-1 text-blue-100 text-sm">
                <p>217 Broadway, Floor 9, New York, NY 10007</p>
                <p>844-402-4344</p>
                <p>support@tomorrowhealth.com</p>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-semibold mb-3 text-blue-100 text-sm">PROGRAMS</h4>
              <ul className="space-y-2 text-white text-sm">
                <li><a href="#" className="hover:text-blue-200 transition-colors">Explore Courses</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">Psychology counselling</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">Career counselling</a></li>
              </ul>
            </div>

            {/* For Institutions */}
            <div>
              <h4 className="font-semibold mb-3 text-blue-100 text-sm">FOR INSTITUTIONS</h4>
              <ul className="space-y-2 text-white text-sm">
                <li><a href="#" className="hover:text-blue-200 transition-colors">Plans and pricings</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">Campus Ambassador Program</a></li>
              </ul>
            </div>

            {/* Community & Quick Links */}
            <div>
              <h4 className="font-semibold mb-3 text-blue-100 text-sm">COMMUNITY</h4>
              <ul className="space-y-2 text-white text-sm mb-4">
                <li><a href="#" className="hover:text-blue-200 transition-colors">Join Community</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">Scientific Communication Blog</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">Our Youtube Channel</a></li>
              </ul>
              
              <h4 className="font-semibold mb-3 text-blue-100 text-sm">QUICK LINKS</h4>
              <ul className="space-y-2 text-white text-sm">
                <li><a href="#" className="hover:text-blue-200 transition-colors">Register</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">Login</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="border-t border-blue-400 pt-6 mb-6">
            <div className="max-w-md">
              <h4 className="font-semibold mb-3 text-blue-100 text-sm">SUBSCRIBE FOR THE LATEST UPDATES</h4>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-3 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                />
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-medium text-sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Social Media and Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-blue-400 pt-6">
            <div className="flex space-x-3 mb-4 md:mb-0">
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
                <Twitter className="h-4 w-4 text-blue-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
                <Instagram className="h-4 w-4 text-blue-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
                <Linkedin className="h-4 w-4 text-blue-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
                <Youtube className="h-4 w-4 text-blue-600" />
              </a>
            </div>
            <p className="text-blue-200 text-xs">
              © 2025 STEM for society. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
