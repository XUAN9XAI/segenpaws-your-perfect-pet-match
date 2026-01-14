import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Target, Users, Shield, PawPrint, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every decision we make prioritizes the wellbeing of pets and the humans who love them.",
  },
  {
    icon: Target,
    title: "Smart Matching",
    description: "Using data and research to connect the right pets with the right families.",
  },
  {
    icon: Shield,
    title: "Responsible Adoption",
    description: "Promoting ethical practices and reducing pet abandonment through education.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Building a supportive network of pet lovers sharing knowledge and experiences.",
  },
];

const stats = [
  { number: "10K+", label: "Happy Matches" },
  { number: "50+", label: "Partner Shelters" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "25+", label: "Pet Categories" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary-light to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6"
            >
              <PawPrint className="h-10 w-10 text-primary-foreground" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              About <span className="text-primary">SEGENPAWS</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              We're on a mission to create happier pets and happier humans through thoughtful matching and responsible pet ownership education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent-light text-accent text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Born from a Love of{" "}
                <span className="text-primary">All Creatures</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                SEGENPAWS was founded with a simple belief: every pet deserves a loving home, and every family deserves the right pet. Too often, well-meaning adopters bring home pets that don't match their lifestyle, leading to stress for both parties—and sadly, returns to shelters.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                We created a smarter way to match pets with families. Our intelligent quiz considers living space, time availability, budget, experience, and preferences to recommend pets that will truly thrive in your care.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/quiz">
                  <Sparkles className="h-5 w-5" />
                  Take the Pet Match Quiz
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-medium transition-shadow"
                >
                  <span className="text-4xl font-bold text-primary block mb-2">
                    {stat.number}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg">
              These principles guide everything we do at SEGENPAWS.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 text-center hover:border-primary/30 hover:shadow-medium transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Vision: <span className="text-primary">Happy Pets, Happy Humans</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We envision a world where pet adoption is always a success story. Where every shelter pet finds a perfect home, and every family experiences the joy of the right companion. Through technology, education, and compassion, we're making this vision a reality—one match at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/quiz">
                  Start Your Journey
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
