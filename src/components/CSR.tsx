import { PropsWithChildren, useEffect, useState } from "react";

export default function CSR({ children }: PropsWithChildren) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return children;
}
