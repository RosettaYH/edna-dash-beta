import { Box, Typography, useTheme } from "@mui/material";
// import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const { palette } = useTheme();

  return (
    <Box
      backgroundColor="#ffffff"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Box width="100%" m="0 30px">
        <Box display="flex" justifyContent="space-between">
          <Box>
            {icon}
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: palette.grey[900] }}
            >
              {title}
            </Typography>
          </Box>
          <Box>
            {progress !== null && progress !== undefined && (
              <ProgressCircle progress={progress} />
            )}{" "}
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mt="2px">
          <Typography variant="h5" sx={{ color: palette.grey[600] }}>
            {subtitle}
          </Typography>
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: palette.grey[100] }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
