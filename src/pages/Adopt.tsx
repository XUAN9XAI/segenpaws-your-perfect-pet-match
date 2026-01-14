import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, AlertTriangle, Heart, PawPrint, ExternalLink, FileCheck, Home, Users, Wallet } from "lucide-react";

const adoptionChecklist = [
  { icon: Home, text: "Ensure your living space is pet-friendly and safe" },
  { icon: Users, text: "Confirm all family members are on board" },
  { icon: Wallet, text: "Budget for initial costs: supplies, vet visits, food" },
  { icon: Heart, text: "Research the pet's specific needs and temperament" },
  { icon: FileCheck, text: "Have ID, references, and adoption fee ready" },
];

const redFlags = [
  "Seller refuses to let you visit the facility",
  "No health records or vaccination history provided",
  "Puppies/kittens are under 8 weeks old",
  "Seller is pushy or refuses to answer questions",
  "Extremely low prices that seem too good to be true",
  "No contract or return policy offered",
];

const partnerShelters = [
  { name: "ASPCA", description: "American Society for Prevention of Cruelty to Animals", url: "https://www.aspca.org" },
  { name: "Best Friends", description: "Leading national animal welfare organization", url: "https://bestfriends.org" },
  { name: "Petfinder", description: "Search adoptable pets from shelters nationwide", url: "https://www.petfinder.com" },
  { name: "Humane Society", description: "Fighting for all animals across the nation", url: "https://www.humanesociety.org" },
];

const Adopt = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-accent-light to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
              Adopt, Don't Shop
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Give a Pet a <span className="text-accent">Second Chance</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Thousands of loving pets are waiting for their forever homes. Learn how to adopt responsibly and make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/quiz">
                  <PawPrint className="h-5 w-5" />
                  Find Your Match First
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://www.petfinder.com" target="_blank" rel="noopener noreferrer">
                  Browse Adoptable Pets
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Adoption Checklist */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
                Before You Adopt
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Adoption <span className="text-primary">Readiness Checklist</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Make sure you're fully prepared to welcome a new family member. These steps will set you up for success.
              </p>

              <div className="space-y-4">
                {adoptionChecklist.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground pt-2">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Red Flags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-destructive/5 rounded-3xl p-8 border border-destructive/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">
                  Red Flags to Watch For
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Protect yourself and animals by avoiding unethical breeders and sellers:
              </p>
              <ul className="space-y-3">
                {redFlags.map((flag, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-destructive" />
                    </span>
                    <span className="text-foreground text-sm">{flag}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Shelters */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-light text-accent text-sm font-medium mb-4">
              Trusted Resources
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Partner Shelters & Organizations
            </h2>
            <p className="text-muted-foreground text-lg">
              Connect with reputable shelters and rescue organizations to find your new companion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerShelters.map((shelter, index) => (
              <motion.a
                key={index}
                href={shelter.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all"
              >
                <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {shelter.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {shelter.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Visit Site
                  <ExternalLink className="h-3 w-3" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Adopt;
