"use client";

import Button from "@/components/ui/Button";
import RHFTextField from "@/components/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import MiniSpinner from "@/components/ui/MiniSpinner";
import { ApiSignupRequestType } from "@/types/global";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const formValidationSchema = yup.object({
  name: yup
    .string()
    .min(5, "نام و نام خانوادگی نامعتبر است.")
    .max(30, "نام و نام خانوادگی نامعتبر است.")
    .required("نام و نام خانوادگی الزامی است."),
  email: yup.string().email("ایمیل نامعتبر است.").required("ایمیل الزامی است."),
  password: yup
    .string()
    .min(8, "رمز عبور کاراکتر کافی ندارد و ضعیف است.")
    .required("رمز عبور الزامی است."),
});

export default function SignupPage() {
  const router = useRouter();
  const { signup, isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/profile");
    }
  }, [isAuthenticated, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApiSignupRequestType>({
    resolver: yupResolver(formValidationSchema),
    mode: "onTouched",
  });

  const onSubmit = async (values: ApiSignupRequestType) => {
    signup(values);
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ثبت نام
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-center">
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          errors={errors}
          isRequired={true}
        />
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          errors={errors}
          dir="ltr"
          isRequired={true}
        />

        <RHFTextField
          label="رمز عبور"
          name="password"
          register={register}
          errors={errors}
          dir="ltr"
          type="password"
          isRequired={true}
        />
        {isLoading ? (
          <div className="flex justify-center">
            <MiniSpinner />
          </div>
        ) : (
          <Button type="submit" variant="primary" className="w-full">
            ثبت نام
          </Button>
        )}
      </form>
      <Link href="/signin" className="text-secondary-500 mt-6 text-center">
        ورود
      </Link>
    </div>
  );
}
