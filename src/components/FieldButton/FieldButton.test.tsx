import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, expectTypeOf, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { FieldButton, type FieldButtonProps } from "./FieldButton";

const ADDRESS = "서울 강남구 강남대로 396";
const PLACEHOLDER = "주소를 검색해주세요";

describe("FieldButton", () => {
  it("값이 있으면 이름이 제목과 값이고, 값이 바뀌면 이름도 바뀐다", () => {
    const { rerender } = render(
      <FieldButton label="출발지" value={ADDRESS} placeholder={PLACEHOLDER} />,
    );
    expect(screen.getByRole("button", { name: `출발지 ${ADDRESS}` })).toBeTruthy();

    rerender(
      <FieldButton label="출발지" value="서울 마포구 양화로 160" placeholder={PLACEHOLDER} />,
    );
    expect(screen.getByRole("button", { name: "출발지 서울 마포구 양화로 160" })).toBeTruthy();
  });

  it("값이 없으면 이름이 제목과 placeholder다", () => {
    const { rerender } = render(<FieldButton label="출발지" placeholder={PLACEHOLDER} />);
    expect(screen.getByRole("button", { name: `출발지 ${PLACEHOLDER}` })).toBeTruthy();

    rerender(<FieldButton label="출발지" value="" placeholder={PLACEHOLDER} />);
    expect(screen.getByRole("button", { name: `출발지 ${PLACEHOLDER}` })).toBeTruthy();
  });

  it("버튼을 눌러도, 제목을 눌러도 onClick이 불린다", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<FieldButton label="출발지" placeholder={PLACEHOLDER} onClick={onClick} />);

    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);

    await user.click(screen.getByText("출발지"));
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("키보드 Enter와 Space로 onClick이 불린다", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<FieldButton label="출발지" placeholder={PLACEHOLDER} onClick={onClick} />);

    await user.tab();
    expect(document.activeElement).toBe(screen.getByRole("button"));

    await user.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledTimes(1);

    await user.keyboard(" ");
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("폼 안에서 눌러도 제출되지 않는다", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn((event: React.FormEvent) => event.preventDefault());
    render(
      <form onSubmit={onSubmit}>
        <FieldButton label="출발지" placeholder={PLACEHOLDER} />
      </form>,
    );

    await user.click(screen.getByRole("button"));
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("타입을 건너뛴 속성이 들어와도 type과 이름은 바뀌지 않는다", () => {
    const untyped = { type: "submit", "aria-labelledby": "other", "aria-label": "다른 이름" };
    render(<FieldButton {...untyped} label="출발지" placeholder={PLACEHOLDER} />);
    const button = screen.getByRole("button", { name: `출발지 ${PLACEHOLDER}` });
    expect(button.getAttribute("type")).toBe("button");
  });

  it("id를 넘기면 그 id를 쓰고, 제목과의 연결은 그대로다", () => {
    render(<FieldButton id="departure" label="출발지" placeholder={PLACEHOLDER} />);
    expect(screen.getByRole("button").id).toBe("departure");
    expect(screen.getByText("출발지").getAttribute("for")).toBe("departure");
  });

  it("ref는 버튼으로 전달된다", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<FieldButton ref={ref} label="출발지" placeholder={PLACEHOLDER} />);
    expect(ref.current).toBe(screen.getByRole("button"));
  });

  it("제목과 placeholder는 타입에서 필수이고, 빼기로 한 속성은 받지 않는다", () => {
    expectTypeOf<FieldButtonProps["label"]>().toEqualTypeOf<string>();
    expectTypeOf<FieldButtonProps["placeholder"]>().toEqualTypeOf<string>();
    expectTypeOf<FieldButtonProps>().not.toHaveProperty("type");
    expectTypeOf<FieldButtonProps>().not.toHaveProperty("disabled");
    expectTypeOf<FieldButtonProps>().not.toHaveProperty("children");
    expectTypeOf<FieldButtonProps>().not.toHaveProperty("aria-label");
    expectTypeOf<FieldButtonProps>().not.toHaveProperty("aria-labelledby");
  });

  // jsdom에서는 색 대비를 검사하지 못한다.
  it("접근성 위반이 없다", async () => {
    const { container, rerender } = render(
      <FieldButton label="출발지" placeholder={PLACEHOLDER} />,
    );
    expect((await axe(container)).violations).toEqual([]);

    rerender(<FieldButton label="출발지" value={ADDRESS} placeholder={PLACEHOLDER} />);
    expect((await axe(container)).violations).toEqual([]);
  });
});
