import Image from "next/image";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="ChatHub — Chatbot AI, Omnichannel, CRM"
      width={1174}
      height={242}
      priority
      className={`${className} select-none object-contain`}
    />
  );
}
