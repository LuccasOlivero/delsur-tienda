"use client";

import PreviewModal from "@/app/components/preview-modal";
import { useEffect, useState } from "react";

export default function ModalProvider() {
  const [isMounded, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounded) {
    return null;
  }

  return <PreviewModal />;
}
