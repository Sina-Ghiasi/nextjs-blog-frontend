import PostForm from "@/components/dashboard/post/PostForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function page() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "پست جدید",
            href: "/profile/posts/new",
            active: true,
          },
        ]}
      />

      <PostForm />
    </>
  );
}
