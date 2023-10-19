import { ResponsiveLine } from "@nivo/line";
import { useTheme, Box } from "@mui/material";
import React from "react";

const TimeChart = ({ data }) => {
  const { palette } = useTheme();
  const uniqueAccessions = [];
  const processedData = data.map((sample) => ({
    id: sample.id,
    data: [
      {
        x: new Date(sample.date).toISOString().split("T")[0],
        y: sample.output.length // Number of samples at that date
      }
    ]
  }));

  //   const processedData = data.map((sample) => {
  //     const entry = { id: sample.id };

  //     sample.output.forEach((item) => {
  //       if (entry[item.accession]) {
  //         entry[item.accession] += item.value; // Append value if accession already exists
  //       } else {
  //         entry[item.accession] = item.value; // Otherwise, set the value
  //         uniqueAccessions.push(item.accession); // Add accession to the set
  //       }
  //     });
  //     return entry;
  //   });
  //   console.log(uniqueAccessions);
  console.log(data);
  return (
    <ResponsiveLine
      data={processedData}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "0",
        max: "auto",
        stacked: true,
        reverse: false
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "Date",
        legendOffset: 20,
        legendPosition: "middle"
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Number of Species",
        legendOffset: -40,
        legendPosition: "middle"
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
};

export default TimeChart;
