import React, {useState } from 'react';
import './tailwind.css'
const DataShow = () => {

//   let api = "http://localhost:3000/hotel";

//   useEffect(() => {
//     axios.get(api)
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log("error", err);
//       });
//   }, []);   //[] dependency array ye laga diya to ek hi baar chalega

 const [hotel, setHotel] = useState([
    {
      id: 1,
      name: "Sid",
      age: 25,
      city: "Bhopal",
      people: 2,
      total: 1500
    },
    {
      id: 2,
      name: "Pras",
      age: 22,
      city: "Multai",
      people: 3,
      total: 2250
    } ,
        {
      id: 3,
      name: "shre",
      age: 22,
      city: "Multai",
      people: 3,
      total: 2250
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    age: "",
    city: "",
    people: "",
    total: ""
  });

  const [editId, setEditId] = useState(null);

  // ================= HANDLERS =================
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitData = () => {
    if (editId) {
      // UPDATE
      setHotel(
        hotel.map(item =>
          item.id === editId ? { ...form, id: editId } : item
        )
      );
      setEditId(null);
    } else {
      // CREATE
      setHotel([...hotel, { ...form, id: Date.now() }]);
    }
    setForm({ name: "", age: "", city: "", people: "", total: "" });
  };

  const editRow = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const deleteRow = (id) => {
    setHotel(hotel.filter(item => item.id !== id));
  };

  return (
    <>
  <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col">

      {/* ===== HEADER ===== */}
      <header className="w-full bg-blue-50 text- py-4 shadow-lg">
        <h1 className="text-3xl font-bold text-center">
          🏨 Hotel Booking Management
        </h1>
      </header>

      {/* ===== MAIN ===== */}
      <main className="w-full flex-1 p-10">

        {/* ===== FORM CARD ===== */}
        <div className="bg-white rounded-xl shadow-xl p-6 mb-8 w-full">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            {editId ? "✏️ Update Booking" : "➕ Add Booking"}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <input name="name" value={form.name} onChange={handleChange}
              placeholder="Name" className="input" />
            <input name="age" value={form.age} onChange={handleChange}
              placeholder="Age" className="input" />
            <input name="city" value={form.city} onChange={handleChange}
              placeholder="City" className="input" />
            <input name="people" value={form.people} onChange={handleChange}
              placeholder="People" className="input" />
            <input name="total" value={form.total} onChange={handleChange}
              placeholder="Total" className="input" />
          </div>

          <button
            onClick={submitData}
            className={`mt-5 px-6 py-2 rounded-lg text-black ${
              editId ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
            }`}
          > 
            {editId ? "Update" : "Save"}
          </button>
        </div>

        {/* ===== TABLE CARD ===== */}
        <div className="bg-white rounded-xl shadow-xl p-6 w-full">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            📋 Booking List
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-400 border-collapse">
              <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <tr>
                  <th className="th">Name</th>
                  <th className="th">Age</th>
                  <th className="th">City</th>
                  <th className="th">People</th>
                  <th className="th">Total</th>
                  <th className="th">Action</th>
                </tr>
              </thead>

              <tbody>
                {hotel.map(item => (
                  <tr key={item.id} className="text-center hover:bg-gray-100">
                    <td className="td">{item.name}</td>
                    <td className="td">{item.age}</td>
                    <td className="td">{item.city}</td>
                    <td className="td">{item.people}</td>
                    <td className="td font-semibold text-green-600">₹{item.total}</td>
                    <td className="td space-x-1">
                      <button
                        onClick={() => editRow(item)}
                        className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteRow(item.id)}
                        className="bg-red-500 text-black px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </main>

      {/* ===== FOOTER ===== */}
      <footer className="w-full text-center py-4 text-gray-700 bg-gray-100 mt-auto">
        © 2025 Hotel CRUD App
      </footer>

    </div>
    </>
  );
};
export default DataShow;
