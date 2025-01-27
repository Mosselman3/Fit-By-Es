export function cn(...classes: (string | boolean | undefined | {[key: string]: boolean})[]) {
  return classes
    .filter(Boolean)
    .map((className) => {
      if (typeof className === 'object') {
        return Object.entries(className)
          .filter(([, value]) => value)
          .map(([key]) => key)
          .join(' ');
      }
      return className;
    })
    .join(' ');
}