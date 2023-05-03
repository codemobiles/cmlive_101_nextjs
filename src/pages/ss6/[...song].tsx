import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {
  id: string;
};

export default function Song({ id }: Props) {
  const [data, setData] = useState<any>({});

  // Render at Client Side
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const url =
      "https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs";
    const result = await fetch(url);
    const data = await result.json();
    const filter = data.youtubes.filter((e: any) => {
      return e.id == id;
    });

    setData(filter[0]);
  }

  return (
    <div>
      <div>Id: {data.id}</div>
      <div>Title: {data.title}</div>
      <div>SubTitle: {data.subtitle}</div>
    </div>
  );
}

export const getServerSideProps = async (ctx: any) => {
  console.log(ctx.query.song[0]);
  return { props: { id: ctx.query.song[0] } };
};
