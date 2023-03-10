import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from './assets/logo.png';
import helpIcon from './assets/help.png';
import {Button, Typography} from '@mui/material';
import Upload from './components/Upload';
import Progress from './components/Progress';
import {useSelector} from 'react-redux';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {client} = useSelector((state)=>state.client);

  return (
    <>
      <Upload
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <AppBar
        position="static"
        variant="outline"
        sx={{
          background: "#FFFFFF",
          borderBottom: "2px solid #731054",
          height: "80px",
          mb: "1em"
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
          >
            <Box
              component="img"
              sx={{
                display: {xs: 'none', md: 'flex'},
                width: "56px",
                height: "32px",
                marginTop: "12px",
              }}
              alt="Mentalyc Logo"
              src={Logo}
            />

            <Box
              component="img"
              sx={{
                display: {xs: 'flex', md: 'none'},
                margin: 'auto',
                width: "42px",
                height: "24px",
                marginTop: "26px",
              }}
              alt="Mentalyc Logo"
              src={Logo}
            />
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg">
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <Typography
              sx={{
                width: "89px",
                height: "24px",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#000000"
              }}
            >
              Hi, Maria
            </Typography>
            <Box
              component="img"
              sx={{
                display: {xs: 'none', md: 'flex'},
                width: "24px",
                height: "24px",
                cursor: 'pointer',
              }}
              alt="Help icon"
              src={helpIcon}
            />
          </Box>
        </Box>

        <Typography
          sx={{
            height: "32px",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: {xs: "20px", md: "24px"},
            lineHeight: {xs: "24px", md: "32px"},
            color: "#000000",
            marginTop: "16px"
          }}
        >
          Upload your session’s recordings
        </Typography>

        <Button
          disableRipple
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px 16px",
            gap: "8px",
            height: "40px",
            width: "100%",
            borderRadius: "8px",
            marginTop: {xs: "52px", md: "16px"},
            background: "linear-gradient(295.67deg, #DE0D6F 16.23%, #731054 83.77%)"
          }}
          onClick={handleOpen}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              color: "#ffffff",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "24px",
              textTransform: "capitalize",
            }}
          >
            Upload
          </Typography>
        </Button>

        {client.length !== 0 ? <Progress /> : null}
        
      </Container>
    </>
  );
}
export default App;