// work history component
import { Section } from "../Section";
import githubSvg from "../images/github.svg";
import npmSvg from "../images/npm.svg";
import Image from "next/image";

export function WorkHistory() {
  return (
    <Section title={"Work History"} classNames={["work-history", "foldable"]}>
      <ul>
        <li>
          <p>
            <strong>2023-present</strong>: Typescript Developer at Zakodium
          </p>
          <p>
            The company's staff and collaborators list can be found at{" "}
            <a href="https://nmrium.com/about">NMRium</a>, a project where we
            develop React components and data parsers for NMR visualization.
          </p>
          <p>
            Anonymise counterfeit data for Interpol. In this project we write
            and train neural networks. A public playground of the project is
            available at <a href="http://mrz.zakodium.com/">MRZ Website</a>. The
            client part of the project is written in Typescript and React.
          </p>
          <p>
            Own packages (mostly Typescript projects that run on NodeJS). YOLO
            to COCO conversion, simple recursive directory reading and other
            projects of mine were published to the Node Package Registry (NPM).
          </p>
          <p>
            <a href="https://www.npmjs.com/~santimir" className="img-link">
              <Image
                src={npmSvg}
                style={{ color: "#CB3837" }}
                height={24}
                alt="npm"
              />{" "}
              NPM
            </a>
          </p>
        </li>
        <li>
          <p>
            <strong>2021-2022</strong>: Github Open Source Contributor
          </p>
          <p>
            Contributor to Typescript projects. Among these:
            <a href="https://github.com/cheminfo/varian-converter">
              parsing NMR data
            </a>
            (Varian/Agilent) as well as
            <a href="https://github.com/cheminfo/wdf-parser">Raman data</a> (WDF
            format). These convert source files (binary or text) to a friendly
            JSON format that is general, easy to transfer and ready for client
            usage. Another project I am involved in is{" "}
            <a href="https://github.com/image-js/iobuffer">IOBuffer</a>, a
            Typescript library for manipulating binary data.
          </p>
          <p>
            I am also interested in anything related to facilitating loading and
            reading of files from the system, and helped build{" "}
            <a href="https://github.com/cheminfo/filelist-utils">
              filelist-utils
            </a>
            , a library to connect the way NodeJS and Browser APIs handle file
            loading.
          </p>
          <p>
            <a href="https://github.com/santimirandarp" className="img-link">
              <Image src={githubSvg} height={24} alt="github" /> Github
            </a>
          </p>
        </li>
        <li>
          <p>
            <strong>2020-2022</strong>: Developer Hubs
          </p>
          <p>
            Active member of the{" "}
            <a href="https://www.mongodb.com/community/forums/u/santimir/summary">
              MongoDB Developers Forum
            </a>{" "}
            as well as{" "}
            <a href="https://stackoverflow.com/users/12582392/minsky">
              StackOverflow
            </a>
            .
          </p>
        </li>
        <li>
          <p>
            <strong>2017-2019</strong>: Chemistry Teacher
          </p>
          <p>
            Introduction to Chemistry Lecturer at "Instituto Superior de
            Formación Docente Nº3" (Higher Institute of Teacher Training Nº3),
            Neuquen, Argentina. The role consisted of teaching chemistry to
            aspiring High School teachers. It involved classroom lectures and
            simple laboratory experiences (distillation, calorimetry,
            titrations).
          </p>
        </li>
      </ul>
    </Section>
  );
}
