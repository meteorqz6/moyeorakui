import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Colors",
};
export default meta;

type Story = StoryObj;

type TokenEntry = { token: string; label: string; value: string };

// ─── 공통 컴포넌트 ────────────────────────────────────────────────

function PaletteRow({
  title,
  swatches,
}: {
  title: string;
  swatches: TokenEntry[];
}) {
  return (
    <div style={{ marginBottom: 8 }}>
      <p
        style={{
          fontSize: 13,
          fontWeight: 500,
          marginBottom: 6,
          color: "#171a1f",
        }}
      >
        {title}
      </p>
      <div style={{ display: "flex" }}>
        {swatches.map(({ token, label, value }) => (
          <div key={token} style={{ flex: 1 }}>
            <div
              style={{
                background: value,
                height: 40,
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            />
            <span
              style={{
                display: "block",
                fontSize: 10,
                color: "#737a89",
                marginTop: 4,
                textAlign: "center",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TokenTable({ swatches }: { swatches: TokenEntry[] }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: 13,
        marginBottom: 48,
        marginTop: 16,
      }}
    >
      <thead>
        <tr style={{ background: "#f2f4f9" }}>
          <th
            style={{
              padding: "10px 16px",
              textAlign: "left",
              fontWeight: 600,
              color: "#464b53",
              borderBottom: "1px solid #e1e4ec",
            }}
          >
            이름
          </th>
          <th
            style={{
              padding: "10px 16px",
              textAlign: "left",
              fontWeight: 600,
              color: "#464b53",
              borderBottom: "1px solid #e1e4ec",
            }}
          >
            값
          </th>
        </tr>
      </thead>
      <tbody>
        {swatches.map(({ token, value }, i) => (
          <tr
            key={token}
            style={{ background: i % 2 === 0 ? "#ffffff" : "#f9fafd" }}
          >
            <td
              style={{
                padding: "10px 16px",
                color: "#2c3038",
                borderBottom: "1px solid #f2f4f9",
                fontFamily: "monospace",
              }}
            >
              {token}
            </td>
            <td
              style={{
                padding: "10px 16px",
                borderBottom: "1px solid #f2f4f9",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: value,
                  border: "1px solid rgba(0,0,0,0.1)",
                  flexShrink: 0,
                }}
              />
              <span style={{ color: "#464b53", fontFamily: "monospace" }}>
                {value}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ─── 토큰 데이터 ─────────────────────────────────────────────────

const neutralTokens: TokenEntry[] = [
  { token: "--atomic-neutral-0", label: "0", value: "#ffffff" },
  { token: "--atomic-neutral-50", label: "50", value: "#f9fafd" },
  { token: "--atomic-neutral-100", label: "100", value: "#f2f4f9" },
  { token: "--atomic-neutral-200", label: "200", value: "#e1e4ec" },
  { token: "--atomic-neutral-300", label: "300", value: "#ccd0d9" },
  { token: "--atomic-neutral-400", label: "400", value: "#9fa5b3" },
  { token: "--atomic-neutral-500", label: "500", value: "#737a89" },
  { token: "--atomic-neutral-600", label: "600", value: "#5f6572" },
  { token: "--atomic-neutral-700", label: "700", value: "#464b53" },
  { token: "--atomic-neutral-800", label: "800", value: "#2c3038" },
  { token: "--atomic-neutral-900", label: "900", value: "#171a1f" },
];

const neutralOpacityTokens: TokenEntry[] = [
  {
    token: "--atomic-neutral-opacity-100",
    label: "100",
    value: "rgba(0, 21, 42, 0.08)",
  },
  {
    token: "--atomic-neutral-opacity-250",
    label: "250",
    value: "rgba(0, 21, 42, 0.30)",
  },
  {
    token: "--atomic-neutral-opacity-700",
    label: "700",
    value: "rgba(0, 0, 0, 0.60)",
  },
  {
    token: "--atomic-neutral-opacity-750",
    label: "750",
    value: "rgba(44, 48, 56, 0.90)",
  },
];

const blueTokens: TokenEntry[] = [
  { token: "--atomic-blue-100", label: "100", value: "#f7faff" },
  { token: "--atomic-blue-200", label: "200", value: "#ebf2ff" },
  { token: "--atomic-blue-300", label: "300", value: "#e5eeff" },
  { token: "--atomic-blue-400", label: "400", value: "#cbddff" },
  { token: "--atomic-blue-500", label: "500", value: "#b0ccff" },
  { token: "--atomic-blue-600", label: "600", value: "#82acff" },
  { token: "--atomic-blue-700", label: "700", value: "#4181ff" },
  { token: "--atomic-blue-800", label: "800", value: "#3c76e9" },
  { token: "--atomic-blue-900", label: "900", value: "#3265cb" },
];

const redTokens: TokenEntry[] = [
  { token: "--atomic-red", label: "red", value: "#f0405c" },
];

const greenTokens: TokenEntry[] = [
  { token: "--atomic-green", label: "green", value: "#00cf95" },
];

// ─── Atomic ───────────────────────────────────────────────────────

export const Atomic: Story = {
  render: () => (
    <div style={{ padding: 32, fontFamily: "sans-serif", maxWidth: 900 }}>
      <h1
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 32,
          color: "#171a1f",
        }}
      >
        Color Palette
      </h1>

      <PaletteRow title="Neutral" swatches={neutralTokens} />
      <PaletteRow title="Neutral Opacity" swatches={neutralOpacityTokens} />
      <PaletteRow title="Blue" swatches={blueTokens} />
      <PaletteRow title="Red" swatches={redTokens} />
      <PaletteRow title="Green" swatches={greenTokens} />

      <h1
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginTop: 32,
          marginBottom: 32,
          color: "#171a1f",
        }}
      >
        Tokens
      </h1>

      <TokenTable
        swatches={[
          ...neutralTokens,
          ...neutralOpacityTokens,
          ...blueTokens,
          ...redTokens,
          ...greenTokens,
        ]}
      />
    </div>
  ),
};

// ─── Semantic ─────────────────────────────────────────────────────

function SemanticSection({
  title,
  description,
  swatches,
}: {
  title: string;
  description?: string;
  swatches: { token: string; label: string }[];
}) {
  return (
    <div style={{ marginBottom: 40 }}>
      <p
        style={{
          fontSize: 13,
          fontWeight: 500,
          marginBottom: 2,
          color: "#171a1f",
        }}
      >
        {title}
      </p>
      {description && (
        <p style={{ fontSize: 12, color: "#737a89", marginBottom: 10 }}>
          {description}
        </p>
      )}
      <div style={{ display: "flex" }}>
        {swatches.map(({ token, label }) => (
          <div key={token} style={{ flex: 1 }}>
            <div
              style={{
                background: `var(${token})`,
                height: 40,
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            />
            <span
              style={{
                display: "block",
                fontSize: 10,
                color: "#737a89",
                marginTop: 4,
                textAlign: "center",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Semantic: Story = {
  render: () => (
    <div style={{ padding: 32, fontFamily: "sans-serif", maxWidth: 900 }}>
      <h1
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 32,
          color: "#171a1f",
        }}
      >
        Semantic Color Tokens
      </h1>

      <SemanticSection
        title="FG"
        description="텍스트 / 아이콘"
        swatches={[
          { token: "--color-fg-neutral-strong", label: "strong" },
          { token: "--color-fg-neutral-default", label: "default" },
          { token: "--color-fg-neutral-subtle", label: "subtle" },
          { token: "--color-fg-neutral-subtler", label: "subtler" },
          { token: "--color-fg-neutral-subtlest", label: "subtlest" },
          { token: "--color-fg-neutral-default-disabled", label: "disabled" },
        ]}
      />

      <SemanticSection
        title="Fill"
        description="버튼, 뱃지, 칩 등 카드보다 작은 면 요소"
        swatches={[
          { token: "--color-fill-neutral-default", label: "neutral-default" },
          { token: "--color-fill-neutral-strong", label: "neutral-strong" },
          { token: "--color-fill-neutral-stronger", label: "neutral-stronger" },
          { token: "--color-fill-inverted-default", label: "inverted-default" },
          {
            token: "--color-fill-inverted-default-pressed",
            label: "inverted-pressed",
          },
          {
            token: "--color-fill-inverted-default-disabled",
            label: "inverted-disabled",
          },
          { token: "--color-fill-brand-subtle", label: "brand-subtle" },
          { token: "--color-fill-brand-default", label: "brand-default" },
          {
            token: "--color-fill-brand-subtle-pressed",
            label: "brand-subtle-pressed",
          },
          {
            token: "--color-fill-brand-default-pressed",
            label: "brand-default-pressed",
          },
        ]}
      />

      <SemanticSection
        title="Stroke"
        description="border, divider"
        swatches={[
          { token: "--color-stroke-neutral-subtle", label: "neutral-subtle" },
          { token: "--color-stroke-neutral-default", label: "neutral-default" },
          { token: "--color-stroke-neutral-strong", label: "neutral-strong" },
          { token: "--color-stroke-brand-subtle", label: "brand-subtle" },
          { token: "--color-stroke-brand-default", label: "brand-default" },
          { token: "--color-stroke-negative", label: "negative" },
        ]}
      />

      <SemanticSection
        title="BG"
        description="페이지, 모달 등 넓은 배경"
        swatches={[
          { token: "--color-bg-neutral-default", label: "neutral-default" },
          { token: "--color-bg-neutral-strong", label: "neutral-strong" },
          { token: "--color-bg-dim", label: "dim" },
        ]}
      />

      <SemanticSection
        title="Shadow"
        swatches={[
          { token: "--color-shadow-default", label: "default" },
          { token: "--color-shadow-strong", label: "strong" },
        ]}
      />
    </div>
  ),
};
