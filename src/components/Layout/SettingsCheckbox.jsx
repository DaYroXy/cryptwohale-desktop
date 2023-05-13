import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faC, faCheck } from '@fortawesome/free-solid-svg-icons'
function SettingsCheckbox({ id, handleInputChange, checked }) {
  const [isChecked, setChecked] = useState(checked);

  const onChange = (e) => {
    setChecked(!isChecked);
      handleInputChange({
        id: id,
        newValue: !isChecked
    });
  };

  return (
    <label className="relative h-[25px]">
      {isChecked && (
        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FontAwesomeIcon icon={faCheck} />
        </div>
      )}
      <input
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
        className="w-[25px] border border-[#AAAAAA]/70 rounded-md bg-[#393939] appearance-none h-[25px] checked:border-[#A5BFF5] checked:bg-[#1762FF]"
      />
    </label>
  );
}

export default SettingsCheckbox