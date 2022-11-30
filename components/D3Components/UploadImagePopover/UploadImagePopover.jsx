import * as React from 'react';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import EditIcon from '@mui/icons-material/Edit';

export default function UploadImagePopover({ onImageChange }) {


    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <label htmlFor='myImage'>
                        <EditIcon
                            // {...bindTrigger(popupState)} 
                            className="z-99 bg-blue-300 p-2 rounded-lg drop-shadow-lg" sx={{
                                fontSize: "40px",
                            }} />
                    </label>
                    {/* <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    > */}
                    <input className='' type="file" name='myImage' id='myImage' style={{ width: 0, height: 0 }} onChange={onImageChange} />
                    {/* </Popover> */}
                </div>
            )
            }
        </PopupState >
    );
}