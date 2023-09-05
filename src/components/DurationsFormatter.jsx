export default function DurationsFormatter(itemDuration, type) {
  // THIS FUNCTION TURNS THE RAW INFO FOR "RATE" AND "COMPOUND RATE" INTO
  // THE FORMATTED WORDS A USER SEES

  const rateDurations = {
    DAY: "Daily",
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

    // THIS IS THE DROPDOWN FOR THE RATE CHOICE ON THE FORM
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
