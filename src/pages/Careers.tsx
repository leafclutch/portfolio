// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Briefcase, GraduationCap } from "lucide-react";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";

// const Careers = () => {
//   const internships = [
//     {
//       title: "App Developer Intern",
//       description:
//         "Join our mobile development team to build cross-platform applications using React Native and modern technologies.",
//     },
//     {
//       title: "Web Developer Intern",
//       description:
//         "Work on cutting-edge web applications using React, TypeScript, and modern frontend frameworks.",
//     },
//   ];

//   const jobs = [
//     {
//       title: "n8n Agent Developer",
//       description:
//         "Design and implement workflow automation solutions using n8n, integrating various APIs and services for enterprise clients.",
//     },
//     {
//       title: "Agentic AI Developer",
//       description:
//         "Build and deploy autonomous AI agents that can make decisions, learn from interactions, and optimize business processes.",
//     },
//     {
//       title: "Data Scientist",
//       description:
//         "Analyze complex datasets, build predictive models, and derive actionable insights to drive business intelligence.",
//     },
//   ];

//   const handleApply = () => {
//     window.location.href = "mailto:careers@leafclutch.dev";
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />

//       <main className="flex-1">
//         <section className="container px-4 py-20 md:px-6">
//           <div className="text-center space-y-4 mb-16 animate-fade-in">
//             <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//               Join Our Team
//             </h1>
//             <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
//               Be part of the future of AI and automation
//             </p>
//           </div>

//           {/* Internships */}
//           <div className="max-w-5xl mx-auto mb-16 animate-slide-up">
//             <div className="flex items-center space-x-3 mb-8">
//               <GraduationCap className="h-8 w-8 text-accent" />
//               <h2 className="text-3xl font-bold">Internships</h2>
//             </div>
//             <div className="grid gap-6 md:grid-cols-2">
//               {internships.map((position, index) => (
//                 <Card key={index} className="hover:shadow-lg transition-shadow">
//                   <CardHeader>
//                     <CardTitle>{position.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className="text-sm leading-relaxed">
//                       {position.description}
//                     </CardDescription>
//                   </CardContent>
//                   <CardFooter>
//                     <Button onClick={handleApply} className="w-full">
//                       Apply Now
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           {/* Full-time Jobs */}
//           <div className="max-w-5xl mx-auto animate-slide-up">
//             <div className="flex items-center space-x-3 mb-8">
//               <Briefcase className="h-8 w-8 text-accent" />
//               <h2 className="text-3xl font-bold">Full-Time Positions</h2>
//             </div>
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {jobs.map((position, index) => (
//                 <Card key={index} className="hover:shadow-lg transition-shadow">
//                   <CardHeader>
//                     <CardTitle>{position.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className="text-sm leading-relaxed">
//                       {position.description}
//                     </CardDescription>
//                   </CardContent>
//                   <CardFooter>
//                     <Button onClick={handleApply} className="w-full">
//                       Apply Now
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Careers;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="container mx-auto px-4 py-32 md:px-6">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-foreground">
              We Are Hiring!
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              LeafClutch is expanding its team. We're looking for talented
              individuals in the following domains and many more:
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                "AI",
                "Machine Learning",
                "Data Science",
                "Agentic AI",
                "n8n",
                "Automations",
                "Web Development",
                "App Development",
                "MERN Stack",
              ].map((domain, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent/5 text-accent rounded-full font-medium text-sm shadow-sm hover:bg-accent/10 transition-colors"
                >
                  {domain}
                </span>
              ))}
            </div>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              If you’re passionate about any of these areas and want to join our
              team, send us your resume at:
            </p>

            <a
              href="mailto:careers@leafclutch.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="mt-4 inline-flex items-center gap-2 border-accent text-accent hover:bg-accent/10 transition-colors"
              >
                <Mail className="h-5 w-5" />
                careers@leafclutch.dev
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
