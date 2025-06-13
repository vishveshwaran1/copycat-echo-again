
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
    { title: "Active Incubation", subtitle: "Collaboration", value: "Join", description: "Join a vibrant community that fosters innovation and collaboration across all disciplines." },
    { title: "Faculty", subtitle: "From all Individuals", value: "2200+", description: "Expert mentors from diverse backgrounds ready to guide your journey." },
    { title: "Online", subtitle: "Self-Paced Courses", value: "Learn", description: "Access comprehensive learning materials at your own pace." }
  ];

  const sectors = [
    { name: "Climate Change", icon: Leaf },
    { name: "Technology", icon: Cpu },
    { name: "Life Science", icon: TestTube },
    { name: "Innovation", icon: Lightbulb },
    { name: "Finance", icon: DollarSign },
    { name: "Pharmacy", icon: Pill },
    { name: "Agriculture", icon: Wheat },
    { name: "Entrepreneurship", icon: Globe },
    { name: "Veterinary", icon: PawPrint },
    { name: "Medicine", icon: Stethoscope },
    { name: "Allied Health Service", icon: Heart },
    { name: "Environmental Science", icon: Leaf }
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
      <header className="border-b bg-white px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
              <TestTube className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-xl">STEM</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">Challenges</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Open Jobs</a>
          </nav>
          <div className="flex space-x-2">
            <Button variant="outline">Partner with Us</Button>
            <Button>Join</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto text-center px-4">
          <p className="text-blue-600 mb-4">Empowering Leaders Innovate through technology</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Let's <span className="text-blue-600">Innovate, Incubate and Impact</span> the<br />
            world together!
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in early start through best open professional challenges
          </p>
          <Button size="lg" className="mb-12">
            EXPLORE OUR PROGRAMS
          </Button>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-1">{stat.title}</h3>
                  <p className="text-sm text-blue-600 mb-2">{stat.subtitle}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sectors we Focus</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {sectors.map((sector, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0 text-center">
                  <sector.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm font-medium">{sector.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gray-600 mb-2">World-Class Instructors</p>
              <h2 className="text-3xl font-bold">
                Why Choose <span className="text-blue-600">Stem for Society</span> ?
              </h2>
            </div>
            <div className="space-y-4">
              {whyChooseItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                  <span>{item}</span>
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
