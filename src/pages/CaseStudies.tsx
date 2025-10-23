import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const CaseStudies = () => {
  const cases = [
    {
      title: "Enterprise Workflow Automation",
      description:
        "How we helped a Fortune 500 company reduce operational costs by 40% through intelligent process automation and AI-driven decision making.",
      image: caseStudy1,
    },
    {
      title: "AI-Powered Analytics Platform",
      description:
        "Transforming raw data into actionable insights for a leading e-commerce platform, resulting in 3x revenue growth and improved customer satisfaction.",
      image: caseStudy2,
    },
    {
      title: "Customer Service Automation",
      description:
        "Implementing an AI chatbot solution that handles 80% of customer inquiries autonomously while maintaining high satisfaction scores.",
      image: caseStudy3,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="container px-4 py-20 md:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Case Studies
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Real results from real businesses powered by our solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {cases.map((caseStudy, index) => (
              <Card
                key={index}
                className="overflow-hidden animate-slide-up hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{caseStudy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {caseStudy.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0">
                    View More →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
