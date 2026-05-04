import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Terminal } from "lucide-react";

// import { usePostHog } from "posthog-js/react";
import SkillCard from "#/components/SkillCard";
import { getSkills } from "#/dataconnect-generated";
import { dummySkills } from "#/lib/dummy-skills";
import { dataConnect } from "#/lib/firebase";

// - 2:56:50 *firebase config file*
//     src/lib/firebase.ts
//     2:59:25 now we re ready to define a tanstack server func that fetch the skills form the DB
//         src/routes/index.tsx 2:59:40  
const getSkillsFn = createServerFn(
		{ method: "GET" })
		.handler(async () => { //3:00:05
	try {
		const { data } = await getSkills(dataConnect, { //call the data connect instance from firebase config.ts file
			searchTerm: "", //fetch all the skills
			limit: 10,
		});
			console.log("data",data)
		return data.skills; //return the data back
	} catch (error) {
		console.error(error);
		return []; //we werent been able to fetch the skills
	}
});

export const Route = createFileRoute("/")({
	component: App,
	loader: () => getSkillsFn(), //3:01:10 popyulate our page with the above data
});

function App() {
	// const posthog = usePostHog();

	//to consume the fetched data using the tanstack server fn 3:01:30
	const skills = Route.useLoaderData(); //use this data instad of our dummy data 3:01:45

	return (
		<div  //1:41:25
			id="home">
			<section  //1:41:50
				className="hero">
				<div 
					className="copy">
					<h1>
						The Registry for <br />
						<span className="text-gradient">Agentic Intelligence</span>
					</h1>
					<p>
						A high-performance registry for procedural agent skills. Discover,
						publish, and operate reusable agent capabilities from a route-driven
						workspace.
					</p>
				</div>

				<div //1:43:05
					className="actions">
					{/* <Link
						to="/skills"
						className="btn-primary"
						onClick={() => 
								// posthog.capture("browse_registry_clicked")
							}
					>
						<Terminal  //icon lucid react
							 size={18} />
						<span>Browse Registry</span>
					</Link>
					<Link //1:44:45
						to="/skills/new"
						className="btn-secondary"
						onClick={() => 
							// posthog.capture("publish_skill_clicked")
						}
					>
						Publish Skill
					</Link> */}
				</div>
			</section>

			<section //1:45:10
				className="latest">
				<div className="space-y-2">
					<h2>
						Recently Created <span className="text-gradient">Skills</span>
					</h2>
					<p>
						{" "}
						Latest skills loaded from database in descending creation order.
					</p>
				</div>

				<div //1:49"04 consume the skillcard component created and map over it 
					>
					{skills.length > 0 ? ( //1:46:26
						<div className="skills-grid">
							{skills.map((skill) => (
								<SkillCard key={skill.id} {...skill} />
							))}
						</div>
					) : (
						<p>No skills have been created yet.</p>
					)}
						{/* {dummySkills.length > 0 ? ( //1:46:26 1:51:16
						<div className="skills-grid">
							{dummySkills.map((skill) => (
								<SkillCard 
									key={skill.id} 
									{...skill}  //1:51:56 spread out all of the other skills properties
									/>
							))} */}
						{/* </div>
					) : (
						<p>No skills have been created yet.</p> */}
					{/* )} */}
				</div>
			</section>
		</div>
	);
}
