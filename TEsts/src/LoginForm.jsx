import { useForm } from "react-hook-form";
import { Link ,Outlet} from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-5">
          Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Email required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email",
              },
            })}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 
              ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-500"
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password required",
              minLength: {
                value: 6,
                message: "Min 6 characters",
              },
            })}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2
              ${
                errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-500"
              }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>

        {/* 🔗 Register Link */}
        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </Link>
          <Outlet/>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
