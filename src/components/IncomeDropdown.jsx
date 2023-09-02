export default function IncomeDropdown(incomeItems) {
  const incomeDropdown = [];

  incomeItems.forEach((item) => {
    incomeDropdown.push(
      <option key={item.id} value={item.name}>
        {item.name}
      </option>
    );
  });
  return incomeDropdown;
}
