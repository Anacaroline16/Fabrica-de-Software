export default function Header() {
	return (
		<div>
			<header className="header">
				<nav>
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/about">Sobre</Link>
						</li>
						<li>
							<Link href="/contact">Contato</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
