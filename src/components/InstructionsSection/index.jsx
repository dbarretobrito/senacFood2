import React, { useState } from "react";
import {
  Section,
  Title,
  List,
  Item,
  Label,
  HiddenCheckbox,
  Circle,
  StepNum,
  Text,
  Image,
} from "./styles";

const DEFAULT_STEPS = [
  {
    step: 1,
    description: "Refogue os legumes em uma frigideira grande até ficarem levemente macios.",
    image:
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1600&q=80",
  },
  {
    step: 2,
    description: "Acrescente o arroz cozido e misture bem com os ovos picados.",
  },
  {
    step: 3,
    description: "Regue com o molho, mexa por alguns minutos e sirva quente.",
  },
];

export default function InstructionsSection({ steps = DEFAULT_STEPS }) {
  const [checked, setChecked] = useState(() => new Set());

  const toggle = (idx) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  return (
    <Section aria-labelledby="instructions-title">
      <Title id="instructions-title">Instruções</Title>

      <List role="list">
        {steps.map((step, idx) => {
          const isChecked = checked.has(idx);
          const inputId = `step-${idx}`;
          return (
            <Item key={idx} role="listitem">
              <Label htmlFor={inputId}>
                <HiddenCheckbox
                  id={inputId}
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(idx)}
                />
                <Circle aria-hidden="true" data-checked={isChecked} />
                <StepNum>{step.step}</StepNum>
                <Text $checked={isChecked}>{step.description}</Text>
              </Label>

              {step.image && <Image src={step.image} alt={`Etapa ${step.step}`} loading="lazy" />}
            </Item>
          );
        })}
      </List>
    </Section>
  );
}
