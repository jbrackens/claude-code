"use client";

import { useChatStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ChatHistory() {
  const {
    conversations,
    activeConversationId,
    setActiveConversation,
    createConversation,
  } = useChatStore();

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-surface-800 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-surface-100">Conversations</p>
          <p className="text-xs text-surface-500">Local history available in this checkout.</p>
        </div>
        <button
          className="rounded-md bg-brand-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-700"
          onClick={() => createConversation()}
          type="button"
        >
          New
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {conversations.length === 0 ? (
          <div className="rounded-lg border border-dashed border-surface-700 p-4 text-sm text-surface-500">
            No saved conversations yet.
          </div>
        ) : (
          conversations.map((conversation) => (
            <button
              key={conversation.id}
              className={cn(
                "mb-2 w-full rounded-lg border px-3 py-2 text-left transition-colors",
                activeConversationId === conversation.id
                  ? "border-brand-500 bg-brand-500/10 text-surface-100"
                  : "border-surface-800 bg-surface-900 text-surface-300 hover:bg-surface-800"
              )}
              onClick={() => setActiveConversation(conversation.id)}
              type="button"
            >
              <p className="truncate text-sm font-medium">
                {conversation.title}
              </p>
              <p className="mt-1 text-xs text-surface-500">
                {conversation.messages.length} messages
              </p>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
