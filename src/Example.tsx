import * as React from "react";

type ComponentProps = {
  className?: string;
};

class Test {
  getAComponent(): React.FC<ComponentProps> {
    return function ComponentName(props: ComponentProps): React.ReactElement {
      return <div className={props.className}>Hello</div>;
    };
  }
}

const test = new Test();
const Comp = test.getAComponent();

export default function App(): React.ReactElement {
  return (
    <div className="App">
      <Comp className="text-success" />
    </div>
  );
}