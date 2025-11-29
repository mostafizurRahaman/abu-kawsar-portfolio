import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Users, Rocket } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Tackling complex challenges with creative solutions",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams to deliver exceptional results",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Staying updated with latest technologies and trends",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer and educator dedicated to helping others learn and grow in their tech journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full bg-gradient-card border-border shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-4">
                  With years of experience in software development and education, I've helped thousands of students master programming and build successful careers in tech.
                </p>
                <p className="text-muted-foreground">
                  My mission is to make learning accessible, engaging, and practical for everyone who wants to code.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full bg-gradient-card border-border shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">What I Do</h3>
                <p className="text-muted-foreground mb-4">
                  I create comprehensive courses, build real-world projects, and share knowledge through YouTube and various platforms.
                </p>
                <p className="text-muted-foreground">
                  From web development to mobile apps, I cover everything you need to become a skilled developer.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group h-full bg-card border-border shadow-soft hover:shadow-medium transition-all text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
