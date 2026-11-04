import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { TextField, type TextFieldProps } from "./TextField";

function ControlledTextField(props: Partial<TextFieldProps> & { initialValue?: string }) {
  const { initialValue = "", ...rest } = props;
  const [value, setValue] = useState(initialValue);
  return (
    <TextField
      label="모임장 이름"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onClear={() => setValue("")}
      {...rest}
    />
  );
}

function describedByText(input: HTMLElement) {
  const ids = input.getAttribute("aria-describedby")?.split(" ") ?? [];
  return ids.map((id) => document.getElementById(id)?.textContent);
}

describe("TextField", () => {
  it("제목으로 입력칸을 찾을 수 있다", () => {
    render(<ControlledTextField />);
    expect(screen.getByLabelText("모임장 이름").tagName).toBe("INPUT");
  });

  it("id를 넘기면 그 id를 쓰고, 제목과의 연결은 그대로다", () => {
    render(<TextField label="모임장 이름" id="host-name" />);
    const input = screen.getByLabelText("모임장 이름");
    expect(input.id).toBe("host-name");
  });

  it("그려진 안내문만 aria-describedby에 들어간다", () => {
    const { rerender } = render(<TextField label="이름" />);
    expect(screen.getByLabelText("이름").hasAttribute("aria-describedby")).toBe(false);

    rerender(<TextField label="이름" helperText="최대 4자까지 입력할 수 있어요" />);
    expect(describedByText(screen.getByLabelText("이름"))).toEqual([
      "최대 4자까지 입력할 수 있어요",
    ]);
  });

  it("에러가 있으면 aria-invalid가 붙고, 평소 안내문과 에러가 함께 읽힌다", () => {
    render(
      <TextField
        label="이름"
        helperText="최대 4자까지 입력할 수 있어요"
        errorMessage="이름을 입력해주세요"
      />,
    );
    const input = screen.getByLabelText("이름");
    expect(input.getAttribute("aria-invalid")).toBe("true");
    expect(describedByText(input)).toEqual([
      "최대 4자까지 입력할 수 있어요",
      "이름을 입력해주세요",
    ]);
    expect(screen.getByText("이름을 입력해주세요").getAttribute("aria-live")).toBe("polite");
  });

  it("지우기 버튼은 입력하는 중이고 값이 있을 때만 보인다", async () => {
    const user = userEvent.setup();
    render(<ControlledTextField initialValue="락이" />);
    expect(screen.queryByRole("button", { name: "입력 지우기" })).toBeNull();

    await user.click(screen.getByLabelText("모임장 이름"));
    expect(screen.getByRole("button", { name: "입력 지우기" })).toBeTruthy();

    // 입력칸에서 Tab으로 지우기 버튼에 가도 계속 보인다.
    await user.tab();
    expect(document.activeElement).toBe(screen.getByRole("button", { name: "입력 지우기" }));

    await user.tab();
    expect(screen.queryByRole("button", { name: "입력 지우기" })).toBeNull();
  });

  it("지우기 버튼을 누르면 onClear가 불리고 입력칸에 포커스가 돌아온다", async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();
    render(<ControlledTextField initialValue="락이" onClear={onClear} />);
    const input = screen.getByLabelText("모임장 이름");

    await user.click(input);
    await user.click(screen.getByRole("button", { name: "입력 지우기" }));

    expect(onClear).toHaveBeenCalledTimes(1);
    expect(document.activeElement).toBe(input);
  });

  it("지우기 버튼을 누르는 순간 입력칸 포커스를 빼앗지 않는다", async () => {
    const user = userEvent.setup();
    render(<ControlledTextField initialValue="락이" />);
    await user.click(screen.getByLabelText("모임장 이름"));

    // mousedown을 막아야 Safari(WebKit)에서 버튼이 사라지지 않고 눌린다.
    const notPrevented = fireEvent.mouseDown(screen.getByRole("button", { name: "입력 지우기" }));
    expect(notPrevented).toBe(false);
  });

  it("글자 수를 보여 주고, 최대를 넘으면 넘었다는 상태가 된다", async () => {
    const user = userEvent.setup();
    render(<ControlledTextField maxCharacterCount={4} />);
    const input = screen.getByLabelText("모임장 이름");

    await user.type(input, "락이");
    expect(screen.getByText("2/4").parentElement?.hasAttribute("data-exceeded")).toBe(false);

    await user.type(input, "락이락");
    expect(screen.getByText("5/4").parentElement?.hasAttribute("data-exceeded")).toBe(true);
  });

  it("글자 수는 스크린 리더용 문구로 입력칸에 연결되고, 보이는 숫자는 건너뛴다", async () => {
    const user = userEvent.setup();
    render(
      <ControlledTextField helperText="최대 4자까지 입력할 수 있어요" maxCharacterCount={4} />,
    );
    const input = screen.getByLabelText("모임장 이름");

    await user.type(input, "락이");
    expect(describedByText(input)).toEqual(["최대 4자까지 입력할 수 있어요", "4자 중 2자 입력"]);
    expect(screen.getByText("2/4").getAttribute("aria-hidden")).toBe("true");
  });

  it("안내문 없이 글자 수만 있어도 제한이 전달된다", () => {
    render(<TextField label="이름" maxCharacterCount={4} value="" onChange={() => undefined} />);
    expect(describedByText(screen.getByLabelText("이름"))).toEqual(["4자 중 0자 입력"]);
  });

  it("값을 넘기지 않아도 입력한 글자 수를 센다", async () => {
    const user = userEvent.setup();
    render(<TextField label="이름" maxCharacterCount={4} defaultValue="락" />);
    await user.type(screen.getByLabelText("이름"), "이");
    expect(screen.getByText("2/4")).toBeTruthy();
  });

  it("접근성 위반이 없다", async () => {
    const { container } = render(
      <TextField
        label="이름"
        helperText="최대 4자까지 입력할 수 있어요"
        errorMessage="이름을 입력해주세요"
        maxCharacterCount={4}
        value="락이락이락"
        onChange={() => undefined}
      />,
    );
    expect((await axe(container)).violations).toEqual([]);
  });
});
