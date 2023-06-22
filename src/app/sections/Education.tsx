import { Section } from "../Section";
export function Education() {
  return (
    <Section title={"Education"} classNames={["education", "foldable"]}>
      <ul>
        <li>
          <p>
            <strong>2015-2017</strong>
          </p>
          <p>MSc in Physical Chemistry at University of La Plata, Argentina.</p>
          <p>
            <strong>Thesis</strong>:{" "}
            <em>
              Computational calculation of thermodynamical properties for
              chemical reactions in condensed phase
            </em>
            . The thesis involved integrating packages for conformer generation,
            solvent effect simulation, semi-empirical quantum calculations and
            statistical calculations. Language: Python.
          </p>
          <p>
            The thesis was developed at the Centre For Inorganic Chemistry and
            supervised by Martin Lavecchia (
            <a href="mailto:lavecchia@gmail.com" className="email">
              lavecchia@gmail.com
            </a>
            ) and Carlos Franca.
          </p>
        </li>
        <li>
          <p>
            <strong>2012-2015</strong>
          </p>
          <p>Chemistry Degree at University of La Plata, Argentina.</p>
          <p>
            This course included (but was not restricted to) General Chemistry,
            Organic and Inorganic Chemistry, Spectroscopy Techniques (Mass
            Spectroscopy, IR, UV/Vis, Raman), Biology, Algebra, Calculus,
            Statistics.
          </p>
        </li>
      </ul>
    </Section>
  );
}
