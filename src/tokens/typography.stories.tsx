import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Typography",
  tags: ["!dev"],
};
export default meta;
type Story = StoryObj;

// ─── Types ────────────────────────────────────────────────────────────────────

type TextStyleEntry = {
  name: string;
  // actual CSS values — used only for rendering the preview
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
  // token names — shown in the table
  sizeToken: string;
  weightToken: string;
  spacingToken: string;
  // designer px value for line height
  lineHeightPx: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const headEntries: TextStyleEntry[] = [
  { name: "head1",  fontSize: "28px", fontWeight: "600", lineHeight: "1.36", letterSpacing: "-0.005em", sizeToken: "2xl", weightToken: "semibold", spacingToken: "tighter", lineHeightPx: "38px" },
  { name: "head2",  fontSize: "24px", fontWeight: "700", lineHeight: "1.17", letterSpacing: "-0.005em", sizeToken: "xl",  weightToken: "bold",     spacingToken: "tighter", lineHeightPx: "28px" },
  { name: "head3",  fontSize: "24px", fontWeight: "600", lineHeight: "1.33", letterSpacing: "-0.005em", sizeToken: "xl",  weightToken: "semibold", spacingToken: "tighter", lineHeightPx: "32px" },
  { name: "head4",  fontSize: "20px", fontWeight: "500", lineHeight: "1.4",  letterSpacing: "-0.005em", sizeToken: "lg",  weightToken: "medium",   spacingToken: "tighter", lineHeightPx: "28px" },
];

const titleEntries: TextStyleEntry[] = [
  { name: "title1", fontSize: "20px", fontWeight: "600", lineHeight: "1.4",  letterSpacing: "-0.005em", sizeToken: "lg", weightToken: "semibold", spacingToken: "tighter", lineHeightPx: "28px" },
  { name: "title2", fontSize: "20px", fontWeight: "400", lineHeight: "1.4",  letterSpacing: "-0.005em", sizeToken: "lg", weightToken: "regular",  spacingToken: "tighter", lineHeightPx: "28px" },
  { name: "title3", fontSize: "16px", fontWeight: "600", lineHeight: "1.38", letterSpacing: "-0.005em", sizeToken: "md", weightToken: "semibold", spacingToken: "tighter", lineHeightPx: "22px" },
];

const bodyEntries: TextStyleEntry[] = [
  { name: "body1",  fontSize: "16px", fontWeight: "500", lineHeight: "1.5",  letterSpacing: "-0.01em", sizeToken: "md", weightToken: "medium",   spacingToken: "tight", lineHeightPx: "24px" },
  { name: "body2",  fontSize: "16px", fontWeight: "400", lineHeight: "1.5",  letterSpacing: "-0.01em", sizeToken: "md", weightToken: "regular",  spacingToken: "tight", lineHeightPx: "24px" },
  { name: "body3",  fontSize: "14px", fontWeight: "600", lineHeight: "1.57", letterSpacing: "-0.01em", sizeToken: "sm", weightToken: "semibold", spacingToken: "tight", lineHeightPx: "22px" },
  { name: "body4",  fontSize: "14px", fontWeight: "500", lineHeight: "1.57", letterSpacing: "-0.01em", sizeToken: "sm", weightToken: "medium",   spacingToken: "tight", lineHeightPx: "22px" },
  { name: "body5",  fontSize: "14px", fontWeight: "400", lineHeight: "1.57", letterSpacing: "-0.01em", sizeToken: "sm", weightToken: "regular",  spacingToken: "tight", lineHeightPx: "22px" },
];

const captionEntries: TextStyleEntry[] = [
  { name: "caption1", fontSize: "12px", fontWeight: "600", lineHeight: "1.67", letterSpacing: "-0.01em", sizeToken: "xs", weightToken: "semibold", spacingToken: "tight", lineHeightPx: "20px" },
  { name: "caption2", fontSize: "12px", fontWeight: "500", lineHeight: "1.5",  letterSpacing: "-0.01em", sizeToken: "xs", weightToken: "medium",   spacingToken: "tight", lineHeightPx: "18px" },
  { name: "caption3", fontSize: "12px", fontWeight: "400", lineHeight: "1.5",  letterSpacing: "-0.01em", sizeToken: "xs", weightToken: "regular",  spacingToken: "tight", lineHeightPx: "18px" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const TABLE_COLS = "140px 64px 72px 104px 136px";
const TABLE_HEADERS = ["Text Style", "Size", "Weight", "Line Height", "Letter Spacing"];

function StylePreview({ entries }: { entries: TextStyleEntry[] }) {
  return (
    <div style={{ padding: "28px 28px 24px", borderBottom: "1px solid #e1e4ec" }}>
      {entries.map(({ name, fontSize, fontWeight, lineHeight, letterSpacing }, i) => (
        <div key={name} style={{ marginBottom: i < entries.length - 1 ? 28 : 0 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#9fa5b3",
              fontFamily: "monospace",
              marginBottom: 6,
              letterSpacing: "0.02em",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize,
              fontWeight,
              lineHeight,
              letterSpacing,
              color: "#171a1f",
            }}
          >
            가나다라 AaBbCc 123
          </div>
        </div>
      ))}
    </div>
  );
}

function TokenCell({ children }: { children: React.ReactNode }) {
  return (
    <code
      style={{
        fontSize: 11,
        fontFamily: "monospace",
        background: "#f2f4f9",
        color: "#2c3038",
        padding: "2px 6px",
        borderRadius: 4,
        display: "inline-block",
      }}
    >
      {children}
    </code>
  );
}

function StyleTable({ entries }: { entries: TextStyleEntry[] }) {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: TABLE_COLS,
          padding: "9px 28px",
          background: "#f9fafd",
          borderBottom: "1px solid #e1e4ec",
          gap: 12,
        }}
      >
        {TABLE_HEADERS.map((h) => (
          <span key={h} style={{ fontSize: 11, fontWeight: 600, color: "#9fa5b3" }}>
            {h}
          </span>
        ))}
      </div>
      {entries.map(({ name, sizeToken, weightToken, lineHeight, lineHeightPx, spacingToken }, i) => (
        <div
          key={name}
          style={{
            display: "grid",
            gridTemplateColumns: TABLE_COLS,
            padding: "12px 28px",
            borderBottom: i < entries.length - 1 ? "1px solid #f2f4f9" : undefined,
            gap: 12,
            alignItems: "center",
          }}
        >
          <code
            style={{ fontSize: 12, color: "#2c3038", fontFamily: "monospace", fontWeight: 600 }}
          >
            {name}
          </code>
          <TokenCell>{sizeToken}</TokenCell>
          <TokenCell>{weightToken}</TokenCell>
          <span style={{ fontSize: 12, color: "#464b53" }}>
            {lineHeight}{" "}
            <span style={{ color: "#9fa5b3" }}>({lineHeightPx})</span>
          </span>
          <TokenCell>{spacingToken}</TokenCell>
        </div>
      ))}
    </div>
  );
}

function TypeSection({
  title,
  description,
  entries,
}: {
  title: string;
  description: string;
  entries: TextStyleEntry[];
}) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontSize: 16,
          fontWeight: 700,
          marginBottom: 6,
          color: "#171a1f",
        }}
      >
        {title}
      </h2>
      <p style={{ fontSize: 13, color: "#737a89", marginBottom: 16, lineHeight: 1.6 }}>
        {description}
      </p>
      <div style={{ border: "1px solid #e1e4ec", borderRadius: 12, overflow: "hidden" }}>
        <StylePreview entries={entries} />
        <StyleTable entries={entries} />
      </div>
    </div>
  );
}

// ─── Token sub-components ─────────────────────────────────────────────────────

function TokenSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: 14,
        fontWeight: 700,
        color: "#171a1f",
        marginBottom: 16,
        marginTop: 40,
      }}
    >
      {children}
    </h2>
  );
}

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Tokens: Story = {
  render: () => (
    <div style={{ padding: 16, fontFamily: "inherit", maxWidth: 720 }}>
      {/* Font Size */}
      <TokenSectionTitle>Font Size</TokenSectionTitle>
      <div
        style={{
          border: "1px solid #e1e4ec",
          borderRadius: 10,
          overflow: "hidden",
          marginBottom: 0,
        }}
      >
        {[
          { token: "2xl", size: "28px" },
          { token: "xl", size: "24px" },
          { token: "lg", size: "20px" },
          { token: "md", size: "16px" },
          { token: "sm", size: "14px" },
          { token: "xs", size: "12px" },
        ].map(({ token, size }, i, arr) => (
          <div
            key={token}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 16,
              padding: "14px 20px",
              borderBottom: i < arr.length - 1 ? "1px solid #f2f4f9" : undefined,
              background: i % 2 === 1 ? "#fafbff" : "#ffffff",
            }}
          >
            <code
              style={{
                width: 32,
                fontSize: 11,
                fontWeight: 700,
                color: "#9fa5b3",
                fontFamily: "monospace",
                flexShrink: 0,
              }}
            >
              {token}
            </code>
            <span
              style={{
                fontSize: size,
                fontWeight: 500,
                color: "#171a1f",
                lineHeight: 1,
                flex: 1,
              }}
            >
              가나다라 AaBbCc 123
            </span>
            <span
              style={{
                fontSize: 11,
                color: "#ccd0d9",
                fontFamily: "monospace",
                flexShrink: 0,
              }}
            >
              {size}
            </span>
          </div>
        ))}
      </div>

      {/* Font Weight */}
      <TokenSectionTitle>Font Weight</TokenSectionTitle>
      <div
        style={{
          border: "1px solid #e1e4ec",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        {[
          { token: "bold", weight: "700" },
          { token: "semibold", weight: "600" },
          { token: "medium", weight: "500" },
          { token: "regular", weight: "400" },
        ].map(({ token, weight }, i, arr) => (
          <div
            key={token}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 16,
              padding: "14px 20px",
              borderBottom: i < arr.length - 1 ? "1px solid #f2f4f9" : undefined,
              background: i % 2 === 1 ? "#fafbff" : "#ffffff",
            }}
          >
            <code
              style={{
                width: 72,
                fontSize: 11,
                fontWeight: 700,
                color: "#9fa5b3",
                fontFamily: "monospace",
                flexShrink: 0,
              }}
            >
              {token}
            </code>
            <span
              style={{
                fontSize: "20px",
                fontWeight: weight,
                color: "#171a1f",
                lineHeight: 1,
                flex: 1,
              }}
            >
              가나다라 AaBbCc 123
            </span>
            <span
              style={{
                fontSize: 11,
                color: "#ccd0d9",
                fontFamily: "monospace",
                flexShrink: 0,
              }}
            >
              {weight}
            </span>
          </div>
        ))}
      </div>

      {/* Letter Spacing */}
      <TokenSectionTitle>Letter Spacing</TokenSectionTitle>
      <div
        style={{
          border: "1px solid #e1e4ec",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        {[
          { token: "tighter", value: "-0.005em", usage: "Head, Title" },
          { token: "tight", value: "-0.01em", usage: "Body, Caption" },
        ].map(({ token, value, usage }, i, arr) => (
          <div
            key={token}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "14px 20px",
              borderBottom: i < arr.length - 1 ? "1px solid #f2f4f9" : undefined,
            }}
          >
            <code
              style={{
                width: 64,
                fontSize: 11,
                fontWeight: 700,
                color: "#9fa5b3",
                fontFamily: "monospace",
                flexShrink: 0,
              }}
            >
              {token}
            </code>
            <span
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "#171a1f",
                letterSpacing: value,
                flex: 1,
              }}
            >
              가나다라 AaBbCc 123
            </span>
            <span style={{ fontSize: 11, color: "#9fa5b3", flexShrink: 0 }}>{usage}</span>
            <span
              style={{
                fontSize: 11,
                color: "#ccd0d9",
                fontFamily: "monospace",
                flexShrink: 0,
              }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const AllStyles: Story = {
  name: "Styles",
  render: () => (
    <div style={{ padding: 32, fontFamily: "inherit", maxWidth: 900 }}>
      <TypeSection
        title="Head"
        description="가장 높은 시각적 위계를 가지는 텍스트 스타일로, 사용자의 주목이 필요한 대표 콘텐츠를 강조할 때 사용해요."
        entries={headEntries}
      />

      <TypeSection
        title="Title"
        description="상위 정보 위계를 표현하는 텍스트 스타일이에요. 화면, 섹션 또는 콘텐츠를 구분하고 강조하며 핵심 제목이나 주제를 표현하는 데 사용해요."
        entries={titleEntries}
      />

      <TypeSection
        title="Body"
        description="기본 정보 위계를 표현하며 서비스 전반에서 기본적으로 사용되는 텍스트 스타일이에요. 레이블, 일반 정보, 설명 등 다양한 UI 텍스트를 전달하는 데 사용하며, 상대적으로 중요도가 낮은 제목이나 소제목에도 활용돼요."
        entries={bodyEntries}
      />

      <TypeSection
        title="Caption"
        description="보조 정보 위계를 표현하는 텍스트 스타일로, 본문을 보완하거나 추가적인 맥락을 전달할 때 사용해요."
        entries={captionEntries}
      />
    </div>
  ),
};
