import {useState, useEffect} from 'react';
import {
  Box,
  Typography,
  LinearProgress,
} from '@mui/material';

const progressTableStyles = {
  fontFamily: "Montserrat",
  fontWeight: 400,
  color: "#000000",
  height: "24px",
  fontSize: "16px",
}

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        {/* <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography> */}
      </Box>
    </Box>
  );
};

// function createData(clientName, type, eta) {
//   return { clientName, type, eta };
// }

// const rows = [
//   createData('Jon Bellion', "Progress note", "prgress bar goes here" ),
//   createData('Jon Bellion', "Progress type not", "prgress bar goes here" ),
  
// ];

const Progress = () => {
  const [progress, setProgress] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? alert("done") : prevProgress + 1
      );
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <Box
        sx={{ 
          marginTop: {xs: "180px", md: "120px"},
          height: {xs: "46px", md: "48px"},
          background: "#FFFFFF",
          border: "1px solid #E5E5E5",
          borderRadius: "16px",
          padding: "4px, 16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: {xs: "7px 20px", md: "9px 40px"},
          }}
        >
          <Box
            sx={{
              fontStyle: "normal",
              fontFamily: "Montserrat",
              background: "#DE0D6F",
              borderRadius: "50%",
              height: "32px",
              width: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ffffff",
              marginRight: "24px",
              fontWeight: 400,
              fontSize: "16px",
            }}
          >
            2
          </Box>
          <Typography
            sx={{
              fontStyle: "normal",
              fontFamily: "Montserrat",
              color: "#000000",
              fontWeight: {sx: 400, md: 500},
              fontSize: {sx: "16px", md: "20px"},
            }}
          >
            Notes in progress
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "400px",
          }}
        >
          <Typography>Client</Typography>
          <Typography>Type</Typography>
          <Typography>ETA</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#FFFFFF",
            height: "48px",
            borderRadius: "8px",
            boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.1)",
            padding: {xs: "7px 20px", md: "9px 40px"},
          }}
        >
          <Typography sx={progressTableStyles}>Jon Bellon</Typography>
          <Typography sx={progressTableStyles}>Progress note</Typography>
          <Box 
            sx={{ 
              width: "200px",
           }}
          >
            <LinearProgressWithLabel sx={{ 
              height: "20px",
           }} value={progress} />
          </Box>
          <Typography>icon</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Progress