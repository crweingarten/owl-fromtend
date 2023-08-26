import MoneyItem from "./MoneyItem";

export default function MoneyColumnBox({ type, data }) {
  const moneyItems = data.map((item) => (
    <MoneyItem key={item.name} item={item} />
  ));

  return (
    <div className="money-column-box">
      <div className="money-column-type mx-2">{type}</div>
      <div className="mx-2">{moneyItems}</div>
    </div>
  );
}
