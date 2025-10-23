import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="container px-4 py-20 md:px-6">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About LeafClutch
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Empowering businesses through intelligent automation
            </p>
          </div>

          {/* Mission */}
          <div className="max-w-4xl mx-auto space-y-12 animate-slide-up">
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by Siddhartha Pathak, LeafClutch.dev focuses on building
                automation and AI systems that simplify operations for modern
                businesses. We believe that every organization, regardless of
                size, should have access to powerful AI-driven tools that drive
                growth and efficiency.
              </p>
            </div>

            {/* Values */}
            <div className="grid gap-8 md:grid-cols-3 mt-16">
              <div className="space-y-4 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize AI and automation, making it accessible and
                  beneficial for businesses of all sizes.
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay at the forefront of AI technology to deliver
                  cutting-edge solutions that drive real results.
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Partnership</h3>
                <p className="text-muted-foreground">
                  We work closely with our clients, understanding their unique
                  challenges to build tailored solutions.
                </p>
              </div>
            </div>

            {/* Team Section Placeholder */}
            <div className="mt-16 p-8 bg-secondary rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">Our Team</h2>
              <p className="text-center text-muted-foreground">
                A dedicated group of AI engineers, developers, and automation
                specialists committed to transforming how businesses operate.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
