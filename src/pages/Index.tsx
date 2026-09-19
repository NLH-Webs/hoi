import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import GiftForm from "@/components/GiftForm";
import LivestreamForm from "@/components/LivestreamForm";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValueProposition />
      <GiftForm />
      <LivestreamForm />
      <SocialProof />
      <section className="nlh-lead" id="lien-he">
        <nlh-contact site="hoi" topics-vi="Câu hỏi cho Nhi|Hợp tác|Truyền thông – báo chí|Khoá học N-Education" topics-en="A question for Nhi|Partnership|Media and press|N-Education programmes" />
      </section>
      <FinalCTA />
    </div>
  );
};

export default Index;
