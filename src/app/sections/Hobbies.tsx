import { Section } from "../Section";
export function Hobbies() {
  return (
    <Section title={"Other interests"} classNames={["hobbies", "foldable"]}>
      <ul>
        <li>
          <p>
            <strong>Gap Year</strong>
          </p>
          <p>
            During 2019-2021 I volunteered at farms, hostels, and other places
            while travelling and learning to code as well as some Greek and
            Italian. This was a very rewarding experience. During that time I{" "}
            <a href="https://misterybodon.github.io/web/">coded a blog</a>.
          </p>
        </li>
        <li>
          <p>
            <strong>Mind and Body</strong>
          </p>
          <p>
            Climbing, hiking, camping and outdoor activities help me to stay
            healthy and happy.
          </p>
          <p>
            I practice Zen meditation and have volunteered for a few Buddhist
            Centres in Italy (Thabarwa) and England (Kadampa).
          </p>
        </li>
        <li>
          <p>
            <strong>Computer-Related Hobbies</strong>
          </p>
          <p>
            I like to learn about new technologies and programming languages,
            and recently got involved with AWK programming language, and
            creating simple experiments with Arduinos.
          </p>
        </li>
      </ul>
    </Section>
  );
}
