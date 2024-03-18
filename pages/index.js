import Concierge from "@/components/Concierge";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout/Layout";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <Featured></Featured>
      <Concierge></Concierge>
      <Testimonials></Testimonials>
    </Layout>
  );
}
