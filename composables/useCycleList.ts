export function useCycleList(
  list: MaybeRefOrGetter<any[]>,
  inputValue: string,
) {
  const _list = toRef(list);
  const activeIndex = ref(0);
  const errorMessage = ref("");

  // const state = computed({
  //   get() {
  //     return _list.value[activeIndex.value];
  //   },
  //   set(value: string) {
  //     const foundIndex = _list.value.indexOf(value);
  //     if (foundIndex > 0) {
  //       activeIndex.value = foundIndex;
  //     } else {
  //       errorMessage.value = "The animal you searched does not exist";
  //     }
  //   },
  // });

  const state = computed(() => {
    return _list.value[activeIndex.value];
  });

  const next = () => {
    if (activeIndex.value === _list.value.length - 1) {
      return (activeIndex.value = 0);
    } else {
      return activeIndex.value++;
    }
  };

  const prev = () => {
    if (activeIndex.value === 0) {
      return (activeIndex.value = _list.value.length - 1);
    } else {
      return activeIndex.value--;
    }
  };

  const go = (inputValue: string) => {
    const isNumeric = !isNaN(Number(inputValue));
    errorMessage.value = "";

    if (!inputValue) {
      errorMessage.value = "You need to type a value";
      return;
    }

    if (isNumeric) {
      const index = Number(inputValue);
      if (_list.value.length < index) {
        errorMessage.value = "The list of animals is not that long";
        return;
      }
      activeIndex.value = index - 1;
      return;
    }

    if (_list.value.includes(inputValue)) {
      activeIndex.value = _list.value.indexOf(inputValue);
    } else {
      errorMessage.value = "The animal you have searched does not exist";
    }
  };

  return {
    state,
    errorMessage,
    next,
    prev,
    go,
  };
}
