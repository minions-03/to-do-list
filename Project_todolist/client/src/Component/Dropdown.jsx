import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue); // Navigate to the selected route
    }
  };

  return (
    <div>
      <label htmlFor="options"></label>
      <select id="options" className="bg-gray-900 p-2 w-20 rounded" onChange={handleSelectChange}>
        <option value="">Task</option>
        <option value="/YearlyTarget">Yearly Task</option>
        <option value="/MonthlyTarget">Monthly Task</option>
        <option value="/DailyTarget">Daily Task</option>
      </select>
    </div>
  );
};

export default Dropdown;
