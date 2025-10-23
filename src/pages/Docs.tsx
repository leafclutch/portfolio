import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Book, Code, Zap, Settings } from "lucide-react";

const Docs = () => {
  const [activeSection, setActiveSection] = useState("setup");

  const sections = [
    { id: "setup", name: "Getting Started", icon: Book },
    { id: "integrations", name: "Integrations", icon: Zap },
    { id: "api", name: "API Reference", icon: Code },
    { id: "config", name: "Configuration", icon: Settings },
  ];

  const content: Record<string, { title: string; body: string }> = {
    setup: {
      title: "Getting Started",
      body: "Welcome to LeafClutch.dev documentation. This guide will help you get started with our AI and automation platform. Follow these steps to integrate our solutions into your business workflow.",
    },
    integrations: {
      title: "Integrations",
      body: "LeafClutch.dev seamlessly integrates with popular tools and platforms including Slack, Microsoft Teams, Google Workspace, Salesforce, and more. Each integration is designed to enhance your existing workflows without disruption.",
    },
    api: {
      title: "API Reference",
      body: "Our REST API provides programmatic access to all core features. Authentication is handled via API keys. Full endpoint documentation, request/response examples, and error codes are available below.",
    },
    config: {
      title: "Configuration",
      body: "Customize your automation workflows, set up triggers and actions, configure notification preferences, and manage team permissions. Our flexible configuration system adapts to your specific business needs.",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="container px-4 py-20 md:px-6">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Documentation
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Everything you need to know about using LeafClutch
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto animate-slide-up">
            {/* Sidebar */}
            <aside className="md:col-span-1">
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{section.name}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Content */}
            <div className="md:col-span-3">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-4">
                  {content[activeSection].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {content[activeSection].body}
                </p>
                <div className="mt-8 p-6 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    📚 More detailed documentation coming soon. For immediate
                    assistance, contact us at support@leafclutch.dev
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Docs;
