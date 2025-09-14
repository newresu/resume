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
              My primary contribution was to refactor and train a Chemical Variational Auto-Encoder
              (CVAE), that encodes molecules into vectors.
              The neural network was trained in a <abbr>HPCC</abbr> (High Performance Computing Cluster).
              Functionality was added to run this project in a web browser. The code is private due to licensing, but the reference work (unmaintained) project can be found
              at <a href="https://github.com/aspuru-guzik-group/chemical_vae">aspuru-guzik-group/chemical_vae</a>.
            </p>
            <p>
              After a brief period, I realise that this role was not a good fit for me,
              primarily due to my limited experience with Robotics.
              I decided to leave the role and take some time off, during which I implemented the paper "TNT: A Solver for Large Dense Least-Squares Problems that Takes Conjugate Gradient from Bad in Theory, to Good in Practice"
              in Typescript. The code can be found at <a href="https://github.com/newresu/fit-tnt">newresu/fit-tnt</a>.
            </p>
            <p>
              For the application to this job, I made a brief video-presentation that summarises most of my work. The presentation is <a href="https://www.youtube.com/watch?v=gpUzwnJ1Ka0">on Youtube</a>.
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
              <b>Image analysis</b>. Anonymisation of personal information in Identity Cards, for Interpol and
              other organisations. A public playground, which was used as proof-of-concept, is available at <a href="http://mrz.zakodium.com/">MRZ Website</a>. An ID-card image can be dropped or uploaded to test it.
              The networks run locally (in your device) and no data is sent out to a server.
            </p>
            <p>
              This project involved several interesting challenges:
              <ol className="image-tasks">
                <li>Creating a database of IDs,</li>
                <li>Augmenting and cleaning the data,</li>
                <li>Fine tune neural networks to remove signatures, faces and barcodes,</li>
                <li>Compress models to a minimum (2 Mb) to reduce the loading time,
                </li>
                <li>New classification networks in PyTorch (from scratch), to fix the perspective of the ID card automatically.
                </li>
              </ol>
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
              <b>Binary Parsers</b>. <a href="https://github.com/cheminfo/wdf-parser">wdf-parser</a> 
              converts Raman binary files to JSON-like objects. A similar
              project is <a href="https://github.com/cheminfo/spc-parser">spc-parser</a>.
            </p>
            <p>
              <b>IOBuffer</b>. A project I am involved in is <a href="https://github.com/image-js/iobuffer">IOBuffer</a>, a
              Typescript library for manipulating binary data.
            </p>
            <p>
              <b>File Handling</b>. To harmonise the way NodeJS and FileList Web
              API handle files we wrote <a href="https://github.com/cheminfo/filelist-utils">
                filelist-utils
              </a>
              (with many collaborators).
            </p>
            <p>
              <b>Smaller Projects</b>. YOLO to COCO format conversion, simple
              recursive directory reading and other projects published to the
              <abbr>NPM</abbr> (Node Package Registry).
            </p>
            <p>
              <a href="https://www.npmjs.com/~santimir" className="img-link">
                <img
                  src={npmSvg}
                  style={{ color: "#CB3837" }}
                  height={24}
                  alt="npm"
                />
                NPM
              </a> { " "} 
              <a href="https://github.com/newresu" className="img-link">
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
              Active member of the <a href="https://www.mongodb.com/community/forums/u/santimir/summary">
                MongoDB Developers Forum
              </a>.
            </p>
          </div>
        </li>
        <li>
          <p>
            <strong>2017-2019</strong>: Chemistry Teacher
          </p>
          <p>
            Introduction to Chemistry at <em>Instituto Superior de Formación Docente</em> (Institute for
            Teacher Training), Argentina. The role consisted of teaching
            chemistry to aspiring High School teachers. It involved planning and supervising laboratory experiments, delivering 
            lectures, and grading the students.
          </p>
        </li>
      </ul>
    </Section>
  );
}
