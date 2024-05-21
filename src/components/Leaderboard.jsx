import React, { useState } from "react";
import { Button } from "@mui/material";
import { data1 } from "../Data/Data";

import goldMedal from "../Assets/medal.png";
import silverMedal from "../Assets/2nd-place.png";
import bronzeMedal from "../Assets/3rd-place.png";

const Demo2 = () => {
  const [activeButton, setActiveButton] = useState("All");

  const getColor = (index) => {
    const colors = ["#FFEDD5", "#FEE2E2", "#DCFCE7"];
    return colors[index % colors.length];
  };

  const getFontColor = (index) => {
    const fontColors = ["#9A3412", "#991B1B", "#166534"];
    return fontColors[index % fontColors.length];
  };

  const renderTrophy = (index) => {
    if (index === 0)
      return (
        <img
          src={goldMedal}
          alt="Gold Medal"
          style={{ width: "25px", height: "25px" }}
        />
      );
    if (index === 1)
      return (
        <img
          src={silverMedal}
          alt="Silver Medal"
          style={{ width: "25px", height: "25px" }}
        />
      );
    if (index === 2)
      return (
        <img
          src={bronzeMedal}
          alt="Bronze Medal"
          style={{ width: "25px", height: "25px" }}
        />
      );
    return null;
  };

  return (
    <div className="container">
      <table
        style={{ width: "100%", borderCollapse: "collapse", direction: "ltr" }}
      >
        <thead>
          <tr style={{ fontWeight: "bold", fontSize: "26px" }}>
            <th colSpan="3">Leaderboard</th>
          </tr>
          <tr>
            <th colSpan="3">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 10px",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => setActiveButton("All")}
                  style={{
                    margin: "0",
                    backgroundColor:
                      activeButton === "All" ? "#2A3958" : "grey",
                    color: "white",
                  }}
                >
                  All
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setActiveButton("Community")}
                  style={{
                    margin: "0",
                    backgroundColor:
                      activeButton === "Community" ? "#2A3958" : "grey",
                    color: "white",
                  }}
                >
                  Community
                </Button>
              </div>
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "left", padding: "10px" }}>Position</th>
            <th style={{ textAlign: "left", padding: "10px" }}>Name</th>
            <th style={{ textAlign: "left", padding: "10px" }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item, index) => (
            <tr
              key={index}
              className={`row ${index % 2 === 0 ? "even-row" : "odd-row"}`}
              style={{
                textAlign: "left",
                backgroundColor: index % 2 === 0 ? "#F9F9FB" : "white",
                height: "44px",
              }}
            >
              <td style={{ textAlign: "left", padding: "10px" }}>
                <Button
                  className="h-[29px] w-[61px]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#222",
                    fontSize: "14px",
                    background: "#ebeef3",
                    borderRadius: "8px",
                    "&:hover": { background: "#ebeef3" },
                    width: 61,
                    height: 29,
                  }}
                >
                  {item.id} {renderTrophy(index)}
                </Button>
              </td>
              <td style={{ textAlign: "left", padding: "10px" }}>{item.name}</td>
              <td style={{ textAlign: "left", padding: "10px" }}>
                <div
                  className="rounded-3xs bg-status-text-bg3 overflow-hidden inline-flex items-center py-0.5 px-2 gap-[6px]"
                  style={{ backgroundColor: getColor(index) }}
                >
                  <div
                    className="relative text-sm leading-[16px] font-medium font-pretendard text-status-text-waiting whitespace-nowrap"
                    style={{ color: getFontColor(index) }}
                  >
                    {item.Score}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Demo2;
