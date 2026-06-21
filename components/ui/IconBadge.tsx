import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";

/**
 * The colored squircle glyph tile that defines macOS Settings nav items.
 * `tile` = tile size, `glyph` = icon stroke size inside.
 */
export function IconBadge({
  icon,
  color,
  tile = 20,
  glyph = 12,
  className,
}: {
  icon: string;
  color: string;
  tile?: number;
  glyph?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("ss-squircle grid shrink-0 place-items-center text-white", className)}
      style={{ backgroundColor: color, width: tile, height: tile }}
    >
      <Icon name={icon} size={glyph} strokeWidth={2.1} />
    </span>
  );
}
