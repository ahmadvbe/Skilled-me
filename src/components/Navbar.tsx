import { Show, UserButton } from "@clerk/tanstack-react-start";
import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

import { usePostHog } from "posthog-js/react";

const Navbar = () => {
	const posthog = usePostHog();

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
				<Show  //clerk tanstack react start 2:14:40 used to conditionally render content based on user authorization
				//if user is signed in it will show ont thing if not wont show at all
					when="signed-in">
					<UserButton  //show the avatar only whn we re signed in 2:19:25 allowing u to mangae ur acc
					/>
				</Show>

				<Show  //when signed out show a sign in button 2:15:08
					when="signed-out">
					<Link
						to="/sign-in/$" //it cant find the route when it finds it the error will disppear 1:34:30
						className="btn-primary"
						onClick={() => posthog.capture("sign_in_clicked")} //2:26:40
					>
						<LogIn //1:35:00 
							size={16} />
						Sign in
					</Link>
				</Show>
			</div>
		</nav>
	);
};

export default Navbar;
