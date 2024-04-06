interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w7xl">{children}</div>;
}
