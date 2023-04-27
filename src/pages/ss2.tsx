import { useRouter } from "next/router";
import React from "react";

type Props = {};

// http://localhost:3000/ss2?token1=1234&token2=555
export default function SS2({}: Props) {
  const router = useRouter();

  return <div>SS2 String Query: {JSON.stringify(router.query)}</div>;
}
