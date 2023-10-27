import { useTheme, Box } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import React from "react";
import { ResponsiveSunburst } from "@nivo/sunburst";

const transformForSunburst = (sample) => {
  const root = {
    name: sample[0].id,
    // color: "#32746D", // You can adjust this as needed
    children: []
  };

  const addToHierarchy = (path, value) => {
    let level = root;
    path.forEach((part, index) => {
      let existingChild = level.children.find((child) => child.name === part);
      if (!existingChild) {
        existingChild = {
          name: part,
          value: value,
          children: []
        };
        level.children.push(existingChild);
      }
      if (index === path.length - 1) {
        existingChild.value = (existingChild.value || 0) + value;
      }
      level = existingChild;
    });
  };

  sample[0].output.forEach((entry) => {
    const path = [
      entry.class_name,
      entry.order_name,
      entry.family,
      entry.genus,
      entry.organism
    ];
    addToHierarchy(path, entry.value);
  });

  return root;
};

const SunburstChart = ({ data }) => {
  const { palette } = useTheme();

  const sunburstData = transformForSunburst(data);
  return (
    <ResponsiveSunburst
      data={sunburstData}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      id="name"
      value="value"
      cornerRadius={2}
      borderColor={{ theme: "background" }}
      colors={{ scheme: "paired" }}
      childColor={{
        from: "color",
        modifiers: [["brighter", 0.2]]
      }}
      enableArcLabels={true}
      arcLabelsSkipAngle={25}
      // arcLabelsTextColor={{
      //   from: "color",
      //   modifiers: [["darker", 1.4]]
      // }}
    />
  );
};

export default SunburstChart;
