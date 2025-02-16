import { getCategoryListApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export function useGetCategoryList() {
  const { data, isLoading } = useQuery({
    queryKey: ["categoryList"],
    queryFn: getCategoryListApi,
  });

  const { categories: rawCategories = [] } = data || {};

  const categoryList = rawCategories.map((category) => ({
    label: category.title,
    value: category._id,
  }));

  return { isLoading, categoryList };
}
