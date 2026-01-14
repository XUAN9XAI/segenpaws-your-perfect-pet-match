import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Clock, Wallet, Award, AlertCircle, PawPrint, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const quizFactors = [
  {
    icon: Home,
    title: "Living Space",
    description: "Apartment, house, or farm - we consider your space",
  },
  {
    icon: Clock,
    title: "Time Availability",
    description: "How much time can you dedicate to pet care?",
  },
  {
    icon: Wallet,
    title: "Budget",
    description: "Initial costs, food, vet visits, and more",
  },
  {
    icon: Award,
    title: "Experience Level",
    description: "First-time owner or seasoned pet parent?",
  },
  {
    icon: AlertCircle,
    title: "Allergies",
    description: "Finding hypoallergenic options for sensitive families",
  },
];

export function QuizOverviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-primary-light to-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-light text-accent text-sm font-medium mb-4">
              Pet Match Quiz
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Discover Your{" "}
              <span className="text-primary">Perfect Pet Match</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our intelligent quiz analyzes your lifestyle to recommend the ideal pet companion. Answer a few simple questions and let us guide you to your perfect match.
            </p>

            <div className="space-y-4 mb-10">
              {quizFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <factor.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">
                      {factor.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {factor.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button asChild variant="hero" size="xl">
              <Link to="/quiz">
                <PawPrint className="h-5 w-5" />
                Take the Quiz Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Quiz Card Preview */}
              <div className="bg-card rounded-3xl shadow-large p-8 border border-border">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-primary-light mx-auto flex items-center justify-center mb-4">
                    <PawPrint className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    Ready to Find Your Match?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Takes only 3 minutes
                  </p>
                </div>

                {/* Progress Bar Preview */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-primary font-medium">0%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "15%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>

                {/* Sample Question */}
                <div className="p-4 rounded-xl bg-muted/50 mb-6">
                  <p className="text-sm font-medium text-foreground mb-3">
                    What type of living space do you have?
                  </p>
                  <div className="space-y-2">
                    {["Apartment", "House with yard", "Farm/Rural"].map((option, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg border text-sm ${
                          i === 0
                            ? "border-primary bg-primary-light text-primary"
                            : "border-border bg-card text-muted-foreground"
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="soft" className="w-full" disabled>
                  Start Quiz →
                </Button>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 text-5xl"
              >
                🐶
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-6 text-5xl"
              >
                🐱
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
