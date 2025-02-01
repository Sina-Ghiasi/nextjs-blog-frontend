import { getCategoryListApi } from "@/services/categoryService";
import Link from "next/link";

export default async function CategoryList() {
  const data = await getCategoryListApi();
  const categoryList = data?.categories;

  if (!categoryList)
    return (
      <div className="text-error text-md">
        خطا در بارگذاری دسته‌بندی‌ها پیش آمده است. لطفاً بعداً دوباره تلاش کنید.
      </div>
    );

  if (categoryList.length === 0) {
    return <div>دسته بندی یافت نشد.</div>;
  }

  return (
    <ul className="space-y-3">
      <li>
        <Link href={`/blog/`}>همه</Link>
      </li>
      {categoryList.map((category) => (
        <li key={category._id}>
          <Link href={`/blog/category/${category.slug}`}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
}
