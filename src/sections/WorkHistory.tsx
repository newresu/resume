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
              <b>Robotics and Artificial Intelligence</b>,
              The <a
                href="https://www.chem.gla.ac.uk/cronin/members/santi-miranda/"
              >
                Digital Chemistry Group
              </a> is a research group led by <a href="https://en.wikipedia.org/wiki/Leroy_Cronin">Leroy Cronin</a>. The group develops software for a robot capable of performing chemical experiments.
            </p>
            <p>
              My primary contribution was to refactor a Chemical Variational Auto-Encoder
              (CVAE), which is a specific kind of neural network that encodes the input in a lower dimensional space.
              Plus, adding functionality for running this project within a web browser. The code is private due to licensing. The original (unmaintained) project can be found
              at <a href="https://github.com/aspuru-guzik-group/chemical_vae">aspuru-guzik-group/chemical_vae</a>.
            </p>
            <p>
              Sadly, this role was overly challenging for me,
              primarily due to my limited experience with Robotics, and strong safety concerns given the very low
              guardrails in place (this was a research project.)
              After leaving my role at Glasgow, I returned to mathematics, and implemented the paper "TNT: A Solver for Large Dense Least-Squares Problems that Takes Conjugate Gradient from Bad in Theory, to Good in Practice"
              in Typescript. The code can be found at
              <a href="https://github.com/newresu/fit-tnt">newresu/fit-tnt</a>.
            </p>
            <p>
              For the application to this job, I made a screencast showing parts of the project in Computer Vision that automatically hides
              Personal Identifiable Information (known as PII) from identity cards
              <a href="">PLACEHOLDER</a>.
              the remaining part of the application were my presentation slides, with details of my Open Source Software contributions,
              it is also available at <a href="">PLACEHOLDER</a>
            </p>
          </div>
        </li>
        <li>
          <p>
            <strong>2023-2024</strong>: Typescript Developer at Zakodium
          </p>
          <div className="tasks">
            <p>
              <b>Chemical Data Binary Parsers</b>. <a
                href="https://www.nmrium.org/about">
                NMRium
              </a>
              is a web-platform for <abbr>NMR</abbr> (Nuclear Magnetic Resonance) visualisation and analysis.
              My role involved
              writing binary data parsers for NMR data. For example, a Varian
              Converter to parse (Varian/Agilent) data.
            </p>
            <p>
              <b>Image analysis</b>. Anonymise counterfeit data for Interpol and
              other organisations. A public playground is available at
              <a href="http://mrz.zakodium.com/">MRZ Website</a>. It takes a few
              seconds to load, a random ID-card image can be dropped to test it.
              The project involved several interesting challenges:
              <ul>
                <li>Creating a database of IDs,</li>
                <li>Augmenting and cleaning the data,</li>
                <li>Fine tune several neural networks to classify and
                  returns a bounding box for signatures, faces and other PIIs,</li>
                <li>Minimize the weight of the model to a minimum (2 Mb) for reduce
                  the loading time,
                </li>
                <li>Creating other neural networks from scratch, to recognise whether the images were
                  rotated, and fix the perspective of the ID card.
                </li>
              </ul>

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
