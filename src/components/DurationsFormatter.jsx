export default function DurationsFormatter(itemDuration) {
  const durations = {
    DAY: "Daily",
    WEEK: "Weekly",
    BIWEEKLY: "Bi-weekly",
    MONTHLY: "Monthly",
    BI_ANNUALLY: "Bi-annually",
    ANNUALLY: "Annually",
    QUARTERLY: "Quarterly",
    ONETIME: "One Time",
  };

  if (itemDuration === "dropdownMenu") {
    const durationDropdown = [];

    Object.entries(durations).forEach((entry) => {
      const [key, value] = entry;
      durationDropdown.push(
        <option key={key} value={key}>
          {value}
        </option>
      );
    });
    return durationDropdown;
  } else {
    return durations[itemDuration];
  }
}
