"use client";

import { useChatStore } from "@/lib/store";

export function QuickActions() {
  const { createConversation, setSidebarTab } = useChatStore();

  return (
    <div className="border-t border-surface-800 p-3">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-surface-500">
        Quick Actions
      </p>
      <div className="grid gap-2">
        <button
          className="rounded-md bg-brand-600 px-3 py-2 text-sm font-medium text-white hover:bg-brand-700"
          onClick={() => createConversation()}
          type="button"
        >
          Start conversation
        </button>
        <button
          className="rounded-md border border-surface-700 px-3 py-2 text-sm text-surface-300 hover:bg-surface-800"
          onClick={() => setSidebarTab("files")}
          type="button"
        >
          Open files tab
        </button>
      </div>
    </div>
  );
}
