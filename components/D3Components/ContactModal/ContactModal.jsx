import { useState } from "react"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Button from '../Button/Button'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    fontColor: '#272727',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
};

export default function ContactModal({
    ownerTxt = "Host at",
    phNum = "xxx-xxx-xxxx",
    emailTxt = "xxx@xxx.com",
}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div>
                {/* <Button onBtnClick={handleOpen}>Open modal</Button> */}
                <Button
                    txt="Contact Host"
                    fontSize="16px"
                    endIcon={<ArrowForwardIcon />}
                    onBtnClick={handleOpen}>Open modal</Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Contact <span>{ownerTxt}</span>
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                Phone Number: <a href={`tel:${phNum}`} className="text-blue-500">{phNum}</a>
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                Email: <a href={`mailto:${emailTxt}`} className="text-blue-500">{emailTxt}</a>
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </>
    )
}
