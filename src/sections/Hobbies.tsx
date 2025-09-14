import { Section } from "../Section";
export function Hobbies() {
  return (
    <Section title={"Hobbies"} classNames={["hobbies", "foldable"]}>
      <ul>
        <li>
          <p>
            <strong>Gap Year</strong>
          </p>
          <p>
            During 2019-2021 I volunteered at farms, hostels, and other places
            while travelling. In my spare time I learnt Javascript. 
            As a learning exercise during this process, I {" "}
            <a href="https://misterybodon.github.io/web/">coded a blog</a>.
            Later on, this experience helped me land my first job as a Typescript Developer.
          </p>
        </li>
        <li>
          <p>
            <strong>Time in Nature</strong>
          </p>
          <p>
            Jogging or walking outdoors help disconnect and recharge.
          </p>
          <p>
            After volunteering for Buddhist
            Centres I made a habit of meditating and breathing exercises. 
            I perform this daily, early in the morning.
          </p>
        </li>
        <li>
          <p>
            <strong>Computer-Related Hobbies</strong>
          </p>
          <p>
            I like to learn about programming languages. The most recent one is Rust.
            Another hobby of mine is to experiment with Arduinos, primarily to program its sensors.
          </p>
        </li>
      </ul>
    </Section>
  );
}
