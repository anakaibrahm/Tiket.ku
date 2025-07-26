import { Button, FormField, InputField } from "../../../components";
import { supabase } from "../../../lib/supabase";
import { useAuth } from "../hook/useAuth";
import { AuthSchema } from "../schema/authSchemas";

interface AuthContainerProps {
  authType: "login" | "signup";
  onClose: () => void;
  onAuthTypeChange: (type: "login" | "signup") => void;
}

const AuthContainer = ({
  authType,
  onClose,
  onAuthTypeChange,
}: AuthContainerProps) => {
  const { register, formState, handleSubmit } = useAuth();

  const handleLogin = handleSubmit(async (values: AuthSchema) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    if (error) {
      console.log(error.message);
    }
  });

  const handleSignup = handleSubmit(async (values: AuthSchema) => {
    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });
    if (error) {
      console.log(error.message);
    }
  });

  return (
    <FormField
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex-col p-6 min-w-[350px] space-y-4"
      onSubmit={authType === "login" ? handleLogin : handleSignup}
    >
      <div className="flex justify-between items-center">
        <h1>{authType === "login" ? "LOGIN" : "SIGN UP"}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-5 h-5 cursor-pointer"
          onClick={onClose}
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>

      <InputField
        labelName="Email:"
        register={register("email")}
        errorMessage={formState.errors.email?.message}
      />
      <InputField
        labelName="Password:"
        register={register("password")}
        errorMessage={formState.errors.password?.message}
      />
      {authType === "login" && (
        <span className="block text-sm text-right cursor-pointer hover:underline font-medium text-blue-500 hover:text-blue-600 -mt-5">
          forgot password?
        </span>
      )}

      <Button
        label={authType === "login" ? "Login" : "Sign Up"}
        type="submit"
        className="p-2.5 text-white bg-blue-500 rounded-xl font-medium mb-2 hover:bg-blue-600"
        onClick={authType === "login" ? handleLogin : handleSignup}
      />

      {authType === "login" ? (
        <span className="text-sm text-center cursor-pointer">
          Don't have an account?{" "}
          <span
            className="text-blue-500 font-bold hover:underline"
            onClick={() => onAuthTypeChange("signup")}
          >
            Signup
          </span>
        </span>
      ) : (
        <span className="text-sm text-center cursor-pointer">
          Already have an account?{" "}
          <span
            className="text-blue-500 font-bold hover:underline"
            onClick={() => onAuthTypeChange("login")}
          >
            Login
          </span>
        </span>
      )}
    </FormField>
  );
};

export default AuthContainer;
