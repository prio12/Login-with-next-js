
import Link from "next/link";
import { useForm } from "react-hook-form";

const login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleSignUp = (data) => {
        console.log(data);
        
      };

    return (
        <div className="h-[800px] shadow-2xl flex justify-center items-center">
        <div className="shadow-2xl w-96 p-7">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-extrabold">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-extrabold">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "password must be 8 characters or more",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <input className="btn mt-6 btn-info w-full" type="submit" />
          </form>
          <p className="my-4">
            New here?{" "}
            <Link className="text-info" href="/signUp">
              <span className='font-extrabold'>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    );
};

export default login;