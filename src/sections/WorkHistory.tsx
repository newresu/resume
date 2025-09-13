// work history component
import { Section } from "../Section";
import githubSvg from "../assets/images/github.svg";
import npmSvg from "../assets/images/npm.svg";

export function WorkHistory() {
  return (
    <Section
      id="work_history"
      title={"Work History"}
      classNames={["work-history", "foldable"]}
    >
      <ul>
        <li>
          <p>
            <strong>2024</strong>: Research Associate at Glasgow University
          </p>
          <div className="tasks">
            <p>
              <b>
                <a
                  href="https://www.chem.gla.ac.uk/cronin/members/santi-miranda/"
                  style={{
                    paddingLeft: 0,
                  }}
                >
                  Digital Chemistry Group
                </a>
              </b>{" "}
              is focused on developing software for a robot capable of performing chemical experiments.
              My role here was to contribute to this project. Sadly, this role was overly challenging for me,
              primarily due to my limited experience with Robotics, and strong safety concerns given the very low
              guardrails in place (since this was a research project).
            </p>
            <p>
              My primary contribution was to refactor a variational autoencoder
              (VAE) for chemical structures and included functionality for running this project within a web browser. This code is private due to licensing, the original (unmaintained) project can be found
              at <a href="https://github.com/aspuru-guzik-group/chemical_vae" style={{ paddingLeft: 0, }}>aspuru-guzik-group/chemical_vae</a>.
            </p>
            <p>
              After leaving my role at Glasgow, I implemented the paper "TNT: A Solver for Large Dense Least-Squares Problems that Takes Conjugate Gradient from Bad in Theory, to Good in Practice"
              in Typescript. The code can be found at {" "}
              <b>
                <a
                  href="https://github.com/newresu/fit-tnts"
                  style={{
                    paddingLeft: 0,
                  }}
                >newresu/fit-tnt</a>.
              </b>
            </p>
            <p>
              For the application to this job, I made a screencast showing parts of the project in Computer Vision that automatically deletes
              personal identifiable information from identity cards {" "}
              <b>
                <a
                  href=""
                  style={{
                    paddingLeft: 0,
                  }}
                >PLACEHOLDER</a>.
              </b>
              the remaining part of the application was my presentation slides, with details of my open source contributions and development tooling,
              it is also available at {" "} <a href="" style={{
                paddingLeft: 0,
              }}>PLACEHOLDER</a>
            </p>
          </div>
        </li>
        <li>
          <p>
            <strong>2023-2024</strong>: Typescript Developer at Zakodium
          </p>
          <div className="tasks">
            <p>
              <b>
                <a
                  href="https://www.nmrium.org/about"
                  style={{
                    paddingLeft: 0,
                  }}
                >
                  NMRium
                </a>
              </b>{" "}
              is a platform for NMR visualisation and analysis. My role involved
              writing binary data parsers for NMR data. For example, a Varian
              Converter to parse (Varian/Agilent) data.
            </p>
            <p>
              <b>Image analysis</b>. Anonymise counterfeit data for Interpol and
              other organisations. A public playground is available at{" "}
              <a href="http://mrz.zakodium.com/">MRZ Website</a>. It takes a few
              seconds to load, a random ID-card image can be dropped to test it.
            </p>
            <p>
              <b>Optimisation</b>. Fast-Combinatorial Non-Negative Least
              Squares, published in Zenodo and available at{" "}
              <a href="//github.com/mljs/fcnnls">mljs/fcnnls</a>.
            </p>
          </div>
        </li>
        <li>
          <p>
            <strong>2021-2022</strong>: Projects for Cheminfo and EPFL
          </p>
          <div className="tasks">
            <p>
              <b>Binary Parsers</b>.
              <a href="https://github.com/cheminfo/wdf-parser">WDF parser</a>{" "}
              converts Raman binary files to JSON-like objects. A similar
              project is{" "}
              <a href="https://github.com/cheminfo/spc-parser">SPC parser</a>.
            </p>
            <p>
              <b>IOBuffer</b>. A project I am involved in is{" "}
              <a href="https://github.com/image-js/iobuffer">IOBuffer</a>, a
              Typescript library for manipulating binary data.
            </p>
            <p>
              <b>File Handling</b>. To harmonise the way NodeJS and FileList Web
              API handle files we wrote
              <a href="https://github.com/cheminfo/filelist-utils">
                filelist-utils
              </a>{" "}
              (with many collaborators).
            </p>
            <p>
              <b>Smaller Projects</b>. YOLO to COCO format conversion, simple
              recursive directory reading and other projects published to the
              Node Package Registry (NPM).
            </p>
            <p>
              <a href="https://www.npmjs.com/~santimir" className="img-link">
                <img
                  src={npmSvg}
                  style={{ color: "#CB3837" }}
                  height={24}
                  alt="npm"
                />{" "}
                NPM
              </a>{" "}
              <a href="https://github.com/santimirandarp" className="img-link">
                <img src={githubSvg} height={24} alt="github" /> Github
              </a>
            </p>
          </div>
        </li>
        <li>
          <p>
            <strong>2020-2022</strong>: Developer Hubs
          </p>
          <div className="tasks">
            <p>
              Active member of the{" "}
              <a href="https://www.mongodb.com/community/forums/u/santimir/summary">
                MongoDB Developers Forum
              </a>
              .
            </p>
          </div>
        </li>
        <li>
          <p>
            <strong>2017-2019</strong>: Chemistry Teacher
          </p>
          <p>
            Introduction to Chemistry at{" "}
            <em>Instituto Superior de Formación Docente</em> (Institute for
            Teacher Training), Argentina. The role consisted of teaching
            chemistry to aspiring High School teachers. It involved classroom
            lectures and simple laboratory experiments (distillation,
            calorimetry, titrations).
          </p>
        </li>
      </ul>
    </Section>
  );
}
