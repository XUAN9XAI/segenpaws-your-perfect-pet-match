import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  "Reduces pet abandonment through smart matching",
  "Promotes responsible pet ownership from day one",
  "Backed by veterinary research & guidelines",
  "Easy-to-understand advice for beginners",
  "Community-driven insights and support",
  "Connects you with ethical adoption resources",
];

export function WhySegenpawsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background decorative circles */}
              <div className="absolute inset-0 rounded-full bg-primary-light" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10" />
              
              {/* Central content */}
              <div className="absolute inset-8 rounded-full bg-card shadow-large flex items-center justify-center">
                <div className="text-center p-8">
                  <PawPrint className="h-20 w-20 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Happy pets, happy humans – through thoughtful matching
                  </p>
                </div>
              </div>

              {/* Floating stats */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-0 p-4 bg-card rounded-2xl shadow-medium"
              >
                <div className="text-center">
                  <span className="text-2xl font-bold text-primary">10K+</span>
                  <p className="text-xs text-muted-foreground">Happy Matches</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-8 -left-8 p-4 bg-card rounded-2xl shadow-medium"
              >
                <div className="text-center">
                  <span className="text-2xl font-bold text-accent">98%</span>
                  <p className="text-xs text-muted-foreground">Satisfaction</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/3 -left-12 p-4 bg-card rounded-2xl shadow-medium"
              >
                <div className="text-center">
                  <span className="text-2xl font-bold text-primary">50+</span>
                  <p className="text-xs text-muted-foreground">Partner Shelters</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
              Why SEGENPAWS
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Making Pet Adoption{" "}
              <span className="text-primary">Smarter & Kinder</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We believe every pet deserves a forever home, and every family deserves the right pet. Our platform bridges this gap with technology and compassion.
            </p>

            <ul className="space-y-4 mb-10">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{reason}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/quiz">
                  <PawPrint className="h-5 w-5" />
                  Start Your Journey
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn About Our Mission</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
