import React from "react"
import Travel from "./Travel"
const travels = [
    {
        destination:"Madrid",
        country:"Espagne",
        image:"https://cdn.logitravel.fr/wsimgresize/resize/Crop/720/325/cdn.logitravel.fr/contenidos/fotos/CIUDADES_770_395/4522.jpg",
        distance: "Des kms"
    },
    {
        destination:"Porto",
        country:"Portugal",
        image:"https://cdn.newsapi.com.au/image/v1/3e8eb1be0889f2666f003f21d55ffad5?width=1024",
        distance: "Des kms"
    },
    {
        destination:"Luxembourg",
        country:"Luxembourg",
        image:"https://www.vontobel.com/globalassets/pictures/locations/luxembourg.jpg",
        distance: "Des kms"
    },
    {
        destination:"Bruxelles",
        country:"Belgique",
        image:"http://admin.traxmag.com//uploads/images/croped600x1200/2017/09/bruxelles-1_59b2b4564b8e4.jpg",
        distance: "Des kms"
    },
    {
        destination:"Rome",
        country:"Italie",
        image:"https://media.routard.com/image/77/6/rome.1475776.142.jpg",
        distance: "Des kms"
    },
]

const Travels = () => (
    <div>
      {travels.map(travel => (
        <Travel {...travel} />
      ))}
    </div>
  );
  
  export default Travels;