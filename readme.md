# HTML, CSS, JavaScript 학습 미션

이 프로젝트는 HTML, CSS, JavaScript의 핵심 개념을 실습하고, 웹 페이지를 구축하는 능력을 기르기 위한 학습 과제 모음입니다. 각 Task는 특정 기술 주제에 초점을 맞춰, 기본기부터 실제 웹 페이지를 구성하는 방법까지 단계적으로 학습할 수 있도록 설계되었습니다.

## 🚀 주요 기능 및 학습 내용

- **HTML5 & 시맨틱 마크업**: 문서의 구조를 의미에 맞게 설계하는 방법을 학습합니다.
- **CSS3 스타일링**:
  - **디자인 시스템**: CSS 변수(Custom Properties)를 활용한 M3 디자인 토큰 시스템을 구축하여 일관된 UI를 유지합니다.
  - **레이아웃**: Flexbox와 CSS Grid를 사용하여 반응형 레이아웃을 구현합니다.
  - **인터랙션**: `:hover`, `transition` 등 가상 클래스와 애니메이션으로 동적인 사용자 경험을 제공합니다.
- **JavaScript (ES6+)**:
  - **DOM 조작**: 동적으로 HTML 요소를 제어하고 상호작용합니다.
  - **이벤트 처리**: 사용자 입력(클릭, 스크롤 등)에 반응하는 로직을 구현합니다.
  - **애니메이션**: `requestAnimationFrame`을 사용한 부드러운 애니메이션을 구현합니다.
- **코드 품질**:
  - **DRY 원칙**: 공통 JavaScript 코드를 `global.js`로 분리하여 중복을 제거하고 유지보수성을 향상시켰습니다.
  - **웹 접근성**: 키보드 사용자를 위한 `:focus-visible` 스타일을 적용하고, 시맨틱 태그를 준수합니다.

---

## 📝 Task 목록

### Task 1: 자동 스크롤 구현
`requestAnimationFrame`을 사용하여 부드러운 자동 스크롤 기능을 구현합니다. 사용자는 슬라이더로 스크롤 속도를 조절할 수 있으며, '시작', '정지', '초기화' 버튼으로 스크롤을 제어할 수 있습니다.

### Task 2: CSS Grid 사진 격자
`display: grid`와 `repeat(3, 1fr)` 속성을 사용하여 3x3 반응형 사진 격자를 만듭니다. `aspect-ratio`를 통해 이미지를 정사각형으로 유지하고, `:hover` 시 흑백에서 컬러로 전환되는 효과를 적용했습니다.

### Task 3: Flexbox 버튼 정렬
`display: flex`와 `justify-content: center`를 사용하여 '확인', '취소' 버튼을 수평 중앙에 배치합니다. 버튼 클릭 시 Modal Dialog가 나타나며, 배경 스크롤 방지 및 ESC 키로 닫기 등 UX를 개선했습니다.

### Task 4: CSS 스타일링
프로젝트 전반에 걸쳐 M3 디자인 시스템 기반의 커스텀 테마(Mono Tone)를 적용합니다. 색상, 타이포그래피, 컴포넌트 스타일을 CSS 변수로 관리하여 일관성을 확보하고, 다크/라이트 모드 전환 기능을 구현합니다.

### Task 5: 개인 소개 페이지
`h1`, `p`, `ul`, `ol`, `blockquote` 등 시맨틱 태그를 사용하여 개인 소개 페이지의 구조를 작성합니다. 이를 통해 웹 페이지의 의미와 구조를 명확히 하는 방법을 학습합니다.

---

## 🛠️ 기술 스택

- **HTML5**
- **CSS3** (Flexbox, Grid, Custom Properties)
- **JavaScript (ES6+)**

---

## 🏃 실행 방법

1.  이 리포지토리를 로컬 컴퓨터에 클론하거나 다운로드합니다.
    ```bash
    git clone https://github.com/sooohaaan/fintech_mission_HCJ.git
    ```
2.  프로젝트 폴더로 이동합니다.
    ```bash
    cd fintech_mission_HCJ
    ```
3.  `index.html` 파일을 웹 브라우저에서 엽니다.

---

## ✍️ 작성자

- **sooohaaan** (@sooohaaan)