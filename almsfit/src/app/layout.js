import Header from "@/components/header/Header";

export const metadata = {
	title: "ALMS Fit",
	description: "Projeto Fábrica de software",
	charset: "UTF-8",
	author: "Ana Caroline, Anne Gabriele, Luz Miranda, Maria Eduarda, Sofia Melo",
	keywords: " CSS, JavaScript, React. Next.js",
};
export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<body>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
