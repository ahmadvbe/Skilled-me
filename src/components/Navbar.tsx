import { Show, UserButton } from "@clerk/tanstack-react-start";
import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";
// import { usePostHog } from "posthog-js/react";

const Navbar = () => {
	// const posthog = usePostHog();

	return (
		<nav className="navbar">
			<div className="brand">
				<div className="mark">
					<div className="glyph" />
				</div>
				<Link  //1:33:35
					to="/">
					<span>Skild</span>
				</Link>
			</div>

			<div className="actions">
				<Show when="signed-in">
					<UserButton />
				</Show>

				<Show when="signed-out">
					<Link
						to="/sign-in/$" //it cant find the route when it finds it the error will disppear 1:34:30
						className="btn-primary"
						// onClick={() => 
						// //	posthog.capture("sign_in_clicked")
						// }
					>
						<LogIn //1:35:45
							size={16} />
						Sign in
					</Link>
				</Show>
			</div>
		</nav>
	);
};

export default Navbar;
