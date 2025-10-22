"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function LoginContainer() {
  return (
    <div className="w-[25rem] h-[34.375rem]  flex flex-col gap-[1rem] p-9 justify-center">
      <Input placeholder="E-mail" />

      <Input placeholder="Senha" />

      <Button>Entrar</Button>
    </div>
  );
}
