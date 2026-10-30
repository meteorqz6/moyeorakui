import { cva, css } from "../../../styled-system/css";
import { cx } from "../../lib/utils";
import { PIN_LOGO_LARGE_SRC, PIN_LOGO_SMALL_SRC } from "./assets";
import { Icon } from "../Icon/Icon";
import type { DecorativeIconType } from "../Icon";

// ─── PinText ────────────────────────────────────────────────────────────────

const pillStyles = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    px: "10px",
    py: "4px",
    borderRadius: "full",
    mb: "[-5px]",
  },
  variants: {
    style: {
      brand: { bg: "fill.brand.default" },
      neutral: { bg: "fill.neutral.default" },
    },
  },
  defaultVariants: { style: "brand" },
});

const tailColorStyles = cva({
  variants: {
    style: {
      brand: { color: "fill.brand.default" },
      neutral: { color: "fill.neutral.default" },
    },
  },
});

function PinTail() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="currentColor"
      style={{ display: "block" }}
    >
      <path d="M1.46 1L5.5 9.5L9.54 1H1.46Z" />
    </svg>
  );
}

export type PinTextStyle = "brand" | "neutral";

export type PinTextProps = {
  style?: PinTextStyle;
  text: string;
  className?: string;
};

export function PinText({ style = "brand", text, className }: PinTextProps) {
  return (
    <div
      className={cx(
        css({
          pt: "4px",
          px: "10px",
          filter: "[drop-shadow(0 0 4px {colors.shadow.neutral.stronger})]",
        }),
        className,
      )}
    >
      <div
        className={css({
          display: "flex",
          flexDir: "column",
          alignItems: "center",
        })}
      >
        <div className={pillStyles({ style })}>
          <span
            className={css({
              textStyle: "caption1",
              color: "fg.neutral.faintest",
              whiteSpace: "nowrap",
            })}
          >
            {text}
          </span>
        </div>
        <div
          className={cx(
            css({ display: "flex", alignItems: "center", justifyContent: "center" }),
            tailColorStyles({ style }),
          )}
        >
          <PinTail />
        </div>
      </div>
    </div>
  );
}

// ─── PinLogo ─────────────────────────────────────────────────────────────────

const PIN_LOGO_CONFIG = {
  large: { container: 72, imgW: 52.693, imgH: 57.957, src: PIN_LOGO_LARGE_SRC },
  small: { container: 48, imgW: 36.053, imgH: 39.654, src: PIN_LOGO_SMALL_SRC },
} as const;

export type PinLogoSize = "small" | "large";

export type PinLogoProps = {
  size?: PinLogoSize;
  className?: string;
};

export function PinLogo({ size = "large", className }: PinLogoProps) {
  const { container, imgW, imgH, src } = PIN_LOGO_CONFIG[size];

  return (
    <div
      className={cx(css({ position: "relative", flexShrink: 0 }), className)}
      style={{ width: container, height: container }}
    >
      <img
        src={src}
        alt=""
        style={{
          position: "absolute",
          width: imgW,
          height: imgH,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

// ─── PinLogoText ─────────────────────────────────────────────────────────────

export type PinLogoTextProps = {
  size?: PinLogoSize;
  text: string;
  className?: string;
};

export function PinLogoText({ size = "large", text, className }: PinLogoTextProps) {
  return (
    <div className={cx(css({ display: "inline-flex", alignItems: "center" }), className)}>
      <div className={css({ display: "flex", flexDir: "column", alignItems: "center" })}>
        <PinText style="brand" text={text} className={css({ mb: "[-2px]" })} />
        <PinLogo size={size} />
      </div>
    </div>
  );
}

// ─── PinFacility ─────────────────────────────────────────────────────────────

export type PinFacilityType = "studyroom" | "meetingroom" | "restaurant" | "cafe";

export type PinFacilityProps = {
  type: PinFacilityType;
  selected?: boolean;
  className?: string;
};

const PIN_BODY_PATH =
  "M32.3467 6C46.8975 6.00001 58.6934 17.7958 58.6934 32.3467C58.6934 43.8232 51.355 53.5843 41.115 57.1972C39.9429 57.6107 38.8403 58.2202 37.954 59.0916L33.7988 63.1768C32.7384 64.2191 31.038 64.2189 29.9775 63.1768L25.2696 58.5481C24.4761 57.768 23.5071 57.1963 22.4755 56.7791C12.8157 52.8729 6 43.4067 6 32.3467C6 17.7958 17.7958 6 32.3467 6Z";

export function PinFacility({ type, selected = false, className }: PinFacilityProps) {
  if (selected) {
    return (
      <div
        className={cx(css({ position: "relative", flexShrink: 0 }), className)}
        style={{ width: 72, height: 72 }}
      >
        <svg
          width="65"
          height="70.3"
          viewBox="0 0 64.6934 69.9584"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            filter: "drop-shadow(0 0 4px rgba(15, 17, 24, 0.28))",
          }}
        >
          <path d={PIN_BODY_PATH} fill="white" />
        </svg>
        <div
          style={{
            position: "absolute",
            width: 42,
            height: 42,
            borderRadius: "50%",
            top: "calc(50% - 2.64px)",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className={css({ bg: "fill.brand.default" })}
        >
          <Icon type={type as DecorativeIconType} size="lg" variant="inverted" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cx(
        css({
          position: "relative",
          flexShrink: 0,
          filter: "[drop-shadow(0 0 4px {colors.shadow.neutral.stronger})]",
        }),
        className,
      )}
      style={{ width: 24, height: 24 }}
    >
      <div
        className={css({
          position: "absolute",
          inset: "[0]",
          bg: "fill.neutral.default",
          borderRadius: "xs",
        })}
      />
      <div
        className={css({
          position: "absolute",
          bg: "fill.brand.default",
          borderRadius: "2xs",
        })}
        style={{ inset: "1.71px" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon type={type as DecorativeIconType} size="xs" variant="inverted" />
      </div>
    </div>
  );
}
