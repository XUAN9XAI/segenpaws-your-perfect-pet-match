import { motion } from "framer-motion";
import { Heart, Target, BookOpen, Shield, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Personalized Recommendations",
    description: "Our smart algorithm matches you with pets that fit your unique lifestyle, living space, and preferences.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Lifestyle-Based Matching",
    description: "We consider your schedule, activity level, budget, and experience to find your perfect companion.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BookOpen,
    title: "Beginner-Friendly Guidance",
    description: "Comprehensive care guides and tips to help first-time pet owners feel confident and prepared.",
    color: "bg-pet-bird/10 text-pet-bird",
  },
  {
    icon: Sparkles,
    title: "Long-Term Care Insights",
    description: "Understand the full journey of pet ownership with health, nutrition, and behavioral guidance.",
    color: "bg-pet-cat/10 text-pet-cat",
  },
  {
    icon: Shield,
    title: "Ethical Adoption Focus",
    description: "We partner with trusted shelters and promote responsible adoption practices.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a community of pet lovers sharing experiences, tips, and heartwarming stories.",
    color: "bg-accent/10 text-accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Everything You Need for a{" "}
            <span className="text-primary">Perfect Match</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            SEGENPAWS combines smart technology with genuine care to help you find and raise your perfect pet companion.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
