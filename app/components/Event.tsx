"use client";

import React, { FC } from "react";
import Link from "next/link";
import { EventType } from "../types";
import Stamps from "./Stamps";

// event.reactionsを渡す
const Event: FC<EventType> = ({ name, tags, reactions }) => {
  console.log(reactions);
  return (
    <div className="card bg-base-100 text-primary-content mx-4 my-4 shadow-xl">
      <Link href="/detail">
        <div className="card-body">
          <div className="flex flex-wrap space-x-2">
            {tags?.map((t) => (
              <div key={t.name} className={`badge badge-outline bg-${t.color}`}>
                {t.name}
              </div>
            ))}
          </div>
          <span className="card-title text-4xl text-black">{name}</span>
        </div>
      </Link>
      <Stamps reactions={reactions} />
    </div>
  );
};

export default Event;
