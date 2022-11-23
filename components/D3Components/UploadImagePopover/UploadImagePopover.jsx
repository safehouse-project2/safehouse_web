import * as React from 'react';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import EditIcon from '@mui/icons-material/Edit';

export default function UploadImagePopover({
    onImageChange = () => {  
    }, 
  
}) {
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <EditIcon {...bindTrigger(popupState)} className="z-99 bg-blue-300 p-2 rounded-lg drop-shadow-lg" sx={{
                        fontSize: "40px",
                    }} />
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <input className='px-3 py-4' type="file" name='myImage' onClick={popupState.close} onChange={onImageChange} />
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}