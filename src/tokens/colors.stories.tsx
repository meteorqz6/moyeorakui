import type { Meta, StoryObj } from "@storybook/react";
import {
  type ColorEntry,
  type SemanticGroupName,
  paletteColor,
  paletteScale,
  semanticGroup,
} from "./theme-docs";

const meta: Meta = {
  title: "Foundations/Colors",
  tags: ["!dev"],
};
export default meta;

type Story = StoryObj;

// ─── Palette Components ───────────────────────────────────────────────────────

function formatColor(value: string): string {
  const m = value.match(/rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)(?:[\s,/]+([\d.]+)(%?))?\s*\)/);
  if (!m) return value;
  const hex = [m[1], m[2], m[3]]
    .map((n) => parseInt(n).toString(16).padStart(2, "0"))
    .join("");
  const alpha =
    m[4] !== undefined ? ` ${Math.round(m[5] ? parseFloat(m[4]) : parseFloat(m[4]) * 100)}%` : "";
  return `#${hex}${alpha}`;
}

function hexLuminance(hex: string): number {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return 1;
  const r = parseInt(result[1], 16) / 255;
  const g = parseInt(result[2], 16) / 255;
  const b = parseInt(result[3], 16) / 255;
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function ColorScale({
  name,
  colors,
  mono = false,
}: {
  name: string;
  colors: ColorEntry[];
  mono?: boolean;
}) {
  return (
    <div style={{ marginBottom: 28 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          marginBottom: 8,
          color: "#737a89",
          textTransform: "uppercase",
          letterSpacing: "0.07em",
        }}
      >
        {name}
      </p>
      <div
        style={{
          display: "flex",
          borderRadius: 10,
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        {colors.map(({ label, value }) => {
          const lum = hexLuminance(value);
          const onColor = mono
            ? lum > 0.45
              ? "#171a1f"
              : "#ffffff"
            : lum > 0.45
              ? "#171a1f"
              : "#ffffff";
          return (
            <div key={label} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  background: value,
                  height: 56,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "6px 7px",
                }}
              >
                <span style={{ fontSize: 10, fontWeight: 700, color: onColor, opacity: 0.65 }}>
                  {label}
                </span>
              </div>
              <div style={{ padding: "6px 5px", background: "#f9fafd" }}>
                <div
                  style={{
                    fontSize: 9,
                    color: "#737a89",
                    fontFamily: "monospace",
                    wordBreak: "break-all",
                    lineHeight: 1.4,
                  }}
                >
                  {formatColor(value)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SingleColor({ name, value, cssVar }: { name: string; value: string; cssVar: string }) {
  return (
    <div style={{ flex: 1 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          marginBottom: 8,
          color: "#737a89",
          textTransform: "uppercase",
          letterSpacing: "0.07em",
        }}
      >
        {name}
      </p>
      <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(0,0,0,0.07)" }}>
        <div
          style={{
            background: value,
            height: 56,
            display: "flex",
            alignItems: "flex-end",
            padding: "6px 10px",
          }}
        >
        </div>
        <div style={{ padding: "8px 10px", background: "#f9fafd" }}>
          <div style={{ fontSize: 9, fontFamily: "monospace", color: "#737a89", marginBottom: 2 }}>
            {value}
          </div>
          <div style={{ fontSize: 9, fontFamily: "monospace", color: "#9fa5b3" }}>{cssVar}</div>
        </div>
      </div>
    </div>
  );
}

// ─── Semantic Table Components ────────────────────────────────────────────────

function SemanticRow({
  token,
  alias,
  cssValue,
}: {
  token: string;
  alias?: string;
  cssValue: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 16px",
        borderBottom: "1px solid #f2f4f9",
        gap: 12,
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 6,
          background: cssValue,
          border: "1px solid rgba(0,0,0,0.07)",
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, color: "#171a1f", fontSize: 12, fontFamily: "monospace" }}>
          {token}
        </div>
      </div>
      {alias && (
        <div
          style={{
            fontSize: 10,
            color: "#5f6572",
            background: "#f2f4f9",
            padding: "3px 7px",
            borderRadius: 4,
            fontFamily: "monospace",
            flexShrink: 0,
          }}
        >
          {alias}
        </div>
      )}
    </div>
  );
}

function SemanticRows({ group }: { group: SemanticGroupName }) {
  return (
    <>
      {semanticGroup(group).map(({ token, alias, value }) => (
        <SemanticRow key={token} token={token} alias={alias} cssValue={value} />
      ))}
    </>
  );
}

function SemanticSection({
  title,
  accentColor = "#4181ff",
  children,
}: {
  title: string;
  accentColor?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h3
        style={{
          fontSize: 13,
          fontWeight: 700,
          marginBottom: 10,
          color: "#171a1f",
          borderLeft: `3px solid ${accentColor}`,
          paddingLeft: 10,
        }}
      >
        {title}
      </h3>
      <div style={{ border: "1px solid #e1e4ec", borderRadius: 8, overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Palette: Story = {
  render: () => (
    <div style={{ padding: 32, fontFamily: "system-ui, sans-serif", maxWidth: 1040 }}>
      <ColorScale name="Gray" colors={paletteScale("gray")} mono />
      <ColorScale name="Blue" colors={paletteScale("blue")} />
      <ColorScale name="Gray Opacity" colors={paletteScale("grayOpacity")} mono />

      <div style={{ display: "flex", gap: 16 }}>
        <SingleColor name="Red" {...paletteColor("red")} />
        <SingleColor name="Green" {...paletteColor("green")} />
      </div>
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div style={{ padding: 32, fontFamily: "system-ui, sans-serif", maxWidth: 800 }}>
      <SemanticSection title="FG — 텍스트, 아이콘 요소에 사용돼요." accentColor="#171a1f">
        <SemanticRows group="fg" />
      </SemanticSection>

      <SemanticSection title="Fill — 배지, 버튼 등 내부가 채워진 독립적 시각 요소의 면 영역에 사용돼요." accentColor="#00a676">
        <SemanticRows group="fill" />
      </SemanticSection>

      <SemanticSection title="Stroke — 테두리, 구분선 등 요소의 경계를 표현하는 데 사용돼요." accentColor="#e05a00">
        <SemanticRows group="stroke" />
      </SemanticSection>

      <SemanticSection title="BG — 페이지, 섹션, 모달 등 넓은 영역의 배경을 구성하는 데 사용돼요." accentColor="#8a4fff">
        <SemanticRows group="bg" />
      </SemanticSection>

      <SemanticSection title="Overlay — 모달, 바텀시트 등이 활성화될 때 배경을 덮고 레이어를 시각적으로 구분하는 오버레이에 사용돼요." accentColor="#464b53">
        <SemanticRows group="overlay" />
      </SemanticSection>

      <SemanticSection title="Shadow — 요소의 깊이감과 계층 구조를 표현하기 위한 그림자에 사용돼요." accentColor="#737a89">
        <SemanticRows group="shadow" />
      </SemanticSection>
    </div>
  ),
};
