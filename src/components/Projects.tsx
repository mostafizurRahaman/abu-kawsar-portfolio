import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  delay: number;
}

function ProjectCard({ title, description, category, delay }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className="group h-full bg-gradient-card border-border shadow-soft hover:shadow-medium transition-all overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-emerald-light/10 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-20">🎯</div>
          </div>
          <div className="absolute top-2 right-2">
            <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
            <Button size="sm" className="flex-1">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "Git & GitHub Mastery",
      description: "Learn open-source version control systems from scratch to advanced",
      category: "Course",
    },
    {
      title: "Flutter Development",
      description: "Cross-platform mobile app development with Flutter framework",
      category: "Course",
    },
    {
      title: "Software Engineering",
      description: "Software engineering techniques from start to finish",
      category: "Course",
    },
    {
      title: "Full Stack Web App",
      description: "Complete MERN stack application with authentication and payments",
      category: "Project",
    },
    {
      title: "AI Assistant",
      description: "Custom AI chatbot using OpenAI API and modern frontend",
      category: "Project",
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with admin dashboard",
      category: "Project",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects & Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work and educational content
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
