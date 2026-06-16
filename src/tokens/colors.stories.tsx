import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Colors",
  tags: ["!dev"],
};
export default meta;

type Story = StoryObj;

// ─── Types ───────────────────────────────────────────────────────────────────

type ColorEntry = {
  label: string;
  value: string;
  cssVar?: string;
};

// ─── Palette Data ────────────────────────────────────────────────────────────

const grayScale: ColorEntry[] = [
  { label: "0", value: "#ffffff", cssVar: "--colors-gray-0" },
  { label: "50", value: "#f9fafd", cssVar: "--colors-gray-50" },
  { label: "100", value: "#f2f4f9", cssVar: "--colors-gray-100" },
  { label: "200", value: "#e1e4ec", cssVar: "--colors-gray-200" },
  { label: "300", value: "#ccd0d9", cssVar: "--colors-gray-300" },
  { label: "400", value: "#9fa5b3", cssVar: "--colors-gray-400" },
  { label: "500", value: "#737a89", cssVar: "--colors-gray-500" },
  { label: "600", value: "#5f6572", cssVar: "--colors-gray-600" },
  { label: "700", value: "#464b53", cssVar: "--colors-gray-700" },
  { label: "800", value: "#2c3038", cssVar: "--colors-gray-800" },
  { label: "900", value: "#171a1f", cssVar: "--colors-gray-900" },
];

const grayOpacityScale: ColorEntry[] = [
  { label: "100", value: "rgba(15, 17, 24, 0.02)", cssVar: "--colors-gray-opacity-100" },
  { label: "200", value: "rgba(15, 17, 24, 0.04)", cssVar: "--colors-gray-opacity-200" },
  { label: "300", value: "rgba(15, 17, 24, 0.08)", cssVar: "--colors-gray-opacity-300" },
  { label: "400", value: "rgba(15, 17, 24, 0.20)", cssVar: "--colors-gray-opacity-400" },
  { label: "500", value: "rgba(15, 17, 24, 0.28)", cssVar: "--colors-gray-opacity-500" },
  { label: "600", value: "rgba(15, 17, 24, 0.56)", cssVar: "--colors-gray-opacity-600" },
  { label: "700", value: "rgba(15, 17, 24, 0.70)", cssVar: "--colors-gray-opacity-700" },
  { label: "800", value: "rgba(15, 17, 24, 0.80)", cssVar: "--colors-gray-opacity-800" },
  { label: "900", value: "rgba(15, 17, 24, 0.90)", cssVar: "--colors-gray-opacity-900" },
];

const blueScale: ColorEntry[] = [
  { label: "100", value: "#f7faff", cssVar: "--colors-blue-100" },
  { label: "200", value: "#ebf2ff", cssVar: "--colors-blue-200" },
  { label: "300", value: "#e5eeff", cssVar: "--colors-blue-300" },
  { label: "400", value: "#cbddff", cssVar: "--colors-blue-400" },
  { label: "500", value: "#b0ccff", cssVar: "--colors-blue-500" },
  { label: "600", value: "#82acff", cssVar: "--colors-blue-600" },
  { label: "700", value: "#4181ff", cssVar: "--colors-blue-700" },
  { label: "800", value: "#3c76e9", cssVar: "--colors-blue-800" },
  { label: "900", value: "#3265cb", cssVar: "--colors-blue-900" },
];

// ─── Palette Components ───────────────────────────────────────────────────────

function formatColor(value: string): string {
  const m = value.match(/rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\s*\)/);
  if (!m) return value;
  const hex = [m[1], m[2], m[3]]
    .map((n) => parseInt(n).toString(16).padStart(2, "0"))
    .join("");
  const alpha = m[4] !== undefined ? ` ${Math.round(parseFloat(m[4]) * 100)}%` : "";
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
  const lum = hexLuminance(value);
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
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: lum > 0.45 ? "#171a1f" : "#ffffff",
              opacity: 0.65,
            }}
          >
            ●
          </span>
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
      <ColorScale name="Gray" colors={grayScale} mono />
      <ColorScale name="Blue" colors={blueScale} />
      <ColorScale name="Gray Opacity" colors={grayOpacityScale} mono />

      <div style={{ display: "flex", gap: 16 }}>
        <SingleColor name="Red" value="#f0405c" cssVar="--colors-red" />
        <SingleColor name="Green" value="#00cf95" cssVar="--colors-green" />
      </div>
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div style={{ padding: 32, fontFamily: "system-ui, sans-serif", maxWidth: 800 }}>
      <SemanticSection title="FG — 텍스트, 아이콘 요소에 사용돼요." accentColor="#171a1f">
        <SemanticRow
          token="--colors-fg-neutral-stronger"
          alias="gray-900"
          cssValue="#171a1f"
        />
        <SemanticRow
          token="--colors-fg-neutral-strong"
          alias="gray-800"
          cssValue="#2c3038"
        />
        <SemanticRow
          token="--colors-fg-neutral-default"
          alias="gray-700"
          cssValue="#464b53"
        />
        <SemanticRow
          token="--colors-fg-neutral-subtle"
          alias="gray-500"
          cssValue="#737a89"
        />
        <SemanticRow
          token="--colors-fg-neutral-subtler"
          alias="gray-400"
          cssValue="#9fa5b3"
        />
        <SemanticRow
          token="--colors-fg-neutral-subtlest"
          alias="gray-300"
          cssValue="#ccd0d9"
        />
        <SemanticRow
          token="--colors-fg-neutral-faintest"
          alias="gray-0"
          cssValue="#ffffff"
        />
        <SemanticRow
          token="--colors-fg-brand-default"
          alias="blue-700"
          cssValue="#4181ff"
        />
        <SemanticRow
          token="--colors-fg-brand-subtle"
          alias="blue-400"
          cssValue="#cbddff"
        />
        <SemanticRow
          token="--colors-fg-brand-subtlest"
          alias="blue-200"
          cssValue="#ebf2ff"
        />
        <SemanticRow
          token="--colors-fg-positive-default"
          alias="green"
          cssValue="#00cf95"
        />
        <SemanticRow
          token="--colors-fg-negative-default"
          alias="red"
          cssValue="#f0405c"
        />
      </SemanticSection>

      <SemanticSection title="Fill — 배지, 버튼 등 내부가 채워진 독립적 시각 요소의 면 영역에 사용돼요." accentColor="#00a676">
        <SemanticRow
          token="--colors-fill-neutral-default"
          alias="gray-800"
          cssValue="#2c3038"
        />
        <SemanticRow
          token="--colors-fill-neutral-default-pressed"
          alias="gray-600"
          cssValue="#5f6572"
        />
        <SemanticRow
          token="--colors-fill-neutral-default-disabled"
          alias="gray-200"
          cssValue="#e1e4ec"
        />
        <SemanticRow
          token="--colors-fill-neutral-subtle"
          alias="gray-300"
          cssValue="#ccd0d9"
        />
        <SemanticRow
          token="--colors-fill-neutral-subtler"
          alias="gray-100"
          cssValue="#f2f4f9"
        />
        <SemanticRow
          token="--colors-fill-neutral-subtlest"
          alias="gray-50"
          cssValue="#f9fafd"
        />
        <SemanticRow
          token="--colors-fill-neutral-faintest"
          alias="gray-0"
          cssValue="#ffffff"
        />
        <SemanticRow
          token="--colors-fill-brand-default"
          alias="blue-700"
          cssValue="#4181ff"
        />
        <SemanticRow
          token="--colors-fill-brand-default-pressed"
          alias="blue-900"
          cssValue="#3265cb"
        />
        <SemanticRow
          token="--colors-fill-brand-subtle"
          alias="blue-300"
          cssValue="#e5eeff"
        />
        <SemanticRow
          token="--colors-fill-brand-subtle-pressed"
          alias="blue-500"
          cssValue="#b0ccff"
        />
        <SemanticRow
          token="--colors-fill-brand-subtler"
          alias="blue-200"
          cssValue="#ebf2ff"
        />
        <SemanticRow
          token="--colors-fill-brand-subtlest"
          alias="blue-100"
          cssValue="#f7faff"
        />
      </SemanticSection>

      <SemanticSection title="Stroke — 테두리, 구분선 등 요소의 경계를 표현하는 데 사용돼요." accentColor="#e05a00">
        <SemanticRow
          token="--colors-stroke-neutral-strong"
          alias="gray-400"
          cssValue="#9fa5b3"
        />
        <SemanticRow
          token="--colors-stroke-neutral-default"
          alias="gray-300"
          cssValue="#ccd0d9"
        />
        <SemanticRow
          token="--colors-stroke-neutral-subtle"
          alias="gray-200"
          cssValue="#e1e4ec"
        />
        <SemanticRow
          token="--colors-stroke-neutral-subtler"
          alias="gray-100"
          cssValue="#f2f4f9"
        />
        <SemanticRow
          token="--colors-stroke-brand-default"
          alias="blue-700"
          cssValue="#4181ff"
        />
        <SemanticRow
          token="--colors-stroke-brand-subtle"
          alias="blue-600"
          cssValue="#82acff"
        />
        <SemanticRow
          token="--colors-stroke-negative-default"
          alias="red"
          cssValue="#f0405c"
        />
      </SemanticSection>

      <SemanticSection title="BG — 페이지, 섹션, 모달 등 넓은 영역의 배경을 구성하는 데 사용돼요." accentColor="#8a4fff">
        <SemanticRow
          token="--colors-bg-neutral-strongest"
          alias="gray-800"
          cssValue="#2c3038"
        />
        <SemanticRow
          token="--colors-bg-neutral-strong"
          alias="gray-100"
          cssValue="#f2f4f9"
        />
        <SemanticRow
          token="--colors-bg-neutral-default"
          alias="gray-0"
          cssValue="#ffffff"
        />
      </SemanticSection>

      <SemanticSection title="Overlay — 모달, 바텀시트 등이 활성화될 때 배경을 덮고 레이어를 시각적으로 구분하는 오버레이에 사용돼요." accentColor="#464b53">
        <SemanticRow
          token="--colors-overlay-neutral-stronger"
          alias="gray-opacity-900"
          cssValue="rgba(15,17,24,0.90)"
        />
        <SemanticRow
          token="--colors-overlay-neutral-strong"
          alias="gray-opacity-800"
          cssValue="rgba(15,17,24,0.80)"
        />
        <SemanticRow
          token="--colors-overlay-neutral-default"
          alias="gray-opacity-700"
          cssValue="rgba(15,17,24,0.70)"
        />
        <SemanticRow
          token="--colors-overlay-neutral-subtle"
          alias="gray-opacity-600"
          cssValue="rgba(15,17,24,0.56)"
        />
        <SemanticRow
          token="--colors-overlay-neutral-subtler"
          alias="gray-opacity-500"
          cssValue="rgba(15,17,24,0.28)"
        />
      </SemanticSection>

      <SemanticSection title="Shadow — 요소의 깊이감과 계층 구조를 표현하기 위한 그림자에 사용돼요." accentColor="#737a89">
        <SemanticRow
          token="--colors-shadow-neutral-stronger"
          alias="gray-opacity-500"
          cssValue="rgba(15,17,24,0.28)"
        />
        <SemanticRow
          token="--colors-shadow-neutral-strong"
          alias="gray-opacity-300"
          cssValue="rgba(15,17,24,0.08)"
        />
        <SemanticRow
          token="--colors-shadow-neutral-default"
          alias="gray-opacity-200"
          cssValue="rgba(15,17,24,0.04)"
        />
        <SemanticRow
          token="--colors-shadow-neutral-subtle"
          alias="gray-opacity-100"
          cssValue="rgba(15,17,24,0.02)"
        />
      </SemanticSection>
    </div>
  ),
};
