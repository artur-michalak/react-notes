function dispatchEvent(eventName: string, detail?: unknown) {
  const event = new CustomEvent(eventName, { detail });
  document.dispatchEvent(event);
}

export default dispatchEvent;
