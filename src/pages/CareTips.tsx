import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Utensils, Scissors, GraduationCap, Heart, Brain, Search, PawPrint } from "lucide-react";
import { Input } from "@/components/ui/input";
import { KnowYourPetModal } from "@/components/care-tips/KnowYourPetModal";

const categories = [
  { id: "all", name: "All Tips", icon: Heart },
  { id: "feeding", name: "Feeding & Nutrition", icon: Utensils },
  { id: "grooming", name: "Grooming & Hygiene", icon: Scissors },
  { id: "training", name: "Training & Behavior", icon: GraduationCap },
  { id: "health", name: "Health & Vaccination", icon: Heart },
  { id: "mental", name: "Mental Stimulation", icon: Brain },
];

const tips = [
  {
    id: 1,
    title: "Essential Nutrients Every Dog Needs",
    category: "feeding",
    petType: "Dogs",
    emoji: "🐕",
    excerpt: "Learn about proteins, fats, carbohydrates, vitamins, and minerals that keep your dog healthy and energetic.",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How to Brush Your Cat's Fur Properly",
    category: "grooming",
    petType: "Cats",
    emoji: "🐈",
    excerpt: "Master the art of cat grooming to prevent matting, reduce shedding, and strengthen your bond.",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Basic Commands for First-Time Dog Owners",
    category: "training",
    petType: "Dogs",
    emoji: "🐕",
    excerpt: "Start with sit, stay, come, and down – the foundation of good dog behavior and communication.",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Vaccination Schedule for Kittens",
    category: "health",
    petType: "Cats",
    emoji: "🐈",
    excerpt: "A complete guide to kitten vaccinations from 6 weeks to adulthood for lifelong immunity.",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Interactive Toys for Mental Stimulation",
    category: "mental",
    petType: "All Pets",
    emoji: "🎾",
    excerpt: "Discover puzzle feeders, treat-dispensing toys, and games that keep your pet mentally sharp.",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Setting Up the Perfect Aquarium",
    category: "health",
    petType: "Fish",
    emoji: "🐠",
    excerpt: "Water temperature, filtration, lighting, and cycling – everything for a thriving aquarium.",
    readTime: "8 min read",
  },
  {
    id: 7,
    title: "Safe Foods for Hamsters",
    category: "feeding",
    petType: "Small Pets",
    emoji: "🐹",
    excerpt: "A comprehensive list of foods that are safe and healthy for your hamster's diet.",
    readTime: "4 min read",
  },
  {
    id: 8,
    title: "Teaching Your Bird to Talk",
    category: "training",
    petType: "Birds",
    emoji: "🐦",
    excerpt: "Patience and repetition techniques to help your feathered friend learn words and phrases.",
    readTime: "6 min read",
  },
  {
    id: 9,
    title: "Signs Your Pet Needs a Vet Visit",
    category: "health",
    petType: "All Pets",
    emoji: "🏥",
    excerpt: "Recognize warning signs that indicate your pet needs professional medical attention.",
    readTime: "5 min read",
  },
];

const CareTips = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTips = tips.filter((tip) => {
    const matchesCategory = activeCategory === "all" || tip.category === activeCategory;
    const matchesSearch = tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary-light to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-light text-accent text-sm font-medium mb-4">
              Pet Care Library
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Expert <span className="text-primary">Care Tips</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Everything you need to know to keep your pets happy, healthy, and thriving.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search care tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories & Tips */}
      <section className="py-12 lg:py-20">
        <div className="container-custom">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-medium"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Tips Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTips.map((tip, index) => (
              <motion.article
                key={tip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-medium transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{tip.emoji}</span>
                  <div>
                    <span className="text-xs font-medium text-primary bg-primary-light px-2 py-1 rounded-full">
                      {tip.petType}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {tip.excerpt}
                </p>
                <span className="text-xs text-muted-foreground">{tip.readTime}</span>
              </motion.article>
            ))}
          </div>

          {filteredTips.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                No tips found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CareTips;
