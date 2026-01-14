import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { PawPrint, ArrowRight, ArrowLeft, Check, RotateCcw, Home, Clock, Wallet, Award, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface Question {
  id: number;
  question: string;
  icon: React.ElementType;
  options: {
    label: string;
    value: string;
    emoji: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What type of living space do you have?",
    icon: Home,
    options: [
      { label: "Small apartment", value: "apartment", emoji: "🏢" },
      { label: "House with small yard", value: "small-house", emoji: "🏠" },
      { label: "House with large yard", value: "large-house", emoji: "🏡" },
      { label: "Farm or rural area", value: "farm", emoji: "🌾" },
    ],
  },
  {
    id: 2,
    question: "How much time can you dedicate to pet care daily?",
    icon: Clock,
    options: [
      { label: "Less than 1 hour", value: "minimal", emoji: "⏰" },
      { label: "1-2 hours", value: "moderate", emoji: "🕐" },
      { label: "2-4 hours", value: "substantial", emoji: "🕑" },
      { label: "More than 4 hours", value: "extensive", emoji: "🕓" },
    ],
  },
  {
    id: 3,
    question: "What's your monthly budget for pet expenses?",
    icon: Wallet,
    options: [
      { label: "Under $50", value: "low", emoji: "💵" },
      { label: "$50 - $100", value: "moderate", emoji: "💰" },
      { label: "$100 - $200", value: "comfortable", emoji: "💳" },
      { label: "Over $200", value: "flexible", emoji: "💎" },
    ],
  },
  {
    id: 4,
    question: "What's your experience with pets?",
    icon: Award,
    options: [
      { label: "First-time pet owner", value: "beginner", emoji: "🌱" },
      { label: "Had pets as a child", value: "some", emoji: "📚" },
      { label: "Currently own or recently owned pets", value: "experienced", emoji: "🎓" },
      { label: "Expert/Professional experience", value: "expert", emoji: "🏆" },
    ],
  },
  {
    id: 5,
    question: "Who will be the primary caretaker?",
    icon: Users,
    options: [
      { label: "Just me (living alone)", value: "single", emoji: "👤" },
      { label: "Couple without kids", value: "couple", emoji: "👫" },
      { label: "Family with young children", value: "young-family", emoji: "👨‍👩‍👧" },
      { label: "Family with older children", value: "older-family", emoji: "👨‍👩‍👧‍👦" },
    ],
  },
  {
    id: 6,
    question: "What's most important to you in a pet?",
    icon: Heart,
    options: [
      { label: "Low maintenance & independent", value: "independent", emoji: "🧘" },
      { label: "Playful & active companion", value: "active", emoji: "⚡" },
      { label: "Affectionate & cuddly", value: "affectionate", emoji: "🤗" },
      { label: "Unique & interesting to observe", value: "unique", emoji: "✨" },
    ],
  },
];

interface PetResult {
  name: string;
  emoji: string;
  match: number;
  description: string;
  reasons: string[];
}

const calculateResults = (answers: Record<number, string>): PetResult[] => {
  // Simplified matching logic
  const results: PetResult[] = [
    {
      name: "Dog",
      emoji: "🐕",
      match: 0,
      description: "Loyal, loving, and always excited to see you!",
      reasons: [],
    },
    {
      name: "Cat",
      emoji: "🐈",
      match: 0,
      description: "Independent, graceful, and wonderfully affectionate.",
      reasons: [],
    },
    {
      name: "Fish",
      emoji: "🐠",
      match: 0,
      description: "Serene, beautiful, and perfect for relaxation.",
      reasons: [],
    },
    {
      name: "Bird",
      emoji: "🐦",
      match: 0,
      description: "Colorful, vocal, and full of personality.",
      reasons: [],
    },
    {
      name: "Small Pet",
      emoji: "🐹",
      match: 0,
      description: "Cute, compact, and endlessly entertaining.",
      reasons: [],
    },
  ];

  // Calculate matches based on answers
  Object.entries(answers).forEach(([questionId, answer]) => {
    const qId = parseInt(questionId);
    
    if (qId === 1) { // Living space
      if (answer === "apartment") {
        results[1].match += 30; results[1].reasons.push("Perfect for apartments");
        results[2].match += 25; results[2].reasons.push("Great for small spaces");
        results[4].match += 20;
      } else if (answer === "large-house" || answer === "farm") {
        results[0].match += 30; results[0].reasons.push("Plenty of room to run");
      }
    }
    
    if (qId === 2) { // Time
      if (answer === "minimal") {
        results[2].match += 35; results[2].reasons.push("Low time commitment");
        results[1].match += 20; results[1].reasons.push("Independent nature");
      } else if (answer === "extensive") {
        results[0].match += 35; results[0].reasons.push("Loves quality time");
        results[3].match += 25;
      }
    }
    
    if (qId === 3) { // Budget
      if (answer === "low") {
        results[2].match += 25; results[2].reasons.push("Budget-friendly");
        results[4].match += 20;
      } else if (answer === "flexible") {
        results[0].match += 20;
        results[3].match += 25;
      }
    }
    
    if (qId === 4) { // Experience
      if (answer === "beginner") {
        results[2].match += 30; results[2].reasons.push("Great for beginners");
        results[1].match += 20; results[1].reasons.push("Easy to care for");
      } else if (answer === "expert") {
        results[3].match += 30;
        results[0].match += 20;
      }
    }
    
    if (qId === 5) { // Family
      if (answer === "young-family") {
        results[0].match += 25; results[0].reasons.push("Great with kids");
        results[2].match += 20;
      } else if (answer === "single") {
        results[1].match += 25; results[1].reasons.push("Perfect solo companion");
      }
    }
    
    if (qId === 6) { // Preference
      if (answer === "independent") {
        results[1].match += 30; results[1].reasons.push("Matches your lifestyle");
        results[2].match += 25;
      } else if (answer === "active") {
        results[0].match += 35; results[0].reasons.push("Always ready for adventure");
      } else if (answer === "affectionate") {
        results[0].match += 25;
        results[1].match += 20;
      } else if (answer === "unique") {
        results[3].match += 30; results[3].reasons.push("Fascinating to watch");
        results[2].match += 25;
      }
    }
  });

  // Normalize and sort
  const maxMatch = Math.max(...results.map(r => r.match));
  results.forEach(r => {
    r.match = Math.min(99, Math.round((r.match / maxMatch) * 100));
  });

  return results.sort((a, b) => b.match - a.match);
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<PetResult[]>([]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => {
        setResults(calculateResults(newAnswers));
        setShowResults(true);
      }, 300);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setResults([]);
  };

  return (
    <Layout>
      <section className="min-h-screen py-12 lg:py-20 bg-gradient-to-b from-primary-light to-background">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-2xl mx-auto"
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                    Pet Match Quiz
                  </h1>
                  <p className="text-muted-foreground">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Question Card */}
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-card rounded-3xl shadow-large p-8 border border-border"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <question.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-xl font-heading font-bold text-foreground">
                      {question.question}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {question.options.map((option, index) => (
                      <motion.button
                        key={option.value}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleAnswer(option.value)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 group ${
                          answers[question.id] === option.value
                            ? "border-primary bg-primary-light"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {option.emoji}
                        </span>
                        <span className="font-medium text-foreground">
                          {option.label}
                        </span>
                        {answers[question.id] === option.value && (
                          <Check className="h-5 w-5 text-primary ml-auto" />
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between mt-8">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      disabled={currentQuestion === 0}
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back
                    </Button>
                    {answers[question.id] && currentQuestion < questions.length - 1 && (
                      <Button
                        variant="soft"
                        onClick={() => setCurrentQuestion(currentQuestion + 1)}
                      >
                        Next
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
              >
                {/* Results Header */}
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6"
                  >
                    <PawPrint className="h-10 w-10 text-primary-foreground" />
                  </motion.div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    Your Perfect Pet Matches!
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    Based on your answers, here are your top recommendations
                  </p>
                </div>

                {/* Results List */}
                <div className="space-y-4 mb-10">
                  {results.slice(0, 3).map((result, index) => (
                    <motion.div
                      key={result.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className={`p-6 rounded-2xl border ${
                        index === 0
                          ? "bg-primary-light border-primary shadow-medium"
                          : "bg-card border-border"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-5xl">{result.emoji}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-heading font-bold text-foreground">
                              {result.name}
                            </h3>
                            {index === 0 && (
                              <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                                Best Match
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-3">
                            {result.description}
                          </p>
                          {result.reasons.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {result.reasons.slice(0, 3).map((reason, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                                >
                                  {reason}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="text-3xl font-bold text-primary">
                            {result.match}%
                          </span>
                          <p className="text-xs text-muted-foreground">match</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleRestart} variant="outline" size="lg">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Retake Quiz
                  </Button>
                  <Button asChild variant="hero" size="lg">
                    <Link to="/care-tips">
                      Learn Pet Care Tips
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Quiz;
