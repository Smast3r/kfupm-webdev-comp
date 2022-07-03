import React from 'react';
const AddCourseButton = ({ children, buttonRef, showModal }:any) => {
  return (
    <button
      className="w-48 bg-cyan-600 h-10 rounded"
      ref={buttonRef}
      onClick={showModal}
    >
      {children}
    </button>
  );
};
export default AddCourseButton;
