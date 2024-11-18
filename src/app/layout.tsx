export const metadata = {
	title: "UniHaven",
	description: "Repositorio institucional de la Universidad Popular del Cesar",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	);
}
