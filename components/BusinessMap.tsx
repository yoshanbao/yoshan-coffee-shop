import { businessInfo } from "@/lib/business-info";

export function BusinessMap({ className = "" }: { className?: string }) {
  return (
    <iframe
      className={`h-full w-full border-0 ${className}`}
      title={`Google Maps location of ${businessInfo.name} at ${businessInfo.address}`}
      src={`https://maps.google.com/maps?q=${encodeURIComponent(businessInfo.address)}&z=16&output=embed`}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}
