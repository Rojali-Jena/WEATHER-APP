import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox ({info}) {
    const NORMAL_URL = "https://images.unsplash.com/photo-1667298295305-7ac615519b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhcHB5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI=";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAINY_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const WINDY_URL = "https://media.istockphoto.com/id/1322716422/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.webp?b=1&s=170667a&w=0&k=20&c=ZHEUdPb612bk3V2WxPAZNN0VfR7FUvjjweAxkTRkCec=";
    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity>80 ? RAINY_URL: info.temp>15?HOT_URL : COLD_URL}
                title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city} 
            {info.humidity>80 ? <ThunderstormIcon/>: info.temp>15?<WhatshotIcon/> : <AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
            <div>
              <p> Temperature={info.temp}&deg;C </p>
              <p> Humidity = {info.humidity} </p>
              <p> Min Temp = {info.tempMax}&deg;C </p>
              <p> Max Temp = {info.tempMin}&deg;C </p>
              <p> The weather can be described as <i>{info.weather}</i> & feels like {info.feelsLike}&deg;C </p>
            </div>
            </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
}