import Link from "next/link";
import React from "react";

type Props = {
  data1: number[];
  youtubes: any[];
};

export default function SS6Index({ data1, youtubes }: Props) {
  return (
    <div>
      <div>SS6Index</div>
      <div className="text-red-500">{JSON.stringify(data1)}</div>
      <ul>
        {youtubes.map(({ id, title }) => (
          <li key={id}>
            <Link href="ss6/1">
              <span className="text-yellow-400">{id}</span> | {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps = async () => {
  // https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs
  const url =
    "https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs";
  const result = await fetch(url);
  const data = await result.json();

  return {
    props: {
      data1: [1, 2, 3, 4],
      youtubes: data.youtubes,
    },
  };
};
