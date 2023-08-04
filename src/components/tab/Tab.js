import React, { useState } from "react";
import "./Tab.css";

const Tab = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="third-sec">
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={activeTab === tab ? "active" : ""}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab}
            style={{ display: activeTab === tab ? "block" : "none" }}
          >
            <p>
              Our all-in-one app is designed 1o help merchants increase soles
              and improve the
            </p>
            <p>
              customer experience on their online stores. with a range of
              features and integrations,
            </p>
            <p>
              our app provides a user-friendly solution for businesses of all
              sizes.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
