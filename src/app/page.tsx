import { Header } from "./sections/Header";
import { WorkHistory } from "./sections/WorkHistory";
import { Education } from "./sections/Education";
import { Hobbies } from "./sections/Hobbies";

export default function Home() {
  return (
    <>
      <Header />
      <WorkHistory />
      <Education />
      <Hobbies />
    </>
  );
}
