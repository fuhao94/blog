let state;

const useState = (initialValue) => {
  state = state || initialValue;

  const setState = (value) => {
    console.log(value, state)
    state = value;
  }

  return [state, setState]
}

const [count, setCount] = useState(0);

setCount(3)

setTimeout(() => {
  console.log({ count })
}, 100)

