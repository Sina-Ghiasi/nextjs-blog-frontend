"use client";

import Button from "@/components/ui/Button";
import ButtonIcon from "@/components/ui/ButtonIcon";
import FileField from "@/components/ui/FileField";
import MiniSpinner from "@/components/ui/MiniSpinner";
import RHFSelect from "@/components/ui/RHFSelect";
import RHFTextField from "@/components/ui/RHFTextField";
import { useGetCategoryList } from "@/hooks/useCategory";
import { useCreatePost, useUpdatePost } from "@/hooks/usePost";
import { ApiCreatePostRequestType } from "@/types/global";
import { PostType } from "@/types/post";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    briefText: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات الزامی است"),
    text: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات الزامی است"),
    slug: yup.string().required("اسلاگ الزامی است"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("زمان مطالعه الزامی است")
      .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی الزامی است"),
    coverImage: yup
      .mixed<File>()
      .test("required", "تصویر الزامی است", function (value) {
        if (!this.options.context?.isEditSession && !value) {
          return false;
        }
        return true;
      }),
  })
  .required();

export default function PostForm({
  existingPost,
}: {
  existingPost?: PostType;
}) {
  const { categoryList } = useGetCategoryList();
  const [coverImageUrl, setCoverImageUrl] = useState(
    existingPost?.coverImageUrl
  );
  const { createPost, isCreatingPost } = useCreatePost();
  const { updatePost, isUpdatingPost } = useUpdatePost();
  const router = useRouter();

  const defaultValues = existingPost
    ? {
        title: existingPost.title,
        text: existingPost.text,
        slug: existingPost.slug,
        briefText: existingPost.briefText,
        readingTime: existingPost.readingTime,
        category: existingPost.category._id,
        coverImage: undefined,
      }
    : {
        title: "",
        text: "",
        slug: "",
        briefText: "",
        readingTime: 0,
        category: "",
        coverImage: undefined,
      };
  const isEditSession = Boolean(existingPost);
  const {
    control,
    register,
    formState: { errors },
    resetField,
    handleSubmit,
  } = useForm<ApiCreatePostRequestType>({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues,
    context: { isEditSession },
  });

  const onSubmit = (data: ApiCreatePostRequestType) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === "number") {
        formData.append(key, value.toString());
      } else if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, value);
      }
    });

    if (existingPost)
      updatePost(
        { id: existingPost._id, data: formData },
        {
          onSuccess: () => {
            router.push("/profile/posts");
          },
        }
      );
    else
      createPost(formData, {
        onSuccess: () => {
          router.push("/profile/posts");
        },
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        label="عنوان"
        name="title"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="متن کوتاه"
        name="briefText"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="متن"
        name="text"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="آدرس (slug)"
        name="slug"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="زمان مطالعه"
        name="readingTime"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        placeholder="انتخاب دسته بندی"
        register={register}
        options={categoryList}
        isRequired
        errors={errors}
      />
      <Controller
        name="coverImage"
        control={control}
        rules={{ required: "کاور پست الزامی است." }}
        render={({ field: { value, onChange, ...rest } }) => {
          const errorMessage = errors?.coverImage?.message?.toString();
          return (
            <FileField
              id="coverImage"
              label="کاور پست"
              fileName={value?.name}
              errorMessage={errorMessage || ""}
              onChange={(e) => {
                const file = e.target.files?.[0];
                onChange(file);
                if (file) {
                  setCoverImageUrl(URL.createObjectURL(file));
                }
                e.target.value = "";
              }}
              isRequired
              {...rest}
            />
          );
        }}
      />

      {coverImageUrl && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            className="object-cover object-center"
            src={coverImageUrl}
            alt="cover image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
          <ButtonIcon
            onClick={() => {
              setCoverImageUrl("");
              resetField("coverImage");
            }}
            variant="red"
            className="w-6 h-6 absolute top-2 left-2"
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}
      <Button
        disabled={isCreatingPost || isUpdatingPost}
        variant="primary"
        type="submit"
        className="w-full flex justify-center"
      >
        {isUpdatingPost || isCreatingPost ? (
          <MiniSpinner />
        ) : isEditSession ? (
          "بروزرسانی"
        ) : (
          "ایجاد"
        )}
      </Button>
    </form>
  );
}
