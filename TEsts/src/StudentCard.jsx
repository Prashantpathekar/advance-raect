// StudentCard.jsx
const StudentCard = ({ student }) => {
  const { name, course, duration } = student;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-80">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Student Details
      </h2>

      <p className="text-gray-600">
        <span className="font-semibold">Name:</span> {name}
      </p>

      <p className="text-gray-600">
        <span className="font-semibold">Course:</span> {course}
      </p>

      <p className="text-gray-600">
        <span className="font-semibold">Duration:</span> {duration}
      </p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        View Profile
      </button>
    </div>
  );
};

export default StudentCard;
