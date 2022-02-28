import styles from "./styles/CardTemp.module.css";

export default function CardTemp({ label, value }) {
  return (
    <div className={styles.cardTemp}>
      <label>{label}</label>
      <span>{value}°</span>
    </div>
  );
}
