export default function DurationsFormatter(itemDuration, type) {
  const rateDurations = {
    DAILY: "Daily",
    WEEK: "Weekly",
    BIWEEKLY: "Bi-weekly",
    MONTHLY: "Monthly",
    QUARTERLY: "Quarterly",
    BI_ANNUALLY: "Bi-annually",
    ANNUALLY: "Annually",
    ONETIME: "One Time",
  };

  const compoundDurations = {
    DAILY: "Daily",
    MONTHLY: "Monthly",
    QUARTERLY: "Quarterly",
    ANNUALLY: "Annually",
  };

  const rateInput = type === "rate" ? rateDurations : compoundDurations;

  if (itemDuration === "dropdown" && type) {
    const durationDropdown = [];

    Object.entries(rateInput).forEach((entry) => {
      const [key, value] = entry;
      durationDropdown.push(
        <option key={key} value={key}>
          {value}
        </option>
      );
    });
    return durationDropdown;
  } else {
    return rateDurations[itemDuration];
  }
}
