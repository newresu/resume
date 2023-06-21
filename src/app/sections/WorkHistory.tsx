// work history component
export function WorkHistory() {
  return (
    <div class="work-history">
      <h2 id="work-history_title">Work History</h2>
      <ul>
        <li>
          <p>
            <strong>2021-2022</strong>: Github Open Source Contributor
          </p>
          <p>
            Contributor to chemistry projects written in Typescript, Javascript
            or Python. I’ve written code for{" "}
            <a href="https://github.com/santimirandarp/varian-converter">
              parsing NMR data
            </a>{" "}
            (Varian/Agilent) as well as{" "}
            <a href="https://github.com/santimirandarp/wdf-parser">
              Raman data
            </a>
            . In these cases, the code converts the original source files
            (binary and text) to a friendly JSON format that is general, easy to
            transfer and understood by any web browser.
          </p>
          <p>
            <a href="https://github.com/santimirandarp" class="img-link">
              <img src="./github.svg" height={24} alt="github" /> Github
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
      <hr />
    </div>
  );
}
