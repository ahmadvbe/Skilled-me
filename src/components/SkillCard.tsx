import { Link } from "@tanstack/react-router";
import {
	ArrowBigUp,
	ArrowUpRight,
	Bookmark,
	Check,
	Copy,
	MessageSquare,
} from "lucide-react";
// import { usePostHog } from "";
import { useState } from "react";

// import type { GetSkillsData } from "#/dataconnect-generated";

//##        1:48:38 src/components/SkillCard.tsx

// type SkillCardProps = GetSkillsData["skills"][number];

const SkillCard = ({
	createdAt,
	description,
	installCommand,
	tags,
	title,
	// author,
}: SkillRecord
//SkillCardProps
) => {
	const [copied, setCopied] = useState(false); //indication of successfull copy process 2:01:00
	// const posthog = usePostHog();

	const category = tags[0] ?? "General";

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(installCommand); //await to see whether it has been copied properly 
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
			// posthog.capture("install_command_copied", {
			// 	skill_title: title,
			// 	skill_category: category,
			// 	install_command: installCommand,
			// });
		} catch {
			setCopied(false);
		}
	};

	return ( //1:53:00
		<article className="skill-card">
			<Link //1:54:00
				to="/skills"
				tabIndex={-1}
				aria-label={`Open ${title}`}
				className="overlay"
			/>

			<div className="chrome">
				<div className="chrome-bar">
					<div className="lights">
						<div className="light red" />
						<div className="light amber" />
						<div className="light green" />
					</div>
					<div className="host">registry.sh</div>
				</div>
			</div>

			<div //1:55:48
				className="body">
				<div className="meta">
					<div className="author">
						<img
							src=//{author.imageUrl 
								//||
								 "/logo512.png"
								//}
							alt=//{`${author.username} 
							'avatar'
							//`}
							className="avatar"
						/>
						<div className="author-copy">
							<p>
								{/* {author.username} */}
								Ahmad
							</p>
							<p>
								{createdAt //1:57:13 2:10:52 coderabbit fix
									? new Date(createdAt).toLocaleDateString()
									: "Unknown date"}
							</p>
						</div>
					</div>

					<p //1:57:30
						className="category">{category}</p>
				</div>

				<div 
					className="summary">
					<Link to="/skills" className="title-link">
						<h3>{title}</h3>
					</Link>

					<p>{description}</p>
				</div>

				<div //1:58:40
					className="command">
					<div className="command-copy">
						<span>{">_"}</span>
						<p>{installCommand}</p>
					</div>

					<button //copy this to clipboard 1:59:30 -AI 1:59:50
						type="button"
						className="copy"
						onClick={handleCopy}
						aria-label="Copy install command"
					>
						{copied ? <Check size={16} /> : <Copy size={16} />}
					</button>
				</div>

				<div //2:02:15
					className="footer">
					<div className="stats">
						<button type="button" 
							className="upvote" disabled>
							<ArrowBigUp size={16} fill="currentColor" />
							<span>{tags.length}</span>
						</button>

						<div //2:03:10
							className="comments">
							<MessageSquare size={14} />
							{/* <span>{author.email ? 1 : 0}</span> */}
						</div>
					</div>

					<div //2:03:45
						className="actions">
						<Link
							to="/skills"
							className="open"
							title={`Open ${title}`}
							// onClick={
							// 	() =>
							// 	posthog.capture("skill_opened", {
							// 		skill_title: title,
							// 		skill_category: category,
							// 	})
							// }
						>
							<span>Open</span>
							<ArrowUpRight size={14} />
						</Link>

						<button
							type="button"
							className="save"
							aria-label="Saved state"
							disabled
						>
							<Bookmark size={16} />
						</button>
					</div>
				</div>
			</div>
		</article>
	);
};

export default SkillCard;
