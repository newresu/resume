import { Section } from "../Section";
export function Education() {
  return (
    <Section title={"Education"} classNames={["education", "foldable"]}>
      <ul>
        <li>
          <p>
            <strong>2015-2017</strong>
          </p>
          <div className="tasks">
            <p>
              MSc in Physical Chemistry at University of La Plata, Argentina.
            </p>
            <p>
              <strong>Thesis</strong>: <em>
                Thermodynamics of chemical reactions in condensed phase
              </em>. The thesis involved integrating packages for conformer
              generation, solvent-effect simulation, and quantum mechanics and statistics.
              Programming Language: Python.
            </p>
            <p>
              The thesis was developed at the Centre For Inorganic Chemistry and
              supervised by Martin Lavecchia (
              <a href="mailto:lavecchia@gmail.com" className="email">
                lavecchia@gmail.com
              </a>
              ) and Carlos Franca.
            </p>
          </div>
        </li>
        <li>
          <div className="tasks">
            <p>
              <strong>2012-2015</strong>
            </p>
            <p>Chemistry Degree at University of La Plata, Argentina.</p>
            <p>
              The first 3 years were in general chemistry with a strong mathematical background (physics, calculus, linear algebra.) 
            </p>
          </div>
        </li>
      </ul>
    </Section>
  );
}
