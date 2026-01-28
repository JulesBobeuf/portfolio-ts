import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Career } from "@/components/home/Career";
import { Certification } from "@/components/home/Certification";
import { Course } from "@/components/home/Course";

export default function Home() {
  return (
    <Container>
      <Hero />
      <hr className="my-8"></hr>
      <About />
      <hr className="my-8"></hr>
      <Career />
      <hr className="my-8"></hr>
      <Certification />
      <hr className="my-8"></hr>
      <Course />
    </Container>
  );
}
