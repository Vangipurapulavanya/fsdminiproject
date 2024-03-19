import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css"

export default function InfoBox({ info }) {
  const INIT_URL =
    " https://images.unsplash.com/photo-1580687774725-4e23db308efc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let HOT_URL =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let COLD_URL =
    "https://plus.unsplash.com/premium_photo-1670347626594-d60b7c3e2ba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww ";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1584269655525-c2ec535de1d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  
    return (
    <div className="Info">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>

          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temparature = {info.temp}&deg;K</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;K</p>
            <p>Max Temp = {info.tempMax}&deg;K</p>
            <p>
              The weather can be described as {info.weather} and feels like{" "}
              {info.feelsLike}&deg;K{" "}
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
