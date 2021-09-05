import { memo, VFC } from "react"
import { ReactNode } from "react-dom/node_modules/@types/react"
import { Header } from "../organisms/layout/Header"

type Props = {
  // ReactNodeでタグで囲った要素を受け取れる
  children: ReactNode;
}

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});