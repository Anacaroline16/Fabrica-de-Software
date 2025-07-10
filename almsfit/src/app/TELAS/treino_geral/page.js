"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const tipos = [
  { label: "Lombares", slug: "lombares" },
  { label: "Superiores", slug: "superiores" },
  { label: "Inferiores", slug: "inferiores" },
  { label: "Cardíacos", slug: "cardiacos" },
  { label: "Iniciantes", slug: "iniciantes" },
  { label: "Idosos", slug: "idosos" }
];

export default function Home() {
  const router = useRouter();

  const irParaReceitas = (slug) => {
    router.push(`receitas/${slug}`);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.h1}>Tipos de Dores Musculares</h1>
        <div className={styles.ctas}>
          {tipos.map(({ label, slug }) => (
            <a
              key={slug}
              onClick={() => irParaReceitas(slug)}
              className="primary"
              style={{ cursor: "pointer", userSelect: "none" }}
            >
              {label}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
