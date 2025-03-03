import React, { useImperativeHandle, forwardRef, useState, useRef } from 'react';

// Define the props interface
// type Props = {
//   // Define any props you need here
// }

// // Define the type for the exposed methods
// export type ChildInputTestRef = {
//   clearInput: () => void;
//   setInputValue: (newValue: string) => void;
// }

const ChildInputTest = forwardRef((props, ref) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  // Use useImperativeHandle to expose methods
  useImperativeHandle(ref, () => ({
    clearInput: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
        setValue('');
      }
    },
    setInputValue: (newValue) => {
      if (inputRef.current) {
        inputRef.current.value = newValue;
        setValue(newValue);
      }
    }
  }));

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
});

// Wrap the component with React.memo for memoization
export const MemoizedChildInputTest = React.memo(ChildInputTest);
