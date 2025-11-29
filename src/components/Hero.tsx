import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Decorative curves */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-30">
        <svg viewBox="0 0 200 800" className="w-full h-full">
          <path
            d="M 0,100 Q 50,150 0,200 T 0,400 T 0,600 T 0,800"
            stroke="hsl(var(--emerald))"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M 30,100 Q 80,150 30,200 T 30,400 T 30,600 T 30,800"
            stroke="hsl(var(--emerald))"
            strokeWidth="2"
            fill="none"
            opacity="0.2"
          />
          <path
            d="M 60,100 Q 110,150 60,200 T 60,400 T 60,600 T 60,800"
            stroke="hsl(var(--emerald))"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Learn Confidently With{" "}
            <span className="text-primary">Your Name</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-lg"
          >
            Don't waste time on "loss"? Grab your to-do list and become the "boss"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-3 max-w-md"
          >
            <Input
              placeholder="Your email..."
              className="h-12 bg-card"
              type="email"
            />
            <Button size="lg" className="h-12 px-8">
              Submit
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <Button variant="outline" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right content - Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-primary opacity-30"
              style={{
                borderTopColor: "transparent",
                borderRightColor: "transparent",
              }}
            />

            {/* Profile image */}
            <div className="absolute inset-8 rounded-full border-4 border-primary overflow-hidden bg-gradient-to-br from-primary/20 to-emerald-light/20">
              <div className="w-full h-full flex items-center justify-center bg-card">
                <div className="text-8xl font-bold text-primary">JD</div>
              </div>
            </div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-medium border border-border w-48"
            >
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-muted-foreground">Realtime</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs">Updating live</span>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">71,310</div>
                  <div className="text-xs text-muted-foreground">Subscribers</div>
                </div>
                <div className="text-xs text-muted-foreground">See live count</div>
                <div>
                  <div className="text-lg font-semibold">3,471</div>
                  <div className="text-xs text-muted-foreground">Views last 48 hours</div>
                  {/* Mini chart visualization */}
                  <div className="flex items-end gap-0.5 h-8 mt-2">
                    {[4, 6, 3, 8, 5, 9, 4, 7, 5, 8, 6, 9].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary/70 rounded-sm"
                        style={{ height: `${height * 8}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
