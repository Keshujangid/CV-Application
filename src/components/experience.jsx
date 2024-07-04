import React, { useState } from "react";
import UseFormHandlers from "./form-handler";
import deleteIcon from "../../src/assets/delete.svg";
const initialData = {
  startDate: "",
  endDate: "",
  companyName: "",
  jobTitle: "",
  jobDescription: "",
};

const formFields = [
  { label: "Company Name", name: "companyName" },
  { label: "Start Date", name: "startDate" },
  { label: "End Date", name: "endDate" },
  { label: "Job Title", name: "jobTitle" },
  { label: "Job Description", name: "jobDescription" },
];

export default function Experience({ info, setInfo }) {
  const {
    showList,
    showForm,
    formData,
    editIndex,
    handleChange,
    handleAddOrEdit,
    handleEdit,
    handleDelete,
    toggleShowList,
    toggleShowForm,
  } = UseFormHandlers("experience", initialData, info, setInfo);

  return (
    <div className="experience-form">
      <div className="show-toggle" onClick={toggleShowList}>
        <i className="fa-solid fa-briefcase"></i>

        <h2>Experience</h2>
        {showList ? (
          <i className="fa-solid fa-chevron-down"></i>
        ) : (
          <i className="fa-solid fa-chevron-up"></i>
        )}
      </div>
      {showList && (
        <>
          {info.experience.map((exp, index) => (
            <div
              key={index}
              className="experience-item"
              onClick={() => handleEdit(index)}
            >
              <h3>{exp.jobTitle}</h3>
              <button
                className="delete-item"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
              >
                <svg
                  className="bin-top"
                  viewBox="0 0 39 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="5"
                    x2="39"
                    y2="5"
                    stroke="white"
                    strokeWidth="4"
                  ></line>
                  <line
                    x1="12"
                    y1="1.5"
                    x2="26.0357"
                    y2="1.5"
                    stroke="white"
                    strokeWidth="3"
                  ></line>
                </svg>
                <svg
                  className="bin-bottom"
                  viewBox="0 0 33 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_8_19" fill="white">
                    <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                  </mask>
                  <path
                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                    fill="white"
                    mask="url(#path-1-inside-1_8_19)"
                  ></path>
                  <path d="M12 6L12 29" stroke="white" strokeWidth="4"></path>
                  <path d="M21 6V29" stroke="white" strokeWidth="4"></path>
                </svg>
              </button>
            </div>
          ))}
          <button className="show-form" onClick={toggleShowForm}>
            Add Experience
          </button>
        </>
      )}
      {showForm && (
        <form onSubmit={handleAddOrEdit}>
          {formFields.map(({ label, name }) => (
            <div key={name}>
              <label htmlFor={name}>{label}</label>
              <input
                type="text"
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button type="submit">
            {editIndex !== null ? "Update Experience" : "Add Experience"}
          </button>
        </form>
      )}
    </div>
  );
}
