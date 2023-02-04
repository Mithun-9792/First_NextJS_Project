import { useRouter } from "next/router";

export default function blogNo() {
  const router = useRouter();
  const blogno = router.query.blogNo;
  return (
    <>
      <h1>This is the content of blog {blogno}</h1>
    </>
  );
}
