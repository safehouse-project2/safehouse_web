import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '../././Button/Button';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

export default function CardComp({
    src = './placeholder.png',
    title = 'Default Title',
    description = 'Default Description',
    btnText1 = 'Default Button Text',
    btnText2 = 'Default Button Text',
    btnText3 = 'Default Button Text',
    btnText4 = 'Default Button Text',
    onBtnClick = () => { },
}) {
    const r = useRouter();
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={src}
                alt="image"
                sx={{ objectFit: 'cover', width: '100%' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Stack>
                <Button sx={{ color: "#B38A58" }} size="small" onClick={onBtnClick}>{btnText1}</Button>
                <Button sx={{ color: "#B38A58" }} size="small" onClick={onBtnClick}>{btnText2}</Button>
                {/* <Button sx={{ color: "#B38A58" }} size="small" onClick={onBtnClick}>{btnText3}</Button>
                <Button sx={{ color: "#B38A58" }} size="small" onClick={onBtnClick}>{btnText4}</Button> */}
            </Stack>
        </Card>
    )
}