import Header from "~/components/Header";
import NavCard from "~/components/nav-card";
import { FadeIn, SlideInBottom } from "~/components/animate";

export default function Home() {
  return (
    <FadeIn>
      <Header />
      <h1 className="font-header text-center text-5xl">Sunori</h1>
      <p className="text-center text-xl">The proffesional games site.</p>
      <SlideInBottom className="flex justify-center">
        <NavCard href="/games" bgCol="red">Games</NavCard>
        <NavCard href="/movies" bgCol="yellow">Movies</NavCard>
        <NavCard href="/apps" bgCol="green">Apps</NavCard>
        <NavCard href="/books" bgCol="blue">Books</NavCard>
      </SlideInBottom>
    </FadeIn>
  );
};
