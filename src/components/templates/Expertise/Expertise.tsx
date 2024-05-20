import * as React from "react";
import type { Image } from "@/types/image";
import StackGrid from "@/components/organisms/StackGrid/StackGrid";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import Title from "@/components/atoms/Title/Title";

interface Props {
  technologies: Image[];
}

export default function Expertise(props: Props) {
  const { technologies } = props;

  return (
    <Wrapper>
      <div id="expertise">
        <Title side="left">My Expertise</Title>
        <StackGrid technologies={technologies} />
      </div>
    </Wrapper>
  );
}
