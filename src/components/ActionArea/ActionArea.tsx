import { css } from "../../../styled-system/css";
import { cx } from "../../lib/utils";

export type ActionAreaType = "single" | "equal" | "weighted" | "icon";

type ActionAreaBase = {
  main: React.ReactNode;
  supportingItem?: React.ReactNode;
  /** 모달처럼 화면 하단 끝에 붙지 않는 곳에서 사용할 때 false로 설정해요. 기본값은 true예요. */
  safeArea?: boolean;
  className?: string;
};

type SingleActionAreaProps = ActionAreaBase & {
  type: "single";
};

type EqualActionAreaProps = ActionAreaBase & {
  type: "equal";
  alternative: React.ReactNode;
};

type WeightedActionAreaProps = ActionAreaBase & {
  type: "weighted";
  sub: React.ReactNode;
};

type IconActionAreaProps = ActionAreaBase & {
  type: "icon";
  sub: React.ReactNode;
};

export type ActionAreaProps =
  | SingleActionAreaProps
  | EqualActionAreaProps
  | WeightedActionAreaProps
  | IconActionAreaProps;

function ButtonArea(props: ActionAreaProps) {
  const buttonAreaClassName = css({ display: "flex", alignItems: "center", gap: "8px", width: "100%" });

  switch (props.type) {
    case "single":
      return <div className={buttonAreaClassName}>{props.main}</div>;
    case "equal":
      return (
        <div className={buttonAreaClassName}>
          <div className={css({ display: "flex", flex: "1 1 0%" })}>{props.alternative}</div>
          <div className={css({ display: "flex", flex: "1 1 0%" })}>{props.main}</div>
        </div>
      );
    case "weighted":
      return (
        <div className={buttonAreaClassName}>
          <div className={css({ display: "flex", flex: "3 1 0%" })}>{props.sub}</div>
          <div className={css({ display: "flex", flex: "7 1 0%" })}>{props.main}</div>
        </div>
      );
    case "icon":
      return (
        <div className={buttonAreaClassName}>
          {props.sub}
          <div className={css({ display: "flex", flex: 1 })}>{props.main}</div>
        </div>
      );
  }
}

export function ActionArea(props: ActionAreaProps) {
  const { supportingItem, safeArea = true, className } = props;

  return (
    <div
      className={cx(
        css({
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          boxSizing: "border-box",
          width: "100%",
          px: "16px",
          py: "12px",
          pb: safeArea ? "max(12px, env(safe-area-inset-bottom))" : "12px",
          bg: "bg.neutral.default",
        }),
        className,
      )}
    >
      {supportingItem}
      <ButtonArea {...props} />
    </div>
  );
}
