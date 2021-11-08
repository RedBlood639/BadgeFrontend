import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Explore",
    path: "/explore",
    icon: <FontAwesomeIcon icon={faCompass} />,
  },
  {
    label: "Near Me",
    path: "/nearme",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
  },
  {
    label: "My Cart",
    path: "/mycart",
    icon: <FontAwesomeIcon icon={faShoppingCart} />,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
];

export default navButtons;
