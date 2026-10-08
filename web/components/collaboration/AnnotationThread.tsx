"use client";

import { useMemo, useState } from "react";
import { useCollaborationContext } from "./CollaborationProvider";

interface AnnotationThreadProps {
  messageId: string;
  onClose: () => void;
}

export function AnnotationThread({ messageId, onClose }: AnnotationThreadProps) {
  const { annotations, addAnnotation, resolveAnnotation, replyAnnotation } =
    useCollaborationContext();
  const [draft, setDraft] = useState("");

  const thread = useMemo(
    () => annotations[messageId] ?? [],
    [annotations, messageId]
  );

  return (
    <div className="rounded-xl border border-surface-700 bg-surface-900 p-3 shadow-2xl">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-surface-100">Annotations</p>
          <p className="text-xs text-surface-500">
            Lightweight placeholder thread for this repo snapshot.
          </p>
        </div>
        <button
          className="rounded-md px-2 py-1 text-xs text-surface-400 hover:bg-surface-800 hover:text-surface-200"
          onClick={onClose}
          type="button"
        >
          Close
        </button>
      </div>

      <div className="max-h-64 space-y-2 overflow-y-auto">
        {thread.length === 0 ? (
          <div className="rounded-lg border border-dashed border-surface-700 p-3 text-xs text-surface-500">
            No annotations yet for this message.
          </div>
        ) : (
          thread.map((annotation) => (
            <div
              key={annotation.id}
              className="rounded-lg border border-surface-800 bg-surface-950 p-3 text-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-medium text-surface-200">
                  {annotation.author.name}
                </span>
                <button
                  className="rounded-md px-2 py-1 text-xs text-surface-400 hover:bg-surface-800 hover:text-surface-200"
                  onClick={() =>
                    resolveAnnotation(annotation.id, !annotation.resolved)
                  }
                  type="button"
                >
                  {annotation.resolved ? "Reopen" : "Resolve"}
                </button>
              </div>
              <p className="mt-2 whitespace-pre-wrap text-surface-300">
                {annotation.text}
              </p>
              {annotation.replies?.length ? (
                <div className="mt-3 space-y-2 border-t border-surface-800 pt-2">
                  {annotation.replies.map((reply) => (
                    <div key={reply.id} className="text-xs text-surface-400">
                      <span className="font-medium text-surface-300">
                        {reply.author.name}:
                      </span>{" "}
                      {reply.text}
                    </div>
                  ))}
                </div>
              ) : null}
              <button
                className="mt-3 text-xs text-brand-400 hover:text-brand-300"
                onClick={() => replyAnnotation(annotation.id, "Follow-up note")}
                type="button"
              >
                Add placeholder reply
              </button>
            </div>
          ))
        )}
      </div>

      <div className="mt-3 space-y-2">
        <textarea
          className="min-h-20 w-full rounded-lg border border-surface-700 bg-surface-950 px-3 py-2 text-sm text-surface-100"
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Add an annotation"
          value={draft}
        />
        <button
          className="w-full rounded-md bg-brand-600 px-3 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!draft.trim()}
          onClick={() => {
            addAnnotation(messageId, draft.trim());
            setDraft("");
          }}
          type="button"
        >
          Add annotation
        </button>
      </div>
    </div>
  );
}
