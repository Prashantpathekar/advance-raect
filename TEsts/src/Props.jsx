import React from 'react'
import StudentCard from "./StudentCard";
const Props = () => {
      const student = {
    name: "Amit",
    course: "React",
    duration: "3 Months",
  };


return(
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <StudentCard student={student} />
    </div>
    </>
)
};

export default Props
