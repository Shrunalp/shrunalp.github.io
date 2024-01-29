import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Knowledge",
      content: [
        " Python, MatLab, Mathematica",
        " R, C/C++, Rust, LATEX",
        " Scikit, PyTorch, Pandas",
        " TensorFlow, NumPy, Sklearn",
        " Kaggle, Weights & Biases, Linux",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        " ML Architecture Design",
        " Computational Geometry",
        " Topological Data Analysis",
        " Computer Vision",
        " Mentoring",
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src="assets/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
