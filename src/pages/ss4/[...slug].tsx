import { useRouter } from "next/router";
import React from "react";

type Props = {};

// http://localhost:3000/ss3/token1
export default function SS4Slug({}: Props) {
  const router = useRouter();
  return (
    <div>
      <div>
        SS4Slug: {router.query.slug && JSON.stringify(router.query.slug[0])}
      </div>
      <div>
        SS4Slug: {router.query.slug && JSON.stringify(router.query.slug[1])}
      </div>
      <div>
        SS4Slug: {router.query.slug && JSON.stringify(router.query.slug[2])}
      </div>
    </div>
  );
}
