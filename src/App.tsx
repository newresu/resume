import { Header } from "./sections/Header";
import { WorkHistory } from "./sections/WorkHistory";
import { Education } from "./sections/Education";
import { Hobbies } from "./sections/Hobbies";
import "./css/variables.css";
import "./css/font.css";
import "./css/normalise.css";
import "./css/styles.css";
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
