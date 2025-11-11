import React from "react";

/**
 * 텍스트에서 %텍스트% 형식을 찾아서 강조 표시를 적용합니다.
 * @param text - 처리할 텍스트
 * @returns JSX 요소 배열
 */
export function formatText(text: string): React.ReactNode {
  if (!text) return text;

  // %텍스트% 패턴 찾기
  const pattern = /%([^%]+)%/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    // 매칭 전 텍스트 추가
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // 강조된 텍스트 추가 (% 제거하고 강조 스타일 적용)
    parts.push(
      <span
        key={`highlight-${key++}`}
        className="font-semibold text-blue-700 bg-blue-50 px-1 rounded"
      >
        {match[1]}
      </span>
    );

    lastIndex = match.index + match[0].length;
  }

  // 남은 텍스트 추가
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
}

