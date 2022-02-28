import React from "react";
import CardTemp from "./CardTemp";
import PropTypes from "prop-types";
import WeatherIcon from "./WeatherIcon";
import styles from "./styles/Card.module.css";
import { FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Card({ max, min, name, img, onClose, id }) {
  function handleOnClose() {
    if (typeof onClose === "function") onClose();
  }
  return (
    <div className={styles.card}>
      <button className={styles.closeButton} onClick={handleOnClose}>
        <FaRegWindowClose />
      </button>
      <Link className={styles.cityName} to={`/ciudad/${id}`}>
        <span>{name}</span>
      </Link>
      <CardTemp label="Min" value={min} />
      <CardTemp label="Max" value={max} />
      <WeatherIcon icon={img} />
    </div>
  );
}

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
};
