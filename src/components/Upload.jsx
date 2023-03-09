import {useState} from "react";
import {
  Container,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Modal,
  Box,
} from '@mui/material';
import CloseIcon from '../assets/close.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs: "340px", md: "640px"},
  height: {xs: "240px", md: "424px"},
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '16px'
};

const Upload = ({open, handleClose}) => {
  const [age, setAge] = useState('');
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container maxWidth="sm">
            <Box
              component="img"
              sx={{
                position: "absolute",
                right: "32px",
                top: "24px",
                cursor: "pointer",
              }}
              onClick={handleClose}
              alt="Close icon"
              src={CloseIcon}
            />
           <Box>
            <Typography
                variant="h6"
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: {xs: '14px', md: '20px'},
                  lineHeight: {xs: '16px', md: '24px'},
                  textAlign: "center",
                  color: "#000000",
                  marginTop: "50px"
                }}
              >
                Complete Your Upload
              </Typography>
              <Typography 
                id="modal-modal-description" 
                sx={{
                  fontWeight: 400,
                  fontSize: {xs: '12px', md: '16px'},
                  lineHeight: {xs: '14px', md: '24px'},
                  textAlign: "center",
                  color: "#666666",
                  marginTop: "6px",
                }}
              >
                Fill in the details below to complete your upload
              </Typography>

              <Box>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    IconComponent={() => (
                      <ExpandMoreIcon 
                        style={{ 
                          transform: toggleIcon ? 'rotate(180deg)': '',
                          color: toggleIcon ? '#000000': '#B2B2B2',
                        }} 
                      />
                    )}
                    sx={{
                      marginTop: "20px",
                      background: "#F2F2F2",
                      height: {xs: "32px", md: "50px"},
                      fontWeight: 400,
                      fontSize: "16px",
                      fontFamily: "Montserrat",
                      lineHeight: "24px",
                      borderRadius: "8px",
                      padding: {xs: "8px 16px 8px 10px", md: "8px 24px 8px 24px"},
                      boxShadow: "none",
                      "& .MuiMenu-list": {
                        paddingTop: 0,
                        paddingBottom: 0,
                      },
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          border: 0,
                        },
                      "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          border: 0,
                        },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          "& .MuiMenu-list" : {
                            paddingTop: 0,
                            paddingBottom: 0,
                          },
                          bgcolor: '#ffffff',
                          filter: "drop-shadow(4px 4px 16px rgba(0, 0, 0, 0.1))",
                          borderRadius: "0px 0px 16px 16px;",
                          marginTop: "6px",
                          '& .MuiMenuItem-root': {
                            padding: 2,
                          },
                          '& .Mui-selected': {
                            borderRadius: "4px",
                            background: "transparent",
                            borderLeft: "4px solid #6B85AF",
                            borderRight: "4px solid #6B85AF",
                          },
                        },
                      },
                    }}
                    onOpen={() => setToggleIcon(true)}
                    onClose={() => setToggleIcon(false)}
                    value={age}
                    onChange={handleChange}
                    displayEmpty={true}
                    renderValue={value => value?.length ? Array.isArray(value) ? value.join(', ') : value : <Typography sx={{
                      fontWeight: 0,
                        fontSize: "16px",
                        fontFamily: "Montserrat",
                        lineHeight: "24px",
                        color: "#B2B2B2",
                    }}>Select note type</Typography>}
                  >
                    <MenuItem value="Progress note - 80 left">Progress note - 80 left</MenuItem>
                    <MenuItem value="Soap note - 80 left">Soap note - 80 left</MenuItem>
                    <MenuItem value="EMDR note- 80 left">EMDR note- 80 left</MenuItem>
                    <MenuItem value="Couples therapy note - 80 left">Couples therapy note - 80 left</MenuItem>
                    <MenuItem value="Family therapy note - 80 left">Family therapy note - 80 left</MenuItem>
                  </Select>

                  <TextField 
                    size="small"
                    sx={{
                      mt: {xs: '12px', md: '60px'},
                      backgroundColor:"#F2F2F2",
                      height: {xs: "15px", md: "30px"},
                      padding: {xs: "0px 10px 22px 10px", md: "6px 24px 16px 24px"},
                      borderRadius: "8px",
                      textAlign: "center",
                      "& fieldset": { border: 'none' },
                      input: {
                        fontWeight: 400,
                        fontSize: "16px",
                        fontFamily: "Montserrat",
                        lineHeight: "24px",
                      },
                      label: {color: "blue"},
                    }}
                    placeholder="Enter client name"
                  />

                
                </FormControl>
                <Button
                  disableRipple
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px 16px",
                    gap: "8px",
                    height: {xs: "32px", md: "40px"},
                    ml: "auto",
                    mr: "auto",
                    width: {xs: "150px", md: "180px"},
                    borderRadius: "8px",
                    marginTop: {xs: "14px", md: "80px"},
                    background: "linear-gradient(295.67deg, #DE0D6F 16.23%, #731054 83.77%)"
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: {xs: 700, md: 700},
                      fontSize: {xs: "14px", md: "16px"},
                      lineHeight: "24px",
                      letterSpacing: "1px",
                      textTransform: "capitalize",
                    }}
                  >
                    Finish Upload
                  </Typography>
                </Button>
              </Box>
           </Box>
          </Container>
        </Box>
      </Modal>
    </div>
  );
};

export default Upload;