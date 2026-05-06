import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Colors",
};
export default meta;

type Story = StoryObj;

type TokenEntry = {
  token: string;
  label: string;
  value: string;
  alias?: string;
  description?: string;
};

// ─── 공통 컴포넌트 (Atomic용) ────────────────────────────────────────────────

function PaletteRow({ title, swatches }: { title: string; swatches: TokenEntry[] }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: "#171a1f" }}>{title}</p>
      <div style={{ display: "flex", gap: 2 }}>
        {swatches.map(({ token, label, value }) => (
          <div key={token} style={{ flex: 1 }}>
            <div
              style={{
                background: value,
                height: 40,
                border: "1px solid rgba(0,0,0,0.06)",
                borderRadius: 2,
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

// ─── 공통 컴포넌트 (Semantic용) ──────────────────────────────────────────────

function SemanticRow({ token, alias, description }: TokenEntry) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 16px",
        borderBottom: "1px solid #f2f4f9",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: `var(${token})`,
          border: "1px solid rgba(0,0,0,0.06)",
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, color: "#171a1f", fontSize: 13, fontFamily: "monospace" }}>
          {token}
        </div>
        {description && (
          <div style={{ color: "#737a89", fontSize: 11, marginTop: 2 }}>{description}</div>
        )}
      </div>
      {alias && (
        <div
          style={{
            fontSize: 11,
            color: "#5f6572",
            background: "#f2f4f9",
            padding: "4px 8px",
            borderRadius: 4,
            fontFamily: "monospace",
          }}
        >
          {alias}
        </div>
      )}
    </div>
  );
}

function SemanticSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
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
        {children}
      </div>
    </div>
  );
}

// ─── 데이터 정의 ─────────────────────────────────────────────────

const neutralTokens: TokenEntry[] = [
  { token: "--colors-neutral-0", label: "0", value: "#ffffff" },
  { token: "--colors-neutral-50", label: "50", value: "#f9fafd" },
  { token: "--colors-neutral-100", label: "100", value: "#f2f4f9" },
  { token: "--colors-neutral-200", label: "200", value: "#e1e4ec" },
  { token: "--colors-neutral-300", label: "300", value: "#ccd0d9" },
  { token: "--colors-neutral-400", label: "400", value: "#9fa5b3" },
  { token: "--colors-neutral-500", label: "500", value: "#737a89" },
  { token: "--colors-neutral-600", label: "600", value: "#5f6572" },
  { token: "--colors-neutral-700", label: "700", value: "#464b53" },
  { token: "--colors-neutral-800", label: "800", value: "#2c3038" },
  { token: "--colors-neutral-900", label: "900", value: "#171a1f" },
];

const neutralOpacityTokens: TokenEntry[] = [
  { token: "--colors-neutral-opacity-100", label: "100", value: "rgba(15, 17, 24, 0.02)" },
  { token: "--colors-neutral-opacity-200", label: "200", value: "rgba(15, 17, 24, 0.04)" },
  { token: "--colors-neutral-opacity-300", label: "300", value: "rgba(15, 17, 24, 0.08)" },
  { token: "--colors-neutral-opacity-400", label: "400", value: "rgba(15, 17, 24, 0.20)" },
  { token: "--colors-neutral-opacity-500", label: "500", value: "rgba(15, 17, 24, 0.28)" },
  { token: "--colors-neutral-opacity-600", label: "600", value: "rgba(15, 17, 24, 0.56)" },
  { token: "--colors-neutral-opacity-700", label: "700", value: "rgba(15, 17, 24, 0.70)" },
  { token: "--colors-neutral-opacity-800", label: "800", value: "rgba(15, 17, 24, 0.80)" },
  { token: "--colors-neutral-opacity-900", label: "900", value: "rgba(15, 17, 24, 0.90)" },
];

const blueTokens: TokenEntry[] = [
  { token: "--colors-blue-100", label: "100", value: "#f7faff" },
  { token: "--colors-blue-200", label: "200", value: "#ebf2ff" },
  { token: "--colors-blue-300", label: "300", value: "#e5eeff" },
  { token: "--colors-blue-400", label: "400", value: "#cbddff" },
  { token: "--colors-blue-500", label: "500", value: "#b0ccff" },
  { token: "--colors-blue-600", label: "600", value: "#82acff" },
  { token: "--colors-blue-700", label: "700", value: "#4181ff" },
  { token: "--colors-blue-800", label: "800", value: "#3c76e9" },
  { token: "--colors-blue-900", label: "900", value: "#3265cb" },
];

const redTokens: TokenEntry[] = [
  { token: "--colors-red", label: "red", value: "#f0405c" },
];

const greenTokens: TokenEntry[] = [
  { token: "--colors-green", label: "green", value: "#00cf95" },
];

// ─── Stories ───────────────────────────────────────────────────────

export const Atomic: Story = {
  render: () => (
    <div style={{ padding: 32, fontFamily: "sans-serif", maxWidth: 900 }}>
      <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 32 }}>Color Palette (Atomic)</h1>
      <PaletteRow title="Neutral" swatches={neutralTokens} />
      <PaletteRow title="Neutral Opacity" swatches={neutralOpacityTokens} />
      <PaletteRow title="Blue" swatches={blueTokens} />
      <PaletteRow title="Red" swatches={redTokens} />
      <PaletteRow title="Green" swatches={greenTokens} />
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div style={{ padding: 32, fontFamily: "sans-serif", maxWidth: 800 }}>
      <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Semantic Tokens</h1>
      <p style={{ color: "#737a89", marginBottom: 40, fontSize: 14 }}>
        의미와 역할에 따라 정의된 토큰입니다. 실제 UI 구현 시 이 토큰을 우선적으로 사용합니다.
      </p>

      <SemanticSection title="FG — 텍스트 / 아이콘">
        <SemanticRow token="--colors-fg-neutral-strong" alias="neutral-900" description="제목, 가장 강조가 필요한 텍스트" value="" label="" />
        <SemanticRow token="--colors-fg-neutral-default" alias="neutral-800" description="기본 본문 텍스트" value="" label="" />
        <SemanticRow token="--colors-fg-neutral-subtle" alias="neutral-700" description="보조 텍스트, 레이블" value="" label="" />
        <SemanticRow token="--colors-fg-neutral-subtler" alias="neutral-500" description="덜 중요한 설명 텍스트" value="" label="" />
        <SemanticRow token="--colors-fg-neutral-subtlest" alias="neutral-400" description="비활성 상태 텍스트" value="" label="" />
        <SemanticRow token="--colors-fg-neutral-faintest" alias="neutral-300" description="가장 약한 텍스트, 구분선 레이블" value="" label="" />
        <SemanticRow token="--colors-fg-neutral-default-disabled" alias="neutral-200" description="비활성(disabled) 상태" value="" label="" />
        <SemanticRow token="--colors-fg-inverted-default" alias="neutral-0" description="어두운 배경 위 텍스트 (흰색)" value="" label="" />
        <SemanticRow token="--colors-fg-brand-default" alias="blue-700" description="브랜드 강조 텍스트" value="" label="" />
        <SemanticRow token="--colors-fg-brand-subtlest" alias="blue-200" description="브랜드 색상 보조 텍스트" value="" label="" />
        <SemanticRow token="--colors-fg-positive-default" alias="green" description="성공 / 긍정 상태 텍스트" value="" label="" />
        <SemanticRow token="--colors-fg-negative-default" alias="red" description="오류 / 경고 텍스트" value="" label="" />
      </SemanticSection>

      <SemanticSection title="Fill — 버튼, 뱃지, 칩 등 면 요소">
        <SemanticRow token="--colors-fill-neutral-default" alias="neutral-0" description="기본 배경 (흰색)" value="" label="" />
        <SemanticRow token="--colors-fill-neutral-strong" alias="neutral-50" description="약한 강조 배경" value="" label="" />
        <SemanticRow token="--colors-fill-neutral-stronger" alias="neutral-100" description="호버 / 포커스 배경" value="" label="" />
        <SemanticRow token="--colors-fill-neutral-strongest" alias="neutral-300" description="구분 영역 배경" value="" label="" />
        <SemanticRow token="--colors-fill-inverted-default" alias="neutral-800" description="다크 버튼 배경" value="" label="" />
        <SemanticRow token="--colors-fill-inverted-default-disabled" alias="neutral-200" description="비활성 버튼 배경" value="" label="" />
        <SemanticRow token="--colors-fill-inverted-default-pressed" alias="neutral-600" description="다크 버튼 누름 상태" value="" label="" />
        <SemanticRow token="--colors-fill-brand-subtlest" alias="blue-100" description="브랜드 가장 연한 배경" value="" label="" />
        <SemanticRow token="--colors-fill-brand-subtler" alias="blue-200" description="브랜드 연한 배경" value="" label="" />
        <SemanticRow token="--colors-fill-brand-subtle" alias="blue-300" description="brand-weak 버튼 배경" value="" label="" />
        <SemanticRow token="--colors-fill-brand-default" alias="blue-700" description="브랜드 기본 버튼 배경" value="" label="" />
        <SemanticRow token="--colors-fill-brand-subtle-pressed" alias="blue-500" description="brand-weak 버튼 누름 상태" value="" label="" />
        <SemanticRow token="--colors-fill-brand-default-pressed" alias="blue-900" description="브랜드 버튼 누름 상태" value="" label="" />
      </SemanticSection>

      <SemanticSection title="Stroke — 보더 / 구분선">
        <SemanticRow token="--colors-stroke-neutral-subtler" alias="neutral-100" description="가장 약한 구분선" value="" label="" />
        <SemanticRow token="--colors-stroke-neutral-subtle" alias="neutral-200" description="기본 입력 보더" value="" label="" />
        <SemanticRow token="--colors-stroke-neutral-default" alias="neutral-300" description="일반 보더, 카드 구분선" value="" label="" />
        <SemanticRow token="--colors-stroke-neutral-strong" alias="neutral-400" description="강조 보더" value="" label="" />
        <SemanticRow token="--colors-stroke-brand-subtle" alias="blue-600" description="비활성 브랜드 보더" value="" label="" />
        <SemanticRow token="--colors-stroke-brand-default" alias="blue-700" description="포커스 / 활성 브랜드 보더" value="" label="" />
        <SemanticRow token="--colors-stroke-negative-default" alias="red" description="오류 상태 보더" value="" label="" />
      </SemanticSection>

      <SemanticSection title="BG — 페이지, 모달 등 넓은 배경">
        <SemanticRow token="--colors-bg-neutral-default" alias="neutral-0" description="페이지 기본 배경" value="" label="" />
        <SemanticRow token="--colors-bg-neutral-strong" alias="neutral-100" description="섹션 구분 배경" value="" label="" />
        <SemanticRow token="--colors-bg-dim-default" alias="neutral-opacity-700" description="모달 오버레이" value="" label="" />
      </SemanticSection>

      <SemanticSection title="Shadow">
        <SemanticRow token="--colors-shadow-subtle" alias="neutral-opacity-100" description="약한 그림자" value="" label="" />
        <SemanticRow token="--colors-shadow-default" alias="neutral-opacity-200" description="기본 카드 그림자" value="" label="" />
        <SemanticRow token="--colors-shadow-strong" alias="neutral-opacity-300" description="강한 그림자" value="" label="" />
        <SemanticRow token="--colors-shadow-stronger" alias="neutral-opacity-500" description="가장 강한 그림자 (팝업 등)" value="" label="" />
      </SemanticSection>
    </div>
  ),
};
