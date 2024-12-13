"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Container from "@/components/Container";
import LoadingOverlay from "@/components/LoadingOverlay";
import Logo from "@/components/Logo";
import { AppDispatch, AppState } from "@/store";
import { loginThunk, registerThunk } from "@/store/thunks/userThunks";
import { loginSchema, registrationSchema } from "@/validation/schemas";
import Title from "@/components/Title";
import LinkButton from "@/components/LinkButton";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import InputPassword from "@/components/InputPassword";

export default function Auth() {
  const [authType, setAuthType] = useState<"login" | "register">("login");
  const { userData, loading } = useSelector((state: AppState) => state.user);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!!userData?.token) {
      router.replace("/");
    }
  }, [userData]);

  const formikRegister = useFormik<RegisterPayload>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registrationSchema,
    onSubmit: (values) => dispatch(registerThunk(values)),
  });

  const formikLogin = useFormik<LoginPayload>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => dispatch(loginThunk(values)),
  });

  return (
    <div className="flex grow flex-col items-center justify-center p-12 md:px-0 md:py-4">
      <Container className="flex flex-col items-center relative w-[500px] md:w-3/4 sm:w-full sm:rounded-none">
        <Logo className="mb-9" />
        {authType === "register" ? (
          <form
            onSubmit={formikRegister.handleSubmit}
            className="flex flex-col gap-8 w-full"
          >
            <Title className="-mb-4">Register</Title>
            <div className="flex flex-col gap-6">
              <InputText
                id="name"
                name="name"
                label="name"
                placeholder="Enter your name"
                onChange={formikRegister.handleChange}
                onBlur={formikRegister.handleBlur}
                value={formikRegister.values.name}
                error={formikRegister.errors.name}
              />
              <InputText
                id="email"
                name="email"
                label="email"
                placeholder="Enter your email"
                onChange={formikRegister.handleChange}
                onBlur={formikRegister.handleBlur}
                value={formikRegister.values.email}
                error={formikRegister.errors.email}
              />

              <InputPassword
                id="password"
                name="password"
                label="password"
                placeholder="Enter your password"
                onChange={formikRegister.handleChange}
                onBlur={formikRegister.handleBlur}
                value={formikRegister.values.password}
                error={formikRegister.errors.password}
              />
            </div>
            <Button className="font-medium" fullwidth type="submit">
              Register
            </Button>
            <div className="self-center text-sm">
              <LinkButton
                onClick={(e) => {
                  e.preventDefault();
                  setAuthType("login");
                }}
              >
                Login
              </LinkButton>
            </div>
          </form>
        ) : (
          <form
            onSubmit={formikLogin.handleSubmit}
            className="flex flex-col gap-8 w-full"
          >
            <Title className="-mb-4">Login</Title>
            <div className="flex flex-col gap-6">
              <InputText
                id="email"
                name="email"
                label="email"
                placeholder="Enter your email"
                onChange={formikLogin.handleChange}
                onBlur={formikLogin.handleBlur}
                value={formikLogin.values.email}
                error={formikLogin.errors.email}
              />

              <InputPassword
                id="password"
                name="password"
                label="password"
                placeholder="Enter your password"
                onChange={formikLogin.handleChange}
                onBlur={formikLogin.handleBlur}
                value={formikLogin.values.password}
                error={formikLogin.errors.password}
              />
            </div>
            <Button className="font-medium" fullwidth type="submit">
              Login
            </Button>
            <div className="self-center text-sm">
              <LinkButton
                onClick={(e) => {
                  e.preventDefault();
                  setAuthType("register");
                }}
              >
                Register
              </LinkButton>
            </div>
          </form>
        )}
        {loading && <LoadingOverlay />}
      </Container>
    </div>
  );
}
