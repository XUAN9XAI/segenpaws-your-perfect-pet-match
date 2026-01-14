import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { PetCategoriesSection } from "@/components/home/PetCategoriesSection";
import { QuizOverviewSection } from "@/components/home/QuizOverviewSection";
import { WhySegenpawsSection } from "@/components/home/WhySegenpawsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <PetCategoriesSection />
      <QuizOverviewSection />
      <WhySegenpawsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
