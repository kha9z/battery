import airballImg from "../assets/products/1ball.jpg";
import walkieImg from "../assets/products/2walkies.jpg";
import spikeballImg from "../assets/products/3spikeball_.jpg";
import pilImg from "../assets/products/4pil.jpg"
import minibasketImg from "../assets/products/5minibasket.jpg";
import gigaballImg from "../assets/products/6gigaball.jpg";




const products = [
  {
    id: 1,
    name: "Airball",
    price: 200,
    category: "Balls",
    image: airballImg
  },

  {
    id: 2,
    name: "Walkie Talkies",
    price: 499,
    category: "Electronics",
    image: walkieImg
  },

  {
    id: 3,
    name: "Spikeball",
    price: 800,
    category: "Balls",
    image: spikeballImg
  },

  {
    id: 4,
    name: "Air Dart",
    price: 200,
    category: "Darts",
    image: pilImg
  },

  {
    id: 5,
    name: "Mini Basketball",
    price: 200,
    category: "balls",
    image: minibasketImg
  },

  {
    id: 6,
    name: "Giga ball",
    price: 50,
    category: "balls",
    image: gigaballImg
  },
];

export default products;