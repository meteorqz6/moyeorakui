import type { Meta, StoryObj } from "@storybook/react";
import { ActionArea } from "./ActionArea";
import { Button } from "../Button/Button";
import { IconButton } from "../IconButton/IconButton";
import { Icon } from "../Icon/Icon";
import { css, cx } from "../../../styled-system/css";

const meta: Meta<typeof ActionArea> = {
  title: "Components/Action Area",
  component: ActionArea,
  tags: ["!dev"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ActionArea>;

export const MainAction: Story = {
  name: "Main Action",
  parameters: {
    docs: {
      source: {
        code: `<ActionArea
  type="single"
  main={
    <Button size="xl" display="full" variant="default">
      완료
    </Button>
  }
/>`,
      },
    },
  },
  render: () => (
    <ActionArea
      type="single"
      main={
        <Button size="xl" display="full" variant="default">
          완료
        </Button>
      }
    />
  ),
};

export const SubActionText: Story = {
  name: "Sub Action (텍스트, 3:7)",
  parameters: {
    docs: {
      source: {
        code: `<ActionArea
  type="weighted"
  sub={
    <Button size="xl" display="full" variant="outline">
      초기화
    </Button>
  }
  main={
    <Button size="xl" display="full" variant="default">
      저장하기
    </Button>
  }
/>`,
      },
    },
  },
  render: () => (
    <ActionArea
      type="weighted"
      sub={
        <Button size="xl" display="full" variant="outline">
          초기화
        </Button>
      }
      main={
        <Button size="xl" display="full" variant="default">
          저장하기
        </Button>
      }
    />
  ),
};

export const SubActionIcon: Story = {
  name: "Sub Action (아이콘)",
  parameters: {
    docs: {
      source: {
        code: `<ActionArea
  type="icon"
  sub={
    <IconButton size="lg" variant="fill" aria-label="공유하기">
      <Icon type="share" size="md" />
    </IconButton>
  }
  main={
    <Button size="xl" display="full" variant="default">
      출발지 추가하기
    </Button>
  }
/>`,
      },
    },
  },
  render: () => (
    <ActionArea
      type="icon"
      sub={
        <IconButton size="lg" variant="fill" aria-label="공유하기">
          <Icon type="share" size="md" />
        </IconButton>
      }
      main={
        <Button size="xl" display="full" variant="default">
          출발지 추가하기
        </Button>
      }
    />
  ),
};

export const AlternativeAction: Story = {
  name: "Alternative Action (1:1)",
  parameters: {
    docs: {
      source: {
        code: `<ActionArea
  type="equal"
  alternative={
    <Button size="xl" display="full" variant="outline">
      취소
    </Button>
  }
  main={
    <Button size="xl" display="full" variant="default">
      확인
    </Button>
  }
/>`,
      },
    },
  },
  render: () => (
    <ActionArea
      type="equal"
      alternative={
        <Button size="xl" display="full" variant="outline">
          취소
        </Button>
      }
      main={
        <Button size="xl" display="full" variant="default">
          확인
        </Button>
      }
    />
  ),
};

export const WithSupportingText: Story = {
  name: "Supporting Item (텍스트)",
  parameters: {
    docs: {
      source: {
        code: `<ActionArea
  type="single"
  supportingItem={
    <p className={css({ m: 0, textStyle: "body4", color: "fg.neutral.subtle", textAlign: "center" })}>
      가능한 시간대를 1개 이상 선택해주세요
    </p>
  }
  main={
    <Button size="xl" display="full" variant="default">
      완료
    </Button>
  }
/>`,
      },
    },
  },
  render: () => (
    <ActionArea
      type="single"
      supportingItem={
        <p className={css({ m: 0, textStyle: "body4", color: "fg.neutral.subtle", textAlign: "center" })}>
          가능한 시간대를 1개 이상 선택해주세요
        </p>
      }
      main={
        <Button size="xl" display="full" variant="default">
          완료
        </Button>
      }
    />
  ),
};

export const WithSupportingItem: Story = {
  name: "Supporting Item (부가 콘텐츠)",
  parameters: {
    docs: {
      source: {
        code: `<ActionArea
  type="single"
  supportingItem={
    <div>
      <p>클릭하거나 쓸어내려 가능 시간대를 지정해보세요</p>
      <Legend /> {/* 범례 등 시각적 요소를 자유롭게 구성 */}
    </div>
  }
  main={
    <Button size="xl" display="full" variant="default">
      완료
    </Button>
  }
/>`,
      },
    },
  },
  render: () => {
    const legend = [
      { label: "가능", markerClassName: css({ bg: "fill.brand.default" }) },
      { label: "불가", markerClassName: css({ bg: "bg.neutral.faintest" }) },
    ];

    return (
      <ActionArea
        type="single"
        supportingItem={
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            })}
          >
            <p className={css({ m: 0, textStyle: "body4", color: "fg.neutral.subtle" })}>
              클릭하거나 쓸어내려 가능 시간대를 지정해보세요
            </p>
            <div className={css({ display: "flex", alignItems: "center", gap: "12px" })}>
              {legend.map(({ label, markerClassName }) => (
                <span
                  key={label}
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    textStyle: "body4",
                    color: "fg.neutral.subtle",
                  })}
                >
                  <span
                    className={cx(
                      css({
                        width: "14px",
                        height: "14px",
                        borderRadius: "2xs",
                        boxShadow: "inset 0 0 0 1px {colors.stroke.neutral.subtle}",
                      }),
                      markerClassName,
                    )}
                  />
                  {label}
                </span>
              ))}
            </div>
          </div>
        }
        main={
          <Button size="xl" display="full" variant="default">
            완료
          </Button>
        }
      />
    );
  },
};
