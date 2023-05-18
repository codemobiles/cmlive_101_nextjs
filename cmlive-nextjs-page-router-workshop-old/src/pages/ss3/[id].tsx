import { useRouter } from "next/router";
import React from "react";

type Props = {};

// http://localhost:3000/ss3/token1
export default function SS2Sub1({}: Props) {
  const router = useRouter();
  return <div>SS2Sub1: {JSON.stringify(router.query)}</div>;
}
