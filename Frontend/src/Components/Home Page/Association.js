import React from "react";

export default function Association() {
  const data = ["company1", "company2", "company3", "company4"];
  return (
    <div>
      <div className="container my-5">
        <div className="row text-center">
          <p>In Association with </p>
        </div>
        <div className="row justify-content-evenly">
          {data.map((e) => {
            return (
              <div key={e} className="col text-center">
                <p>{e}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
