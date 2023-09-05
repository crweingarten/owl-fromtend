export default function Graph() {
  return (
    <div>
      <div className="graph-box"></div>
      <div>
        <select className="axis-dropdown">
          <option value={""}>Select Axis:</option>
          <option value={"axis1"}>Axis 1</option>
          <option value={"axis2"}>Axis 2</option>
          <option value={"axis3"}>Axis 3</option>
        </select>
      </div>
    </div>
  );
}
