import { add, appSelector, remove } from "@/store/slices/appSlice";
import { useAppDispatch } from "@/store/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function Stock({}: Props) {
  const appReducer = useSelector(appSelector);
  const dispatch = useAppDispatch();
  return (
    <div>
      <nav>
        <Link href="/">[Root]</Link>
      </nav>
      <hr />
      <button onClick={() => dispatch(remove())}>-</button>
      <span>Count1: {appReducer.count1}</span>
      <button onClick={() => dispatch(add())}>+</button>
    </div>
  );
}
