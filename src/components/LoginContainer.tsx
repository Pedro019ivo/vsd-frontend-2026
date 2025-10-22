"use client";

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function LoginContainer() {
  const { register } = useForm();
  return (
    <div className="w-[25rem] h-[34.375rem]  flex flex-col gap-[1rem] p-9 justify-center">
      <Input id="title" title="E-mail" placeholder="E-mail" />

      <Input id="password" title="Senha" placeholder="Senha" />

      <Button>Entrar</Button>
    </div>
  );
}
