<h1 align="middle">투두리스트 크롬 확장 프로그램</h2>

<p align="middle">간단하게 할 일을 추가하고 체크박스, 삭제버튼을 통해 생산성 있는 하루를 도와드리는 확장 프로그램 입니다</p>

## 사용한 기술
- JS
- css
- html


## Project! 실행

투두리스트 실행 과정

![todo_list](https://user-images.githubusercontent.com/77378559/135045214-8c2ba7ef-3304-44ae-bc8c-c5e4b62c15af.gif)


## 이용 방법

크롬 웹 스토어에서 확장 프로그램을 다운 받을 수 있습니다
![5](https://user-images.githubusercontent.com/77378559/135044984-71220098-2b8d-4949-b878-5619966eed47.JPG)


크롬 웹 스토어 링크
- https://chrome.google.com/webstore/detail/todolist/kmcnnhiahibfiipokncpndomocadehff/related?hl=ko&authuser=1

## 기능 소개

ToDoList
- add ToDo
- checkbox ToDo
- delete ToDo
- reset ToDo

간단하게 할 일을 추가하고 체크하고 삭제와 전체삭제 즉, 리셋 기능을 넣었습니다.

- localStorage

할 일을 입력한 값을 저장할 수 있게끔 코드를 구현 했기에 창을 닫고 다시 열어도 할 일을 입력해둔건 삭제 되지 않습니다.

## 아쉬웠던 점, 보완할 점

크롬 확장 프로그램 특성상 복잡하게 기능을 만드는 것 보단 심플하게 가야한다고 생각해서 주요 기능만을 만들었습니다만
만드는 과정에서 할 일 추가하는 부분을 버튼을 누르고 바로 할 일을 작성하게 끔 하려고 구현을 했으나
입력한 값이 DB 저장을 하는 코드 부분에서 지속적인 오류가 발생해 텍스트를 입력하고 엔터 or 추가버튼을 눌러야 등록될 수 있게끔 고친점이 아쉽습니다

보완할 점은 등록한 할 일을 수정 할 수 있는 기능을 추가 하고 싶습니다.
