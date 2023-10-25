import { ResponsiveLine } from "@nivo/line";
import { useTheme, Box } from "@mui/material";
import React from "react";

const TimeChart = ({ data }) => {
  const { palette } = useTheme();
  console.log("Hiiiii");
  console.log(data);
  const dateCounts = data.reduce((acc, item) => {
    const formattedDate = new Date(item.date).toLocaleDateString();
    acc[formattedDate] = (acc[formattedDate] || 0) + 1;
    return acc;
  }, {});

  const processedData = [
    {
      id: "Data Points",
      data: Object.entries(dateCounts).map(([date, count]) => ({
        x: date,
        y: count
      }))
    }
  ];
  const yTicks = Array.from({ length: data.length + 1 }, (_, i) => i + 1);

  console.log(processedData);
  return (
    <ResponsiveLine
      data={processedData}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{
        type: "point"
      }}
      yScale={{ type: "linear", min: 1, max: data.length + 1 }}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickValues: yTicks,
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Number of Samples",
        legendOffset: -40,
        legendPosition: "middle"
      }}
      colors={{ scheme: "nivo" }}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={8}
      pointBorderColor={{ from: "serieColor" }}
      useMesh={true}
      enableGridX={false}
    />
  );
};

export default TimeChart;
