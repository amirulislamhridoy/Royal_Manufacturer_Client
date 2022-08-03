import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faDiagramProject,
  faPeopleGroup,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const BusinessSummary = () => {
  return (
    <section className="mt-20 mb-10 mx-5">
      <h1 className="text-4xl font-bold text-center text-success">
        MILLIONS BUSINESS TRUST US
      </h1>
      <p className="text-center font-semibold">
        TRY TO UNDERSTAND USERS EXPECTATION
      </p>
      <div className="sm:flex justify-between mt-12 md:mx-28">
        <div className="flex flex-col justify-center sm:my-0 my-6">
          <FontAwesomeIcon
            className="text-5xl text-success"
            icon={faDiagramProject}
          />
          <div className="mt-3">
            <h3 className="text-center text-4xl font-medium">535+</h3>
            <p className="text-success font-medium text-center">Complete Projects</p>
          </div>
        </div>
        <div className="flex flex-col justify-center sm:my-0 my-6">
          <FontAwesomeIcon className="text-5xl text-success" icon={faFlag} />
          <div className="mt-3">
            <h3 className="text-center text-4xl font-medium">72</h3>
            <p className="text-success font-medium text-center">Countries</p>
          </div>
        </div>
        <div className="flex flex-col justify-center sm:my-0 my-6">
          <FontAwesomeIcon
            className="text-5xl text-success"
            icon={faPeopleGroup}
          />
          <div className="mt-3">
            <h3 className="text-center text-4xl font-medium">273+</h3>
            <p className="text-success font-medium text-center">Happy Clients</p>
          </div>
        </div>
        <div className="flex flex-col justify-center sm:my-0 my-6">
          <FontAwesomeIcon
            className="text-5xl text-success"
            icon={faThumbsUp}
          />
          <div className="mt-3">
            <h3 className="text-center text-4xl font-medium">432+</h3>
            <p className="text-success font-medium text-center">Feedbacks</p>
          </div>
        </div>
      </div>
      <div className="alert shadow-lg mt-12">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">Have an any question about us?</h3>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-sm btn-success">Contract Us</button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
