import React, { useRef } from 'react';
import { MemoizedChildInputTest } from './ChildInputTest';

const ParentComponentTest = () => {
  const childRef = useRef(null);

  const handleClear = () => {
    if (childRef.current) {
      childRef.current.clearInput();
    }
  };

  const handleChangeValue = () => {
    if (childRef.current) {
      childRef.current.setInputValue('New Value');
    }
  };

  return (
    <div>
      <MemoizedChildInputTest ref={childRef} />
      <button onClick={handleClear}>Clear Input</button>
      <button onClick={handleChangeValue}>Change Input Value</button>
    </div>
  );
};

export default ParentComponentTest;
