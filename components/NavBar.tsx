import { ActiveLink } from "./ActiveLink"
import styles from "./NavBar.module.css"

const menuItems = [
	{ text: "home", href: "/" },
	{ text: "about", href: "/about" },
	{ text: "contact", href: "/contact" },
	{ text: "pricing", href: "/pricing" },
]

export const NavBar = () => {
	return (
		<nav className={styles["menu-container"]}>
			{menuItems.map(({ text, href }, index) => (
				<ActiveLink key={index} href={href} text={text} />
			))}
		</nav>
	)
}
