"use client";

import { useEffect, useState } from "react";
import PreviewModal from "@/app/components/preview-modal";

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
