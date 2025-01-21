import Image from "next/image";

export default function Avatar({
  src,
  size = 24,
  alt = "avatar",
}: {
  src: string;
  size?: number;
  alt?: string;
}) {
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={size}
      height={size}
      alt={alt}
      className="rounded-full ring-1 ring-secondary-300 ml-2"
    />
  );
}
