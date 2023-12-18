import { useEffect } from "react";

function useEventObserver(
  eventName: string,
  callback: EventListenerOrEventListenerObject
) {
  useEffect(() => {
    document.addEventListener(eventName, callback);
    return () => document.addEventListener(eventName, callback);
  });
}

export default useEventObserver;
