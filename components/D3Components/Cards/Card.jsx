import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
    btn1Click = () => { },
    btn2Click = () => { },
    btn3Click = () => { },
}) {
    const r = useRouter();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                image={src}
                className="cardImgCont"
                alt="image"
                sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
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
                <div className='flex flex-col items-start px-5 pb-3 w-full'>
                    <Button sx={{ color: "#B38A58", textAlign: "left" }} size="small" onClick={btn1Click}>{btnText1}</Button>
                    <Button sx={{ color: "#B38A58", textAlign: "left" }} size="small" onClick={btn2Click}>{btnText2}</Button>
                    <Button sx={{ color: "#B38A58", textAlign: "left" }} size="small" onClick={btn3Click}>{btnText3}</Button>
                </div>
            </Stack>
        </Card>
    )
}