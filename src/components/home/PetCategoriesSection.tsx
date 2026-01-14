import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const petCategories = [
  {
    name: "Dogs",
    emoji: "🐕",
    description: "Loyal companions for active families",
    color: "from-pet-dog/20 to-pet-dog/5",
    borderColor: "border-pet-dog/30",
    href: "/pets/dogs",
  },
  {
    name: "Cats",
    emoji: "🐈",
    description: "Independent spirits for cozy homes",
    color: "from-pet-cat/20 to-pet-cat/5",
    borderColor: "border-pet-cat/30",
    href: "/pets/cats",
  },
  {
    name: "Birds",
    emoji: "🐦",
    description: "Melodious friends for bird lovers",
    color: "from-pet-bird/20 to-pet-bird/5",
    borderColor: "border-pet-bird/30",
    href: "/pets/birds",
  },
  {
    name: "Fish",
    emoji: "🐠",
    description: "Serene aquatic companions",
    color: "from-pet-fish/20 to-pet-fish/5",
    borderColor: "border-pet-fish/30",
    href: "/pets/fish",
  },
  {
    name: "Small Pets",
    emoji: "🐹",
    description: "Hamsters, rabbits & guinea pigs",
    color: "from-pet-small/20 to-pet-small/5",
    borderColor: "border-pet-small/30",
    href: "/pets/small-pets",
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function PetCategoriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-light text-accent text-sm font-medium mb-4">
            Explore Pets
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Popular Pet Categories
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover detailed care guides and find out which pet type matches your lifestyle best.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
        >
          {petCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                to={category.href}
                className={`group block p-6 rounded-2xl bg-gradient-to-b ${category.color} border ${category.borderColor} hover:shadow-medium transition-all duration-300 h-full`}
              >
                <div className="text-center">
                  <motion.span
                    className="text-5xl block mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {category.emoji}
                  </motion.span>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
