import {useState, useEffect} from 'react';
import {
  Box,
  Typography,
  LinearProgress,
} from '@mui/material';
import trashIcon from '../assets/trash.png'
import {useSelector, useDispatch} from 'react-redux';
import { removeClient } from '../store/slices/clientSlice';


const CustomLinearProgress = ({progressValue, id}) => {
  const [progress, setProgress] = useState(progressValue);
  const dispatch = useDispatch();

  function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
      </Box>
    );
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? dispatch(removeClient(id)) : prevProgress + 1
      );
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [dispatch, id]);

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel 
        sx={{ 
          height: {xs: "16px", md: "24px"},
          borderRadius: "8px",
          width: {xs: "120px", md: "258px"},
          background: "#B2B2B2",
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#3BC171",
          },
        }} 
        value={progress} 
      />
    </Box>
    </>
  )
}

const progressTableStyles = {
  fontFamily: "Montserrat",
  fontWeight: 400,
  color: "#000000",
  height: "24px",
  fontSize: "16px",
  width: {xs: "200px", md: "150px"},
  marginRight: {xs: "0px", md: "0px"},
};

const progrressTableMobileStyle = {
  fontFamily: "Montserrat",
  fontWeight: 400,
  color: "#000000",
  height: "24px",
  width: "250px",
  fontSize: "16px",
  display: {xs: 'none', md: 'flex'},
}


const tableHeaderStyles = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  color: "#000000",
}

const tableHeaderMobileStyles = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  color: "#000000",
  display: {xs: 'none', md: 'flex'},
}

const Progress = () => {
  const {client} = useSelector((state)=>state.client);
  const dispatch = useDispatch();

  const handleRemoveClient = (id) => {
    dispatch(removeClient(id))
  }

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
            {client.length}
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
            width: {xs: '100px', md: '720px'},
            my: "16px",
          }}
        >
          <Typography sx={tableHeaderStyles}>Client</Typography>
          <Typography sx={tableHeaderMobileStyles}>Type</Typography>
          <Typography sx={tableHeaderMobileStyles}>ETA</Typography>
        </Box>

        {client.map((client) => (
          <Box
          key={client.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#FFFFFF",
            marginBottom: "6px",
            height: "48px",
            borderRadius: "8px",
            border: {xs: "1px solid #E5E5E5", md: ""},
            boxShadow: {xs: "none", md: "4px 4px 16px rgba(0, 0, 0, 0.1)"},
            padding: {xs: "1px 20px 1px 5px", md: "9px 40px 9px 40px"},
          }}
        >
          <Typography sx={progressTableStyles}>{client.client}</Typography>
          <Typography sx={progrressTableMobileStyle}>{client.type}</Typography>
          <Box 
            sx={{ 
              width: {xs: "120px", md: "258px"}
           }}
          >
            <CustomLinearProgress progressValue={client.progress} id={client.id} />
          </Box>
            <Typography>
              <Box
                component="img"
                sx={{
                  display: {xs: 'none', md: 'flex'},
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => handleRemoveClient(client.id)}
                alt="Trash icon"
                src={trashIcon}
              />
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Progress