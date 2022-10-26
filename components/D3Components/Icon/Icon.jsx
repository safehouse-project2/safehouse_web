import HomeIcon from '@mui/icons-material/Home';


export default function Icon({
    icon = <HomeIcon />,
    backgroundColor = "#272727",
    color = "#272727",
}) {
    return <div>
        {icon}
    </div>
}