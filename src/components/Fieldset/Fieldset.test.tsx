import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { Chip } from "../Chip/Chip";
import { Fieldset } from "./Fieldset";

describe("Fieldset", () => {
  it("묶음의 이름이 제목에서 온다", () => {
    render(
      <Fieldset label="인원">
        <Chip>2명</Chip>
        <Chip>3명</Chip>
      </Fieldset>,
    );
    expect(screen.getByRole("group", { name: "인원" })).toBeTruthy();
  });

  it("안내문을 묶음에 연결한다", () => {
    render(
      <Fieldset label="인원" helperText="2명부터 20명까지 고를 수 있어요">
        <Chip>2명</Chip>
      </Fieldset>,
    );
    const group = screen.getByRole("group", { name: "인원" });
    const ids = group.getAttribute("aria-describedby")?.split(" ") ?? [];
    expect(ids.map((id) => document.getElementById(id)?.textContent)).toEqual([
      "2명부터 20명까지 고를 수 있어요",
    ]);
  });

  it("안내문이 없으면 묶음에 아무것도 연결하지 않는다", () => {
    render(
      <Fieldset label="인원">
        <Chip>2명</Chip>
      </Fieldset>,
    );
    expect(screen.getByRole("group", { name: "인원" }).hasAttribute("aria-describedby")).toBe(
      false,
    );
  });

  it("접근성 위반이 없다", async () => {
    const { container } = render(
      <Fieldset label="인원">
        <Chip>2명</Chip>
      </Fieldset>,
    );
    expect((await axe(container)).violations).toEqual([]);
  });
});
