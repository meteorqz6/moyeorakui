import { css } from "../../styled-system/css";

// 키보드로 포커스했을 때만 보이는 공통 포커스 링. 버튼 계열 컴포넌트가 cva base에 펼쳐 쓴다.
// 두께 2px, 흰 배경 대비 약 3.6:1로 WCAG 2.4.7, 2.4.13, 1.4.11 기준을 맞춘다.
// Panda는 다른 파일에서 가져와 펼친 객체를 추출하지 못해서, css.raw로 여기서 CSS를 만들게 한다.
export const focusRing = css.raw({
  _focusVisible: {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: "stroke.brand.default",
    outlineOffset: "2px",
  },
});
