import * as React from "react";
import type { Stats as StatsType } from "@/types/stats";
import Stats from "@/components/organisms/Stats/Stats";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import Title from "@/components/atoms/Title/Title";

interface Props {
  stats: StatsType[];
}

export default function Statistics(props: Props) {
  const { stats } = props;

  return (
    <Wrapper>
      <div id="stats">
        <Title side="right">Statistics</Title>
        <Stats stats={stats} />
      </div>
    </Wrapper>
  );
}
