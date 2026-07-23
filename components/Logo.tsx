import Image from "next/image";

export function Logo({
  size = 40,
  withText = true,
  priority = false,
}: {
  size?: number;
  withText?: boolean;
  priority?: boolean;
}) {
  return (
    <div className="flex min-w-max flex-shrink-0 items-center gap-3">
      <span
        className="relative inline-block flex-shrink-0 overflow-hidden rounded-full ring-2 ring-flame-500/40 shadow-flame"
        style={{ width: size, height: size }}
      >
        <Image
          src="/media/nfc-logo.jpeg"
          alt="Al Naslan Fitness Center"
          fill
          priority={priority}
          className="object-cover"
          sizes={`${size}px`}
        />
      </span>
      {withText && (
        <span className="whitespace-nowrap leading-none">
          <span className="block text-lg font-extrabold tracking-tight">
            NA<span className="flame-text">SLAN</span>
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-muted">
            Fitness Center
          </span>
        </span>
      )}
    </div>
  );
}
