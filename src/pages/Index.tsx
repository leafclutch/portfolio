import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.png";
import aiChip from "@/assets/ai-chip.png";
import processDiscovery from "@/assets/process-discovery.jpg";
import processDevelopment from "@/assets/process-development.jpg";
import processDeployment from "@/assets/process-deployment.jpg";
import { Cpu, Shield, BarChart3, Brain, Lock, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container px-4 py-30 md:px-6 md:py-60">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                We build intelligent AI & automation systems designed for
                business growth.
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Unlock untapped potential with stable, responsible, and powerful
                AI automations.
              </p>
              <div>
                <Link to="/contact">
                  <Button size="lg" className="text-lg px-8 py-7">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Logo */}
            <div className="flex items-center justify-center animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
                <img
                  src={logo}
                  alt="LeafClutch.dev Logo"
                  className="relative h-96 w-96 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Everything You Need Sect ion */}
        <section className="container px-4 py-20 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Everything You Need In One Place
            </h2>
            <p className="text-muted-foreground text-lg">
              Powerful AI-driven solutions to transform your business operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features List */}
            <div className="space-y-12">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-accent" />
                  Custom AI agent deployment
                </h3>
                <p className="text-muted-foreground">
                  We design, deploy, and scale custom AI agents seamlessly,
                  tailored to your unique workflows and business needs.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  Fully managed end-to-end capabilities
                </h3>
                <p className="text-muted-foreground">
                  From ideation to deployment, we handle the entire process so
                  you can focus on what matters most.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  Performance analytics dashboard
                </h3>
                <p className="text-muted-foreground">
                  Track key metrics and ROI with our comprehensive analytics
                  platform built for transparency.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Brain className="h-5 w-5 text-accent" />
                  Intelligent decision control
                </h3>
                <p className="text-muted-foreground">
                  AI-powered insights and automation that adapt to your business
                  logic and decision frameworks.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Lock className="h-5 w-5 text-accent" />
                  Secure and compliant protocols
                </h3>
                <p className="text-muted-foreground">
                  Enterprise-grade security with full compliance to industry
                  standards and data protection regulations.
                </p>
              </div>
            </div>

            {/* AI Chip Illustration */}
            <div className="flex items-center justify-center">
              <img
                src={aiChip}
                alt="AI Technology Illustration"
                className="w-full max-w-lg"
              />
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="bg-secondary/30 py-20">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Text */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  Integrate With Tools You Know and Love
                </h2>
                <p className="text-muted-foreground text-lg">
                  with 850+ Tools we can integrate with n8n.
                </p>
              </div>

              {/* Right Side - Scrolling Icons */}
              <div className="relative h-[500px] overflow-hidden">
                <div className="absolute inset-0 flex gap-8 justify-center">
                  {/* First Column - Scrolling Up */}
                  <div className="flex flex-col gap-6 animate-scroll-up">
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://www.google.com/drive/static/images/drive/logo-drive.png"
                        alt="Google Drive"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg"
                        alt="Notion"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg"
                        alt="Google Analytics"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
                        alt="Slack"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png"
                        alt="Google Sheets"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/zapier-icon.svg"
                        alt="Zapier"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://www.google.com/drive/static/images/drive/logo-drive.png"
                        alt="Google Drive"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg"
                        alt="Notion"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>

                  {/* Second Column - Scrolling Down */}
                  <div className="flex flex-col gap-6 animate-scroll-down">
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/airtable-1.svg"
                        alt="Airtable"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                        alt="Google"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg"
                        alt="Microsoft Teams"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
                        alt="Slack"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg"
                        alt="Google Analytics"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/zapier-icon.svg"
                        alt="Zapier"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/airtable-1.svg"
                        alt="Airtable"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-lg">
                      <img
                        src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                        alt="Google"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="container px-4 py-20 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Our Process
            </h2>
          </div>

          <div className="space-y-16">
            {/* Discovery */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Discovery
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  We begin by understanding your vision, pain points, and
                  business goals through in-depth discovery sessions. This
                  ensures our AI solutions align perfectly with your strategic
                  objectives and deliver measurable results.
                </p>
              </div>
              <div>
                <img
                  src={processDiscovery}
                  alt="Discovery Process"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            {/* Development */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={processDevelopment}
                  alt="Development Process"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Development
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Our expert team builds, tests, and refines your custom AI
                  automation systems using cutting-edge technologies and best
                  practices. We maintain transparent communication throughout
                  the development cycle.
                </p>
              </div>
            </div>

            {/* Deployment */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Deployment
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  We seamlessly deploy your AI systems into production with
                  continuous monitoring and optimization. Our ongoing support
                  ensures your automation performs at peak efficiency as your
                  business grows.
                </p>
              </div>
              <div>
                <img
                  src={processDeployment}
                  alt="Deployment Process"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Real Business Results Section */}
        {/* <section className="bg-secondary/30 py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
                Real Business, Real Results
              </h2>
              <p className="text-muted-foreground text-lg">
                Trusted by forward-thinking companies to automate and scale
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-accent mb-2">
                      E-commerce
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      40% increase in customer support efficiency
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Leading e-commerce platform integrated AI-powered support
                    agents, resolving 70% of inquiries instantly while
                    maintaining customer satisfaction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-accent mb-2">
                      SaaS Accounting
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      $2M+ saved in operational costs
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Enterprise accounting platform automated invoice processing,
                    saving hundreds of hours monthly while reducing errors by
                    95%.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-accent mb-2">
                      HR Agency
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      3x faster candidate screening
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    HR recruitment firm deployed AI screening agents that cut
                    time-to-hire by 60% while improving candidate quality match
                    rates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
        <section className="container px-4 py-20 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem
                  value="item-1"
                  className="border-b border-border"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    What kind of businesses do you work with?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    We work with businesses of all sizes across various
                    industries including e-commerce, SaaS, healthcare, finance,
                    and professional services. Our solutions are customized to
                    fit your specific needs and scale.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-b border-border"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    How long does implementation usually take?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Implementation timelines vary based on project complexity.
                    Simple automations can be deployed in 2-4 weeks, while
                    comprehensive AI systems typically take 8-12 weeks from
                    discovery to full deployment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-b border-border"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    Who owns the AI that you build for us?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    You retain complete ownership of all custom AI systems and
                    automations we build for your business. We provide full
                    documentation and transfer of all intellectual property upon
                    project completion.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border-b border-border"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    How does your pricing work?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    We offer flexible pricing models including project-based,
                    monthly retainer, and enterprise packages. Visit our Pricing
                    page or contact us for a custom quote based on your specific
                    requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="border-b border-border"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    Do you offer support after the initial setup?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Yes! We provide comprehensive ongoing support and
                    maintenance packages. This includes performance monitoring,
                    updates, optimization, and technical support to ensure your
                    AI systems continue to deliver value.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="border-b border-border"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    Do you offer upskilling on any of these AI features?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Absolutely! We provide training sessions and workshops to
                    help your team understand and maximize the potential of the
                    AI systems we implement. Our goal is to empower your
                    organization to leverage AI effectively.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-7"
                  className="border-b border-border"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    Do you build solutions from scratch or leverage tools?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    We take a hybrid approach, combining custom development with
                    proven tools and platforms like n8n. This ensures rapid
                    deployment while maintaining flexibility and customization
                    for your unique requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    How do I know if it is a good fit for my business?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    The best way is to schedule a free discovery call with our
                    team. We'll discuss your challenges, goals, and current
                    processes to determine if AI automation is the right
                    solution for your business stage and needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-4 mb-20 md:mx-6">
          <div className="container bg-gradient-to-r from-primary to-accent rounded-2xl px-8 py-16 md:px-12 md:py-20 text-center text-white">
            <h2 className="text-3xl font-bold md:text-4xl mb-4">
              Unlock hidden potential within your business
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Transform your operations with AI-powered automation. Let's build
              something remarkable together.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
