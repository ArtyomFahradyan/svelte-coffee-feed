export const debounce = ({
      timer,
      callBack,
      timeout = 10000
  }:{
      timer: ReturnType<typeof setTimeout>;
      callBack: () => void,
      timeout: number
  }) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        callBack();
    }, timeout);

    return timer;
}