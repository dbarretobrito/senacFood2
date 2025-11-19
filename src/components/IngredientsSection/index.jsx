import React, { useState } from "react";
import {
  Section,
  Title,
  List,
  Item,
  Label,
  HiddenCheckbox,
  Circle,
  Text,
} from "./styles";

const DEFAULT_INGREDIENTS = [
  "2 xícaras de arroz cozido",
  "2 ovos cozidos picados",
  "1/2 xícara de cenoura em cubos",
  "1/2 xícara de ervilhas",
];

export default function IngredientsSection({ items = DEFAULT_INGREDIENTS }) {
  const [checked, setChecked] = useState(() => new Set());

  const toggle = (idx) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  return (
    <Section aria-labelledby="ingredients-title">
      <Title id="ingredients-title">Ingredientes</Title>

      <List role="list">
        {items.map((text, idx) => {
          const isChecked = checked.has(idx);
          const inputId = `ing-${idx}`;

          return (
            <Item key={idx} role="listitem">
              <Label htmlFor={inputId}>
                <HiddenCheckbox
                  id={inputId}
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(idx)}
                  aria-checked={isChecked}
                />
                <Circle aria-hidden="true" data-checked={isChecked} />
                <Text $checked={isChecked}>{text}</Text>
              </Label>
            </Item>
          );
        })}
      </List>
    </Section>
  );
}
