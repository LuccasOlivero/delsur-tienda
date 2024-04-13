interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-screen-2xl">{children}</div>;
}
