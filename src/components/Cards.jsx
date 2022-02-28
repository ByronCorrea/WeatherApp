import React from "react";
import Card from "./Card";
import styles from "./styles/Cards.module.css";

export default function Cards({ cities, onRemove }) {
  return (
    <div className={styles.cards}>
      {cities.map((city) => (
        <Card
          key={city.id}
          min={city.min}
          max={city.max}
          name={city.name}
          img={city.img}
          id={city.id}
          onClose={() => onRemove(city.id)}
        />
      ))}
    </div>
  );
}
