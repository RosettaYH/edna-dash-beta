import { useTheme, Box } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import React from "react";

const BarChart = ({ data, hasLimit = true }) => {
  const { palette } = useTheme();

  const processedData = data.map((sample) => {
    const entry = { id: sample.id };
    sample.output.forEach((item) => {
      if (entry[item.organism]) {
        entry[item.organism] += item.value; // Append value if accession already exists
      } else {
        entry[item.organism] = item.value; // Otherwise, set the value
      }
    });
    return entry;
  });

  // Aggregate the sum for each accession across all samples
  const totalOrganisms = {};
  processedData.forEach((sample) => {
    Object.keys(sample).forEach((key) => {
      if (key !== "id") {
        if (totalOrganisms[key]) {
          totalOrganisms[key] += sample[key];
        } else {
          totalOrganisms[key] = sample[key];
        }
      }
    });
  });
  const sortedOrganisms = Object.keys(totalOrganisms).sort(
    (a, b) => totalOrganisms[b] - totalOrganisms[a]
  );

  const top5Organisms = hasLimit
    ? sortedOrganisms.slice(0, 5)
    : sortedOrganisms;
  console.log(hasLimit);
  const filteredData = processedData.map((sample) => {
    const filteredSample = { id: sample.id };
    top5Organisms.forEach((organism) => {
      if (sample[organism]) {
        filteredSample[organism] = sample[organism];
      }
    });
    return filteredSample;
  });
  return (
    <ResponsiveBar
      data={filteredData}
      keys={top5Organisms} // Add more keys if there are more organisms
      indexBy="id"
      margin={{ top: 50, right: 200, bottom: 50, left: 100 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "blues" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]]
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: "Sample Number",
        legendPosition: "middle",
        legendOffset: 38
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Number of Matches", // changed
        legendPosition: "middle",
        legendOffset: -60
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]]
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      role="application"
      barAriaLabel={function (e) {
        return (
          e.accession + ": " + e.formattedValue + " in country: " + e.indexValue
        );
      }}
    />
  );
};

export default BarChart;
