import * as React from "react";
import Slider from "@/components/organisms/Slider/Slider";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import Title from "@/components/atoms/Title/Title";
import { SizedImage } from "@/types/image";

interface Props {
  clients: SizedImage[];
}

export default function Clients(props: Props) {
  const { clients } = props;

  return (
    <Wrapper>
      <div id="clients">
        <Title side="bottom">Clients</Title>
        <Slider clients={clients} />
      </div>
    </Wrapper>
  );
}
