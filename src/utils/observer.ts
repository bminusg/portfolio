export const defineObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver => {
  const observer = new IntersectionObserver(callback, options);
  return observer;
};
