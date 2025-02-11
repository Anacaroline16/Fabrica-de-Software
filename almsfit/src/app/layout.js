import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer"
import styles from "./globals.css"
import { Poppins } from "next/font/google";


const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
});


export const metadata = {
	title: "ALMS Fit",
	description: "Projeto Fábrica de software",
	charset: "UTF-8",
	author: "Ana Caroline, Anne Gabriele, Luz Miranda, Maria Eduarda, Sofia Melo",
	keywords: " CSS, JavaScript, React. Next.js",
};
export default function RootLayout({ children }) {
	const layoutStyle = {
		backgroundColor: "#000000",
	  };
	
	return (

		<html lang="pt-BR">
			<body className={poppins.className}>
				<Header />
				<main>{children}</main>	
        		<Footer/>
			</body>
		</html>
	);
}
