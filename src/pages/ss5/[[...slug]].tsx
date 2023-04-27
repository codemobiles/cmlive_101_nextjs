import { useRouter } from "next/router";
import React from "react";

type Props = {};

// http://localhost:3000/ss4/1/2/3
export default function SS5Slug({}: Props) {
  const router = useRouter();
  return (
    <div>
      <div>SS5Slug: {JSON.stringify(router.query.slug?.[0])}</div>
      <div>SS5Slug: {JSON.stringify(router.query.slug?.[1])}</div>
      <div>SS5Slug: {JSON.stringify(router.query.slug?.[2])}</div>
    </div>
  );
}
