/* eslint-disable quotes */
declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.jpg';

declare module '*.png';
