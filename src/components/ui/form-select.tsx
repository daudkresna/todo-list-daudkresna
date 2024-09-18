import React from "react";

const FormSelect = ({
  name,
  selectList,
}: {
  name: string;
  selectList: any[];
}) => {
  return (
    <select name="icon" id="icon">
      {selectList.map((select) => (
        <option key={select.id} value={select.value}>
          {select.title}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
