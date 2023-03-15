const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
const Content = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
      {/* код после выполнения task1 и до выполнения task2
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p> */}
    </div>
  );
};
const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        <p>
          Number of exersises{" "}
          {props.exercises1 + props.exercises2 + props.exercises3}
        </p>
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Slack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />

      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>

    // в части 1 домашнего задания компонент Content в функции App выглядел следующим образом:
    // part1={part1}
    // exercises1={exercises1}
    // part2={part2}
    // exercises2={exercises2}
    // part3={part3}
    // exercises3={exercises3}

    // первоначальный код до распределения на компоненты
    // <div>
    //   <h1>(course)</h1>
    //   <p>
    //     {part1} {exercises1}
    //   </p>
    //   <p>
    //     {part2} {exercises2}
    //   </p>
    //   <p>
    //     {part3} {exercises3}
    //   </p>
    //   <p>Number of exersises {exercises1 + exercises2 + exercises3}</p>
    // </div>
  );
};

export default App;
