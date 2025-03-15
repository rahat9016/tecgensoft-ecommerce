import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function page({ params }: Props) {
  const { slug } = params;

  return (
    <div>
      <div>i am slug value {slug}</div>
    </div>
  );
}
