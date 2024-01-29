import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Age",
          content: "24",
        },
        {
          id: 2,
          name: "Address",
          content: "4400 University Drive, Fairfax, Virginia 22030",
        },
        {
          id: 3,
          name: "Email",
          content: (
            <>
              <a href="mailto:shrunal.pothagoni@gmail.com">shrunal.pothagoni@gmail.com</a>
            </>
          ),
        },
        {
          id: 4,
          name: "Phone",
          content: (
            <>
              <a href="tel:+1 703 470 1144">+1 703 470 1144</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "USA",
        },
        {
          id: 2,
          name: "Study",
          content: "George Mason University",
        },
        {
          id: 3,
          name: "Degree",
          content: "PhD",
        },
        {
          id: 4,
          name: "Interest",
          content: "Building Speakers",
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
