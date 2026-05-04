

//Step 4 Add clerkMiddleware() to your app. 2:13:40
import { clerkMiddleware } from "@clerk/tanstack-react-start/server";
import { createStart } from "@tanstack/react-start";

export const startInstance = createStart(() => {
	return {
		requestMiddleware: [clerkMiddleware()],
	};
});
