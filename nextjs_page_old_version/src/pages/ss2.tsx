import { useRouter } from "next/router";
import React from "react";

type Props = {};

// http://localhost:3000/ss2?token1=1234&token2=555
export default function SS2({}: Props) {
  const router = useRouter();

  return (
    <div>
      <div>SS2 String Query: {JSON.stringify(router.query)}</div>
      <div>SS2 String Token1: {JSON.stringify(router.query.token1)}</div>
      <div>SS2 String Token2: {JSON.stringify(router.query.token2)}</div>
    </div>
  );
}
