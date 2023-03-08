import {useState} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Container} from '@mui/material';
import CloseIcon from '../assets/close.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
                    height: "40px",
                    borderRadius: "8px",
                    padding: "8px 24px 8px 24px",
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
                >
                  <MenuItem value="Progress note - 80 left">Progress note - 80 left</MenuItem>
                  <MenuItem value="Soap note - 80 left">Soap note - 80 left</MenuItem>
                  <MenuItem value="EMDR note- 80 left">EMDR note- 80 left</MenuItem>
                  <MenuItem value="Couples therapy note - 80 left">Couples therapy note - 80 left</MenuItem>
                  <MenuItem value="Family therapy note - 80 left">Family therapy note - 80 left</MenuItem>
                </Select>
              </FormControl>
              </Box>
           </Box>
          </Container>
        </Box>
      </Modal>
    </div>
  );
};

export default Upload;