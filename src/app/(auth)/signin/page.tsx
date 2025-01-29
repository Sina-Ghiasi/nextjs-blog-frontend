"use client";
import Button from "@/components/ui/Button";
import RHFTextField from "@/components/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { ApiSigninRequestType } from "@/types/global";
import MiniSpinner from "@/components/ui/MiniSpinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const formValidationSchema = yup.object({
  email: yup.string().email("ایمیل نامعتبر است.").required("ایمیل الزامی است."),
  password: yup.string().required("رمز عبور الزامی است."),
});

export default function SigninPage() {
  const router = useRouter();
  const { signin, isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/profile");
    }
  }, [isAuthenticated, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApiSigninRequestType>({
    resolver: yupResolver(formValidationSchema),
    mode: "onTouched",
  });

  const onSubmit = async (values: ApiSigninRequestType) => {
    signin(values);
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ورود
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            ورود
          </Button>
        )}
      </form>
      <Link href="/signup" className="text-secondary-500 mt-6 text-center">
        ثبت نام
      </Link>
    </div>
  );
}
