import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import {
  Page,
  Container,
  LeftPane,
  ChefImg,
  RightPane,
  Title,
  Form,
  Row,
  Field,
  Label,
  Input,
  Textarea,
  Actions,
  Button,
  Error,
} from "./styles";

import contactImg from "../../assets/contact.png";

// 🔒 mock de auth — troque depois pelo seu hook real
function useAuth() {
  // retorne null se não estiver logado
  return { id: 1, name: "João da Silva", email: "joao@senacfood.com" };
}

// número de WhatsApp no formato DDI + DDD + número (sem +, espaços ou traços)
const WHATS_APP_NUMBER =
  import.meta.env.VITE_CONTACT_WHATSAPP || "5583999999999";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1544025161-94f61d9ff20e?auto=format&fit=crop&w=1200&q=80";

export default function ContactPage() {
  const user = useAuth(); // se for null, mostramos nome/email

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};

    if (!user) {
      if (!form.name.trim()) e.name = "Informe seu nome.";
      if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "E-mail inválido.";
    }

    if (!form.subject.trim()) e.subject = "Informe um assunto.";
    if (!form.message.trim()) e.message = "Escreva sua mensagem.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    const name = user?.name || form.name || "não informado";
    const email = user?.email || form.email || "não informado";

    const textLines = [
      "Mensagem de contato via SenacFood:",
      "",
      `Nome: ${name}`,
      `Email: ${email}`,
      "",
      `Assunto: ${form.subject}`,
      "",
      "Mensagem:",
      form.message,
    ];

    const text = encodeURIComponent(textLines.join("\n"));

    const url = `https://wa.me/${WHATS_APP_NUMBER}?text=${text}`;
    window.open(url, "_blank");

    // opcional: limpar assunto/mensagem depois
    setForm((s) => ({ ...s, subject: "", message: "" }));
    setErrors({});
  };

  return (
    <>
      <Navbar />
      <div style={{ height: 70 }} />
      <Page>
        <Container>
          <LeftPane>
            <ChefImg src={contactImg} alt="Ilustração de contato" />
          </LeftPane>

          <RightPane>
            <Title>Contato</Title>

            <Form onSubmit={handleSubmit} noValidate>
              {!user && (
                <Row>
                  <Field>
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Digite seu nome"
                      value={form.name}
                      onChange={onChange}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <Error>{errors.name}</Error>}
                  </Field>

                  <Field>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Seu endereço de email"
                      value={form.email}
                      onChange={onChange}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <Error>{errors.email}</Error>}
                  </Field>
                </Row>
              )}

              <Field>
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Assunto da mensagem"
                  value={form.subject}
                  onChange={onChange}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && <Error>{errors.subject}</Error>}
              </Field>

              <Field>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Escreva sua mensagem"
                  rows={6}
                  value={form.message}
                  onChange={onChange}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <Error>{errors.message}</Error>}
              </Field>

              <Actions>
                <Button type="submit">Enviar pelo WhatsApp</Button>
              </Actions>
            </Form>
          </RightPane>
        </Container>
      </Page>
    </>
  );
}
