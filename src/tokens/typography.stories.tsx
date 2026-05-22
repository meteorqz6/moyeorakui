import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Typography",
  tags: ["!dev"],
};
export default meta;
type Story = StoryObj;

type TextStyleEntry = {
  name: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
};

function TypeRow({ name, fontSize, fontWeight, lineHeight, letterSpacing }: TextStyleEntry) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr 80px 80px 80px 100px",
        alignItems: "center",
        padding: "16px",
        borderBottom: "1px solid #f2f4f9",
        gap: 16,
      }}
    >
      <code style={{ fontSize: 12, color: "#5f6572", fontFamily: "monospace" }}>{name}</code>
      <span
        style={{
          fontSize,
          fontWeight,
          lineHeight,
          letterSpacing,
          color: "#171a1f",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        가나다라 AaBbCc 123
      </span>
      <span style={{ fontSize: 11, color: "#9fa5b3", textAlign: "right" }}>{fontSize}</span>
      <span style={{ fontSize: 11, color: "#9fa5b3", textAlign: "right" }}>{fontWeight}</span>
      <span style={{ fontSize: 11, color: "#9fa5b3", textAlign: "right" }}>{lineHeight}</span>
      <span style={{ fontSize: 11, color: "#9fa5b3", textAlign: "right" }}>{letterSpacing}</span>
    </div>
  );
}

function TypeSection({ title, entries }: { title: string; entries: TextStyleEntry[] }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h3
        style={{
          fontSize: 15,
          fontWeight: 700,
          marginBottom: 12,
          color: "#171a1f",
          borderLeft: "4px solid #4181ff",
          paddingLeft: 12,
        }}
      >
        {title}
      </h3>
      <div style={{ border: "1px solid #e1e4ec", borderRadius: 8, overflow: "hidden" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr 80px 80px 80px 100px",
            padding: "8px 16px",
            background: "#f9fafd",
            borderBottom: "1px solid #e1e4ec",
            gap: 16,
          }}
        >
          {["Token", "Preview", "Size", "Weight", "Line Height", "Letter Spacing"].map((h) => (
            <span key={h} style={{ fontSize: 11, fontWeight: 600, color: "#9fa5b3" }}>{h}</span>
          ))}
        </div>
        {entries.map((entry) => (
          <TypeRow key={entry.name} {...entry} />
        ))}
      </div>
    </div>
  );
}

const headEntries: TextStyleEntry[] = [
  { name: "head1", fontSize: "28px", fontWeight: "600", lineHeight: "1.36", letterSpacing: "-0.005em" },
  { name: "head2", fontSize: "24px", fontWeight: "700", lineHeight: "1.17", letterSpacing: "-0.005em" },
  { name: "head3", fontSize: "24px", fontWeight: "600", lineHeight: "1.33", letterSpacing: "-0.005em" },
];

const titleEntries: TextStyleEntry[] = [
  { name: "title1", fontSize: "20px", fontWeight: "600", lineHeight: "1.4", letterSpacing: "-0.005em" },
  { name: "title2", fontSize: "20px", fontWeight: "400", lineHeight: "1.4", letterSpacing: "-0.005em" },
  { name: "title3", fontSize: "16px", fontWeight: "600", lineHeight: "1.38", letterSpacing: "-0.005em" },
];

const bodyEntries: TextStyleEntry[] = [
  { name: "body1", fontSize: "16px", fontWeight: "500", lineHeight: "1.5", letterSpacing: "-0.01em" },
  { name: "body2", fontSize: "16px", fontWeight: "400", lineHeight: "1.5", letterSpacing: "-0.01em" },
  { name: "body3", fontSize: "14px", fontWeight: "600", lineHeight: "1.57", letterSpacing: "-0.01em" },
  { name: "body4", fontSize: "14px", fontWeight: "500", lineHeight: "1.57", letterSpacing: "-0.01em" },
  { name: "body5", fontSize: "14px", fontWeight: "400", lineHeight: "1.57", letterSpacing: "-0.01em" },
];

const captionEntries: TextStyleEntry[] = [
  { name: "caption1", fontSize: "12px", fontWeight: "600", lineHeight: "1.67", letterSpacing: "-0.01em" },
  { name: "caption2", fontSize: "12px", fontWeight: "500", lineHeight: "1.5", letterSpacing: "-0.01em" },
  { name: "caption3", fontSize: "12px", fontWeight: "400", lineHeight: "1.5", letterSpacing: "-0.01em" },
];

export const AllStyles: Story = {
  name: "Text Styles",
  render: () => (
    <div style={{ padding: 32, fontFamily: "sans-serif", maxWidth: 900 }}>
      <TypeSection title="Head" entries={headEntries} />
      <TypeSection title="Title" entries={titleEntries} />
      <TypeSection title="Body" entries={bodyEntries} />
      <TypeSection title="Caption" entries={captionEntries} />
    </div>
  ),
};

export const Scale: Story = {
  name: "Type Scale",
  render: () => (
    <div style={{ padding: 32, fontFamily: "sans-serif", maxWidth: 720 }}>
      <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 24, color: "#171a1f" }}>
        Font Size Scale
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
        {[
          { token: "2xl", size: "28px", label: "28" },
          { token: "xl",  size: "24px", label: "24" },
          { token: "lg",  size: "20px", label: "20" },
          { token: "md",  size: "16px", label: "16" },
          { token: "sm",  size: "14px", label: "14" },
          { token: "xs",  size: "12px", label: "12" },
        ].map(({ token, size, label }) => (
          <div key={token} style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
            <code style={{ width: 40, fontSize: 11, color: "#9fa5b3", fontFamily: "monospace", flexShrink: 0 }}>
              {token}
            </code>
            <span style={{ fontSize: size, fontWeight: 500, color: "#171a1f", lineHeight: 1 }}>
              가나다라 AaBbCc
            </span>
            <span style={{ fontSize: 11, color: "#ccd0d9" }}>{label}px</span>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 24, color: "#171a1f" }}>
        Font Weight
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          { token: "bold",     weight: "700" },
          { token: "semibold", weight: "600" },
          { token: "medium",   weight: "500" },
          { token: "regular",  weight: "400" },
        ].map(({ token, weight }) => (
          <div key={token} style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
            <code style={{ width: 70, fontSize: 11, color: "#9fa5b3", fontFamily: "monospace", flexShrink: 0 }}>
              {token}
            </code>
            <span style={{ fontSize: "20px", fontWeight: weight, color: "#171a1f", lineHeight: 1 }}>
              가나다라 AaBbCc 123
            </span>
            <span style={{ fontSize: 11, color: "#ccd0d9" }}>{weight}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
