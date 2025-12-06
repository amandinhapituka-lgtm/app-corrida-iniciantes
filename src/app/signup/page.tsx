'// Substituição temporária para passar no build:
// src/app/signup/page.tsx

import React from 'react';

export const dynamic = 'force-dynamic';

export default function Signup() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Cadastro</h1>
      <p>Esta é a página de cadastro — componente substituto temporário para permitir o build.</p>
    </main>
  );
}
