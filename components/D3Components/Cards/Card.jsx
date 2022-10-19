import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

export default function CardComp({
    src = './placeholder.png',
    title = 'Default Title',
    description = 'Default Description',
    btnText = 'Default Button Text',
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
            <CardActions>
                <Button size="small" onClick={onBtnClick}>{btnText}</Button>
            </CardActions>
        </Card>
    )
}