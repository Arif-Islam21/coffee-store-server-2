import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { GiCoffeeBeans, GiCoffeeCup } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import { CiCoffeeCup } from "react-icons/ci";

const HeroBase = () => {
  return (
    <div className="bg-[#ECEAE3]">
      <div className="px-[5vw] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2 bg-[#ECEAE3] py-4">
        <Card
          className="px-6 py-3"
          style={{ background: "#ECEAE3", border: "none", boxShadow: "none" }}
          sx={{ maxWidth: 345 }}
        >
          <CardActionArea className="bg-[#ECEAE3]">
            <GiCoffeeCup className="text-6xl text-[#97948a] bg-transparent" />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span className="font-rancho text-[#331A15]">
                  Awesome Aroma
                </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="font-raleway text-[#1B1A1A]">
                  You will definitely be a fan of the design & aroma of your
                  coffee
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="px-6 py-3"
          style={{ background: "#ECEAE3", border: "none", boxShadow: "none" }}
          sx={{ maxWidth: 345 }}
        >
          <CardActionArea className="bg-[#ECEAE3]">
            <SlBadge className="text-6xl text-[#97948a] bg-transparent" />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span className="font-rancho text-[#331A15]">
                  Awesome Aroma
                </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="font-raleway text-[#1B1A1A]">
                  You will definitely be a fan of the design & aroma of your
                  coffee
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="px-6 py-3"
          style={{ background: "#ECEAE3", border: "none", boxShadow: "none" }}
          sx={{ maxWidth: 345 }}
        >
          <CardActionArea className="bg-[#ECEAE3]">
            <GiCoffeeBeans className="text-6xl text-[#97948a] bg-transparent" />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span className="font-rancho text-[#331A15]">
                  Awesome Aroma
                </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="font-raleway text-[#1B1A1A]">
                  You will definitely be a fan of the design & aroma of your
                  coffee
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="px-6 py-3"
          style={{ background: "#ECEAE3", border: "none", boxShadow: "none" }}
          sx={{ maxWidth: 345 }}
        >
          <CardActionArea className="bg-[#ECEAE3]">
            <CiCoffeeCup className="text-6xl text-[#97948a] bg-transparent" />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span className="font-rancho text-[#331A15]">
                  Awesome Aroma
                </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="font-raleway text-[#1B1A1A]">
                  You will definitely be a fan of the design & aroma of your
                  coffee
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default HeroBase;
