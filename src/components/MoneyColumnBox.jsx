import MoneyItem from "./MoneyItem";

export default function MoneyColumnBox({
  type,
  data,
  handleEdit,
  handleDelete,
  isDelete,
  isEdit,
}) {
  const moneyItems = data.map((item) => (
    <MoneyItem
      key={item.id}
      item={item}
      isEdit={isEdit}
      isDelete={isDelete}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  ));

  return (
    <div className="money-column-box">
      <div className="money-column-type mx-2">{type}</div>
      <div className="mx-2">{moneyItems}</div>
    </div>
  );
}
