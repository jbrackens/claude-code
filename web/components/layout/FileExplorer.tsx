"use client";

const QUICK_PATHS = [
  "/Users/john/Sandbox/SwarmQAByDora",
  "/Users/john/Sandbox/SwarmQAByDora/src",
  "/Users/john/Sandbox/SwarmQAByDora/web",
];

export function FileExplorer() {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-surface-800 px-4 py-3">
        <p className="text-sm font-semibold text-surface-100">File Explorer</p>
        <p className="text-xs text-surface-500">
          Starter placeholder while the original explorer modules are missing from this checkout.
        </p>
      </div>

      <div className="space-y-3 p-4 text-sm text-surface-300">
        <div className="rounded-lg border border-surface-800 bg-surface-900 p-3">
          <p className="font-medium text-surface-100">Suggested roots</p>
          <ul className="mt-2 space-y-2 text-xs text-surface-400">
            {QUICK_PATHS.map((filePath) => (
              <li key={filePath} className="break-all rounded bg-surface-950 px-2 py-1">
                {filePath}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-dashed border-surface-700 p-3 text-xs text-surface-500">
          The API routes for file read/write are present, but the UI explorer component was not
          included in this repo snapshot.
        </div>
      </div>
    </div>
  );
}
