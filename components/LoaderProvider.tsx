"use client";

import { useCallback, useState } from "react";
import { Loader } from "@/components/Loader";

export function LoaderProvider({ children }: { children: React.ReactNode }) {
	const [loaded, setLoaded] = useState(false);

	const handleComplete = useCallback(() => setLoaded(true), []);

	return (
		<>
			{!loaded ? <Loader onComplete={handleComplete} /> : null}
			<div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}>
				{children}
			</div>
		</>
	);
}
