import { SignUp } from "@clerk/nextjs";
export const metadata = {
  title: "Register",
};
export default function RegisterPage() {
  return <SignUp afterSignUpUrl="/" />;
}
