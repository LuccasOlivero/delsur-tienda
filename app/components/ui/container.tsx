interface ContainerProps {
  children?: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-screen-xl px-4">{children}</div>;
}
