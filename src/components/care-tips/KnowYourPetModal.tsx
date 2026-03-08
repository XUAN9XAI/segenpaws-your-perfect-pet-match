import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const petCategories = [
  {
    id: "dogs",
    name: "Dogs",
    emoji: "🐕",
    color: "bg-orange-100 border-orange-200",
    species: [
      { name: "Labrador Retriever", temperament: "Friendly, Active, Outgoing", lifespan: "10–14 years", size: "Large", care: "High exercise needs, regular grooming, prone to hip dysplasia." },
      { name: "German Shepherd", temperament: "Loyal, Confident, Courageous", lifespan: "9–13 years", size: "Large", care: "Needs mental stimulation, heavy shedder, excellent for training." },
      { name: "Golden Retriever", temperament: "Intelligent, Friendly, Devoted", lifespan: "10–12 years", size: "Large", care: "Loves water, needs daily exercise, prone to obesity." },
      { name: "Beagle", temperament: "Curious, Merry, Friendly", lifespan: "12–15 years", size: "Small to Medium", care: "Strong nose — needs secure yards, vocal breed, moderate exercise." },
      { name: "Poodle", temperament: "Intelligent, Active, Alert", lifespan: "12–15 years", size: "Varies (Toy, Mini, Standard)", care: "Hypoallergenic coat needs regular clipping, highly trainable." },
      { name: "Bulldog", temperament: "Calm, Courageous, Friendly", lifespan: "8–10 years", size: "Medium", care: "Low exercise needs, sensitive to heat, wrinkle cleaning required." },
    ],
  },
  {
    id: "cats",
    name: "Cats",
    emoji: "🐈",
    color: "bg-purple-100 border-purple-200",
    species: [
      { name: "Persian", temperament: "Gentle, Quiet, Sweet", lifespan: "12–17 years", size: "Medium to Large", care: "Daily brushing required, prone to eye tearing, indoor preferred." },
      { name: "Maine Coon", temperament: "Friendly, Playful, Gentle Giant", lifespan: "12–15 years", size: "Large", care: "Regular grooming, very social, loves water, prone to heart issues." },
      { name: "Siamese", temperament: "Vocal, Social, Affectionate", lifespan: "15–20 years", size: "Medium", care: "Needs companionship, very talkative, low grooming needs." },
      { name: "Bengal", temperament: "Energetic, Playful, Curious", lifespan: "12–16 years", size: "Medium to Large", care: "Needs lots of stimulation, loves climbing, short coat is easy to maintain." },
      { name: "Ragdoll", temperament: "Docile, Calm, Affectionate", lifespan: "12–17 years", size: "Large", care: "Goes limp when held, semi-long fur needs brushing, indoor only." },
    ],
  },
  {
    id: "birds",
    name: "Birds",
    emoji: "🐦",
    color: "bg-sky-100 border-sky-200",
    species: [
      { name: "Budgerigar (Budgie)", temperament: "Social, Cheerful, Playful", lifespan: "5–8 years", size: "Small", care: "Needs daily interaction, spacious cage, seed + veggie diet." },
      { name: "Cockatiel", temperament: "Affectionate, Gentle, Whistler", lifespan: "15–25 years", size: "Small to Medium", care: "Loves head scratches, needs out-of-cage time, dust-producing." },
      { name: "African Grey Parrot", temperament: "Intelligent, Sensitive, Talkative", lifespan: "40–60 years", size: "Medium", care: "Extremely smart, needs mental stimulation, can develop feather plucking." },
      { name: "Lovebird", temperament: "Energetic, Bold, Affectionate", lifespan: "10–15 years", size: "Small", care: "Best in pairs, can be nippy, needs toys and interaction." },
    ],
  },
  {
    id: "fish",
    name: "Fish",
    emoji: "🐠",
    color: "bg-cyan-100 border-cyan-200",
    species: [
      { name: "Betta Fish", temperament: "Territorial, Vibrant, Hardy", lifespan: "3–5 years", size: "Small", care: "Needs warm water (76–82°F), solo tank, weekly water changes." },
      { name: "Goldfish", temperament: "Social, Active, Hardy", lifespan: "10–15 years", size: "Small to Large", care: "Needs large tank (not bowls!), cold water, good filtration." },
      { name: "Neon Tetra", temperament: "Peaceful, Schooling, Active", lifespan: "5–8 years", size: "Very Small", care: "Keep in groups of 6+, soft acidic water, planted tanks ideal." },
      { name: "Guppy", temperament: "Peaceful, Colorful, Active", lifespan: "2–3 years", size: "Very Small", care: "Easy beginner fish, breeds quickly, prefers warm water." },
    ],
  },
  {
    id: "small-pets",
    name: "Small Pets",
    emoji: "🐹",
    color: "bg-amber-100 border-amber-200",
    species: [
      { name: "Hamster", temperament: "Curious, Nocturnal, Independent", lifespan: "2–3 years", size: "Small", care: "Needs exercise wheel, solitary species, spot-clean cage daily." },
      { name: "Rabbit", temperament: "Social, Gentle, Curious", lifespan: "8–12 years", size: "Small to Medium", care: "Needs hay-based diet, social interaction, bunny-proofed space." },
      { name: "Guinea Pig", temperament: "Social, Vocal, Gentle", lifespan: "5–7 years", size: "Small", care: "Needs vitamin C supplements, keep in pairs, daily veggie diet." },
      { name: "Ferret", temperament: "Playful, Mischievous, Social", lifespan: "6–10 years", size: "Small", care: "Needs ferret-proofed rooms, high protein diet, regular vet visits." },
    ],
  },
];

interface KnowYourPetModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function KnowYourPetModal({ open, onOpenChange }: KnowYourPetModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const activeCategory = petCategories.find((c) => c.id === selectedCategory);

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => setSelectedCategory(null), 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] p-0 overflow-hidden rounded-2xl">
        <DialogHeader className="px-6 pt-6 pb-2">
          <div className="flex items-center gap-3">
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="p-1.5 rounded-lg hover:bg-muted transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-muted-foreground" />
              </button>
            )}
            <div>
              <DialogTitle className="text-xl font-heading font-bold text-foreground">
                {selectedCategory ? `${activeCategory?.emoji} ${activeCategory?.name}` : "🐾 Know Your Pet"}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {selectedCategory
                  ? `Explore different ${activeCategory?.name?.toLowerCase()} species and their care needs.`
                  : "Choose a pet category to explore species and care info."}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="px-6 pb-6 max-h-[65vh]">
          <AnimatePresence mode="wait">
            {!selectedCategory ? (
              <motion.div
                key="categories"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
              >
                {petCategories.map((cat) => (
                  <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex flex-col items-center gap-2 p-5 rounded-2xl border ${cat.color} hover:shadow-md transition-all cursor-pointer`}
                  >
                    <span className="text-4xl">{cat.emoji}</span>
                    <span className="font-heading font-bold text-foreground text-sm">{cat.name}</span>
                    <span className="text-xs text-muted-foreground">{cat.species.length} species</span>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="species"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-3 pt-2"
              >
                {activeCategory?.species.map((species, i) => (
                  <motion.div
                    key={species.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
                  >
                    <h4 className="font-heading font-bold text-foreground mb-2">{species.name}</h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                      <div>
                        <span className="text-muted-foreground">Temperament:</span>{" "}
                        <span className="text-foreground">{species.temperament}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Lifespan:</span>{" "}
                        <span className="text-foreground">{species.lifespan}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Size:</span>{" "}
                        <span className="text-foreground">{species.size}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 border-t border-border pt-2">
                      💡 {species.care}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
