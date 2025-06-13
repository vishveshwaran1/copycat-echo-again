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

  // Four-corner star SVG component
  const FourCornerStar = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div className="absolute top-20 left-16 hidden lg:block">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-px h-32 bg-blue-500 ml-1.5 mt-2"></div>
        </div>
        
        <div className="absolute top-40 left-72 hidden lg:block">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-px h-20 bg-blue-500 ml-1 mt-2"></div>
        </div>
        
        <div className="absolute top-32 right-20 hidden lg:block">
          <div className="w-px h-40 bg-blue-500"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full -ml-1.5"></div>
        </div>
        
        <div className="absolute bottom-32 right-32 hidden lg:block">
          <div className="w-px h-24 bg-blue-500"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full -ml-0.5"></div>
        </div>
        
        <div className="container mx-auto text-center px-4 relative">
          <p className="text-gray-600 mb-8 text-lg">Empowering Future Innovators through STEM Learning</p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-5xl mx-auto">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-500 text-center md:text-left">Sectors we Focus</h2>
          <div className="max-w-6xl mx-auto">
            {/* Row 1 - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
                <div className="w-6 h-6 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-lg">Climate Change</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
                <div className="w-6 h-6 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-lg">Technology</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
                <div className="w-6 h-6 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-lg">Life science</span>
              </div>
            </div>
            
            {/* Row 2 - 4 items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
                <div className="w-6 h-6 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-lg">Innovation</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
                <div className="w-6 h-6 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-lg">Finance</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
                <div className="w-6 h-6 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-lg">Pharmacy</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
                <div className="w-6 h-6 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-lg">Agriculture</span>
              </div>
            </div>
            
            {/* Row 3 - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
                <div className="w-6 h-6 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-lg">Entrepreneurship</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
                <div className="w-6 h-6 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-lg">Veterinary</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
                <div className="w-6 h-6 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-lg">Medicine</span>
              </div>
            </div>
            
            {/* Row 4 - 2 items centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
                <div className="w-6 h-6 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-lg">Allied health science</span>
              </div>
              <div className="bg-blue-200 rounded-2xl p-6 flex items-center space-x-4">
                <div className="w-6 h-6 text-blue-800 flex-shrink-0">
                  <FourCornerStar />
                </div>
                <span className="text-gray-800 font-medium text-lg">Environmental Science</span>
              </div>
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
