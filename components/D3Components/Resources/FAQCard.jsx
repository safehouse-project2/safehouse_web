import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function FAQCard({ txt1 = "Default Text", txt2 = "Default Text" }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div className="flex faq">
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={handleClickAway}
      >
        <Box onClick={handleClick} sx={{
          position: 'relative',
          display: 'flex',
          bgcolor: '#B38A58',
          color: '#F5F5F5',
          p: 2,
          cursor: 'pointer',
          width: '600px',
          height: '60px',
          fontSize: '18px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#5581AA',
          },
        }}>
          {txt1}
          {open ? (
            <Box sx={{
              position: 'absolute',
              display: 'flex',
              top: 60,
              right: 0,
              left: 0,
              zIndex: 1,
              p: 2,
              color: 'black',
              bgcolor: '#D7D7D7',
              fontSize: '15px',
              fontWeight: '400',
            }}>
              {txt2}
            </Box>
          ) : null}
        </Box>
      </ClickAwayListener>
    </div>
  );

}
