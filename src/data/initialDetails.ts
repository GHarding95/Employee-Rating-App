export interface Person {
  id: number;
  imgPath: string;
  name: string;
  email: string;
  address: string;
  rating: number;
}

const initialDetails: Person[] = [
  {
    id: 1,
    imgPath: "/assets/img/1.png",
    name: "Jake Smith",
    email: "jake@smith.com",
    address: "New Delhi, India",
    rating: 0,
  },
  {
    id: 2,
    imgPath: "/assets/img/2.png",
    name: "Mary Rosamund",
    email: "mary@rosamund.com",
    address: "Tbilisi, India",
    rating: 0,
  },
  {
    id: 3,
    imgPath: "/assets/img/3.png",
    name: "Emma Williams",
    email: "emma@williams.com",
    address: "Baker Street, India",
    rating: 0,
  },
  {
    id: 4,
    imgPath: "/assets/img/4.png",
    name: "John Holmes",
    email: "john@holmes.com",
    address: "Mumbai, India",
    rating: 0,
  },
  {
    id: 5,
    imgPath: "/assets/img/5.png",
    name: "Sherlock Watson",
    email: "sherlock@watson.com",
    address: "Baker Street, India",
    rating: 0,
  },
];

export default initialDetails;